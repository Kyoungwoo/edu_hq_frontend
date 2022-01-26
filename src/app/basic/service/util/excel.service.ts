import { Injectable } from '@angular/core';
declare var XLSX;

export interface Sheet {
  name: string,
  data: {
    text?: string | number,
    rowspan?: number,
    colspan?: number,
    style?: SheetStyle,
    img?: {
      src:string,
      left?:number,
      top?:number,
      width?:number,
      height?:number
    }
  }[][]
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

  constructor() { }

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
        var ws = {};
        var merge_data = [];
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
            }
            
            if(col.img) {
              if(!ws['!images']) ws['!images'] = [];
              if(col.img.src){
                console.log(col.img.src);
                ws['!images'].push({
                  "!link": col.img.src,
                  "!pos": { c: cur_ci, r: cur_ri, x: col.img.left, y: col.img.top, w: col.img.width, h: col.img.height},
                  "!datatype": "remote"
                });
              }
            }
            
            for(var styleKey in col.style) {
              switch(styleKey) {
                case 'backgroundColor':
                  ws[cr].s["fgColor"] = { rgb: col.style[styleKey].replace('#', '') }
                  break;
                case 'border':
                  var border_arr = col.style[styleKey].split(' ');
                  var borderWidth = '';
                  var borderColor = border_arr[2].replace('#', '');
                  if(border_arr[0] === '1px') {
                    borderWidth = 'thin';
                  } else if(border_arr[0] === '2px') {
                    borderWidth = 'medium';
                  } else {
                    borderWidth = 'thick';
                  }
                  col.colspan = col.colspan || 1;
                  col.rowspan = col.rowspan || 1;
                  for(var x = 0; x < col.colspan; x++) {
                    var index_ci = cur_ci + x;
                      var merged_cr = alphabet[index_ci] + String(cur_ri + 1);
                      if(!ws[merged_cr]) ws[merged_cr] = { t: "s", s: {}, v: "undefinded" };
                      ws[merged_cr].s["top"] = { style: borderWidth, color: { rgb: borderColor } };
                      ws[merged_cr].s["bottom"] = { style: borderWidth, color: { rgb: borderColor } };
                      ws[merged_cr].s["left"] = { style: borderWidth, color: { rgb: borderColor } };
                      ws[merged_cr].s["right"] = { style: borderWidth, color: { rgb: borderColor } };
                      if(sheet_width < index_ci) sheet_width = index_ci;
                      for(var y = 0; y < col.rowspan; y++) {
                      var index_ri = cur_ri + 1 + y;
                      var merged_cr = alphabet[index_ci] + String(index_ri);
                      if(!ws[merged_cr]) ws[merged_cr] = { t: "s", s: {}, v: "undefinded" };
                      ws[merged_cr].s["top"] = { style: borderWidth, color: { rgb: borderColor } };
                      ws[merged_cr].s["bottom"] = { style: borderWidth, color: { rgb: borderColor } };
                      ws[merged_cr].s["left"] = { style: borderWidth, color: { rgb: borderColor } };
                      ws[merged_cr].s["right"] = { style: borderWidth, color: { rgb: borderColor } };
                      if(sheet_height < cur_ri + 1 + y) sheet_height = cur_ri + 1 + y;
                    }
                  }
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
                  var borderSide_arr = col.style[styleKey].split(' ');
                  var borderSideWidth = '';
                  var borderSideColor = borderSide_arr[2].replace('#', '');
                  if(borderSide_arr[0] === '1px') {
                    borderSideWidth = 'thin';
                  } else if(borderSide_arr[0] === '2px') {
                    borderSideWidth = 'medium';
                  } else {
                    borderSideWidth = 'thick';
                  }
                  ws[cr].s[side] = { style: borderSideWidth, color: { rgb: borderSideColor } };
                  if(styleKey === 'borderTop' || styleKey === 'borderBottom') {
                    for(var x = 1; x < col.colspan; x++) {
                      var merged_cr = alphabet[cur_ci + x] + String(cur_ri+1);
                      if(!ws[merged_cr]) ws[merged_cr] = { t: "s", s: {}, v: "undefinded", z: "General" };
                      ws[merged_cr].s[side] = { style: borderSideWidth, color: { rgb: borderSideColor } };
                    }
                  }
                  if(styleKey === 'borderLeft' || styleKey === 'borderRight') {
                    for(var y = 1; y < col.rowspan; y++) {
                      var merged_cr = alphabet[cur_ci] + String(cur_ri + 1 + y);
                      if(!ws[merged_cr]) ws[merged_cr] = { t: "s", s: {}, v: "undefinded", z: "General" };
                      ws[merged_cr].s[side] = { style: borderSideWidth, color: { rgb: borderSideColor } };
                    }
                  }
                  break;
                case 'textAlign':
                  if(!ws[cr].s["alignment"]) ws[cr].s["alignment"] = {};
                  ws[cr].s["alignment"]["horizontal"] = col.style[styleKey];
                  break;
                case 'verticalAlign':
                  if(!ws[cr].s["alignment"]) ws[cr].s["alignment"] = {};
                  switch(col.style[styleKey]) {
                    case 'middle':
                      ws[cr].s["alignment"]["vertical"] = "center";
                      break;
                    default:
                      ws[cr].s["alignment"]["vertical"] = col.style[styleKey];
                      break;
                  }
                  break;
                case 'width':
                  if(!ws['!cols']) ws['!cols'] = [];
                  if(typeof col.style[styleKey] === 'number') ws['!cols'][cur_ci] = { wpx: col.style[styleKey] };
                  else if(col.style[styleKey] === 'auto') ws['!cols'][cur_ci] = { auto: 1 };
                  break;
                case 'height':
                  if(!ws['!rows']) ws['!rows'] = [];
                  if(typeof col.style[styleKey] === 'number') ws['!rows'][cur_ri] = { hpx: col.style[styleKey] };
                  else if(col.style[styleKey] === 'auto') ws['!rows'][cur_ri] = { auto: 1 };
                  break;
                case 'fontSize':
                  ws[cr].s.sz = col.style[styleKey];
                  break;
                case 'fontWeight':
                  if(col.style[styleKey] === 'bold') {
                    ws[cr].s.bold = 1;
                  } else {}
                  break;
                case 'whiteSpace':
                  if(col.style[styleKey] === 'nowrap') {
                    ws[cr].s.alignment.wrapText = false;
                  }
                  break;
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
          if(sheet_width < cur_ci) sheet_width = cur_ci;
        });
        var ref = `A1:${alphabet[sheet_width]}${sheet_height}`;
        ws['!ref'] = ref;
        ws['!merges'] = merge_data;
        console.log(ws);
        wb.SheetNames.push(sheet.name);
        wb.Sheets[sheet.name] = ws;
      });
      
      XLSX.writeFile(wb, fileName + ".xlsx", { type:"buffer", cellStyles: true, bookImages: true, bookSST: false });
  }
}
