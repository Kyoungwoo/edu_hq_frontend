import { FileService } from 'src/app/basic/service/core/file.service';
import { Injectable } from '@angular/core';
// declare var XLSX;
import * as XLSX from '@sheet/image';

export interface Sheet {
  name: string,
  data: {
    text?: string | number,
    rowspan?: number,
    colspan?: number,
    img?: {
      src:string,
      left?:number,
      top?:number,
      width?:number,
      height?:number
    }
  }[][]
  style?: {code:SheetStyle}[][],
  custom_col?: number[]
};

export interface SheetStyle {
  color?: CSSStyleDeclaration["color"],
  background?: CSSStyleDeclaration["background"],
  backgroundColor?: CSSStyleDeclaration["backgroundColor"],
  textAlign?: CSSStyleDeclaration["textAlign"],
  border?: CSSStyleDeclaration["border"],
  borderTop?: CSSStyleDeclaration["borderTop"],
  borderRight?: CSSStyleDeclaration["borderRight"],
  borderLeft?: CSSStyleDeclaration["borderLeft"],
  borderBottom?: CSSStyleDeclaration["borderBottom"],
  verticalAlign?: CSSStyleDeclaration["verticalAlign"],
  width?: number | 'auto',
  height?: number | 'auto',
  fontSize?: number,
  fontWeight?: 'normal' | 'bold',
  whiteSpace: 'nowrap' | 'normal'
}

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private file: FileService) { }

  public make(sheetList:Sheet[], fileName:string) {
      var wb = XLSX.utils.book_new();
      wb.Props = {
        Title: fileName,
        Subject: fileName,
        Author: "Dev.monter",
        CreatedDate: new Date()
      };
  
      var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ'];
      

      
      sheetList.forEach((sheet) => {
        //each sheet
  
        var sheet_width = 0;
        var sheet_height = sheet.data.length;
        var sheet_style_height = sheet.style.length;
        var ws = {};
        var merge_data = [];

        sheet.style.forEach((row, ri) => {
          var cur_ri = ri;
          var cur_ci = -1;

          row.forEach((col) => {
            cur_ci++;
            // for(var mi = 0; mi < merge_data.length; mi++) {
            //   var merge = merge_data[mi];
            //   if(
            //      (merge.s.c <= cur_ci && cur_ci <= merge.e.c)
            //   && (merge.s.r <= cur_ri && cur_ri <= merge.e.r)
            //   ) {
            //     cur_ci += merge.e.c - cur_ci + 1;
            //   }
            // }
            var cr = alphabet[cur_ci] + String(cur_ri+1);

            if(!ws[cr]) {
            ws[cr] = { t: "s", v: '', s: { 
                alignment: {
                  wrapText: true
                } 
              }};	
            }

            for(var styleKey in col.code) {
              switch(styleKey) {
                case 'backgroundColor':
                  ws[cr].s["fgColor"] = { rgb: col.code[styleKey].replace('#', '') }
                  break;
                case 'border':
                  var border_arr = col.code[styleKey].split(' ');
                  var borderWidth = '';
                  var borderColor = border_arr[2].replace('#', '');
                  if(border_arr[0] === '1px') {
                    borderWidth = 'thin';
                  } else if(border_arr[0] === '2px') {
                    borderWidth = 'medium';
                  } else {
                    borderWidth = 'thick';
                  }

                  if(!ws[cr]) ws[cr] = { t: "s", s: {}, v: "undefinded" };
                  ws[cr].s["top"] = { style: borderWidth, color: { rgb: borderColor } };
                  ws[cr].s["bottom"] = { style: borderWidth, color: { rgb: borderColor } };
                  ws[cr].s["left"] = { style: borderWidth, color: { rgb: borderColor } };
                  ws[cr].s["right"] = { style: borderWidth, color: { rgb: borderColor } };

                  break;
                case 'borderTop':
                case 'borderLeft':
                case 'borderBottom':
                case 'borderRight':
                  var side = '';
                  if(styleKey === 'borderTop') side = 'top';
                  else if(styleKey === 'borderLeft') side = 'left';
                  else if(styleKey === 'borderBottom') side = 'bottom';
                  else if(styleKey === 'borderRight') side = 'right';
                  var borderSide_arr = col.code[styleKey].split(' ');
                  var borderSideWidth = '';
                  var borderSideColor = borderSide_arr[2].replace('#', '');
                  if(borderSide_arr[0] === '1px') {
                    borderSideWidth = 'thin';
                  } else if(borderSide_arr[0] === '2px') {
                    borderSideWidth = 'medium';
                  } else {
                    borderSideWidth = 'thick';
                  }
                  if(!ws[cr]) ws[cr] = { t: "s", s: {}, v: "undefinded", z: "General" };
                  ws[cr].s[side] = { style: borderSideWidth, color: { rgb: borderSideColor } };

                  // if(!ws[cr].s["alignment"]) ws[cr].s["alignment"] = {};
                  // ws[cr].s["alignment"]["horizontal"] = { style: borderSideWidth, color: { rgb: borderSideColor } };
                  break;
                case 'textAlign':
                  if(!ws[cr].s["alignment"]) ws[cr].s["alignment"] = {};
                  ws[cr].s["alignment"]["horizontal"] = col.code[styleKey];
                  break;
                case 'verticalAlign':
                  if(!ws[cr].s["alignment"]) ws[cr].s["alignment"] = {};
                  switch(col.code[styleKey]) {
                    case 'middle':
                      ws[cr].s["alignment"]["vertical"] = "center";
                      break;
                    default:
                      ws[cr].s["alignment"]["vertical"] = col.code[styleKey];
                      break;
                  }
                  break;
                case 'width':
                  if(!ws['!cols']) ws['!cols'] = [];
                  if(typeof col.code[styleKey] === 'number') ws['!cols'][cur_ci] = { wpx: col.code[styleKey] };
                  else if(col.code[styleKey] === 'auto') ws['!cols'][cur_ci] = { auto: 1 };
                  break;
                case 'height':
                  if(!ws['!rows']) ws['!rows'] = [];
                  if(typeof col.code[styleKey] === 'number') ws['!rows'][cur_ri] = { hpx: col.code[styleKey] };
                  else if(col.code[styleKey] === 'auto') ws['!rows'][cur_ri] = { auto: 1 };
                  break;
                case 'fontSize':
                  ws[cr].s.sz = col.code[styleKey];
                  break;
                case 'fontWeight':
                  if(col.code[styleKey] === 'bold') {
                    ws[cr].s.bold = 1;
                  } else {}
                  break;
                case 'whiteSpace':
                  if(col.code[styleKey] === 'nowrap') {
                    ws[cr].s.alignment.wrapText = false;
                  }
                  break;
              }
            }
          });

          if(sheet_width < cur_ci) sheet_width = cur_ci;
        });

        sheet.data.forEach((row, ri) => {
          var cur_ri = ri;
          var cur_ci = -1;
          row.forEach((col) => {
            cur_ci++;
            for(var mi = 0; mi < merge_data.length; mi++) {
              var merge = merge_data[mi];
              if(
                 (merge.s.c <= cur_ci && cur_ci <= merge.e.c)
              && (merge.s.r <= cur_ri && cur_ri <= merge.e.r)
              ) {
                cur_ci += merge.e.c - cur_ci + 1;
              }
            }
            var cr = alphabet[cur_ci] + String(cur_ri+1);
            if(!ws[cr]) {
              ws[cr] = { t: "s", v: col.text || '', s: { 
                alignment: {
                  wrapText: true
                } 
              }};	
            } else {
              ws[cr]['t'] = "s";
              ws[cr]['v'] = col.text || '';
              ws[cr]['s']['alignment']['wrapText'] = true;
            }
            
            if(col.img) {
              if(!ws['!images']) ws['!images'] = [];
              if(col.img.src){
                ws['!images'].push({
                  "!link": col.img.src,
                  "!pos": { c: cur_ci, r: cur_ri, x: col.img.left, y: col.img.top, w: col.img.width, h: col.img.height},
                  "!datatype": "remote"
                });
              }
            }
            
            if(col.colspan > 1 || col.rowspan > 1) {
              var s = { c: cur_ci, r: cur_ri };
              var e = { 
                c: col.colspan ? cur_ci + col.colspan - 1 : cur_ci,
                r: col.rowspan ? cur_ri + col.rowspan - 1 : cur_ri
              }
              merge_data.push({ s, e });
            }
          });
        });



        if(sheet.custom_col?.length) {
          ws['!cols'] = [];
          sheet.custom_col.map((item) => {ws['!cols'].push({wpx:item});});
        }


        var ref = `A1:${alphabet[sheet_width]}${sheet_style_height}`;
        ws['!ref'] = ref;
        ws['!merges'] = merge_data;
        console.log(ws);
        wb.SheetNames.push(sheet.name);
        wb.Sheets[sheet.name] = ws;
      });
      
      XLSX.writeFile(wb, fileName + ".xlsx", { type:"buffer", cellStyles: true, bookImages: true, bookSST: false });
  }
}
