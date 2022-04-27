import { UserService } from 'src/app/basic/service/core/user.service';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnimationController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { fadeInAnimation } from 'src/app/basic/basic.animation';
import { MenuItem, SideMenuAdminComponent, SubMenuItem, ThirdMenuItem } from '../../side-menu/side-menu-admin/side-menu-admin.component';
import { AlertService } from 'src/app/basic/service/ionic/alert.service';
import { NavService } from 'src/app/basic/service/ionic/nav.service';
import { LogoutService } from 'src/app/service/logout.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss'],
  animations: [ fadeInAnimation ]
})
export class HeaderAdminComponent implements OnInit, OnDestroy {

  url:string;
  selectedMenu:MenuItem;
  selectedSubMenu:SubMenuItem;
  selectedThirdMenu:ThirdMenuItem;

  $router:Subscription;

  constructor(
    private animationCtrl: AnimationController,
    private modal:ModalController,
    private router: Router,
    public adminMenu: SideMenuAdminComponent,
    private changeDetector: ChangeDetectorRef,
    public user: UserService,
    private nav: NavService,
    public logout: LogoutService
  ) {
    this.$router = this.router.events.subscribe(async(nav) => {
      if(nav instanceof NavigationEnd) {
        const selectedMenuIndex = [null,null,null];
        if(this.url !== nav.urlAfterRedirects) this.url = nav.urlAfterRedirects;

        selectedMenuIndex[0] = this.adminMenu.menuList.findIndex(menu => {

          const selectedSecondMenuIndex = menu.subMenuList.findIndex(subMenu => {
            
            if(subMenu.thirdMenuList) {
              
              const selectedTirdMenuIndex = subMenu.thirdMenuList.findIndex(thirdMenu => {
                return this.url === thirdMenu.link;
              });
  
              if(selectedTirdMenuIndex > -1) {
                selectedMenuIndex[2] = selectedTirdMenuIndex;
                return true;
              } else {
                return false;
              }

            } else {

              return this.url === subMenu.link;

            }
          });

          if(selectedSecondMenuIndex > -1) {
            selectedMenuIndex[1] = selectedSecondMenuIndex;
            return true;
          } else {
            return false;
          }
        });
        
        const newMenu = this.adminMenu.menuList[selectedMenuIndex[0]];
        const newSubMenu = this.adminMenu.menuList[selectedMenuIndex[0]]?.subMenuList[selectedMenuIndex[1]];
        let newThirdMenu;
        try {
          newThirdMenu = this.adminMenu.menuList[selectedMenuIndex[0]]?.subMenuList[selectedMenuIndex[1]]?.thirdMenuList[selectedMenuIndex[2]];
        } catch(e) {

        }
        if(this.selectedMenu !== newMenu) this.selectedMenu = newMenu;
        if(this.selectedSubMenu !== newSubMenu) this.selectedSubMenu = newSubMenu;
        if(this.selectedThirdMenu !== newThirdMenu) this.selectedThirdMenu = newThirdMenu;
        this.changeDetector.detectChanges();
      }
    });
  }

  ngOnInit() {
    
  }
  ngOnDestroy(): void {
    this.$router.unsubscribe();
  }

  main() {
    const { userData } = this.user;
    if(userData.user_type === 'COMPANY') {
      this.nav.navigateRoot('/main-sub-admin');
    }
    else {
      this.nav.navigateRoot('/main-admin');
    }
  }

  async openSideMenu(){
    const modal = await this.modal.create({
      component: SideMenuAdminComponent,
      cssClass:'side-menu-admin-modal',
      enterAnimation: (baseEl:HTMLElement) => {
        const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
        .duration(100)
        .fromTo('opacity', '0', '0.08');

        const wrapperEl = <HTMLElement>baseEl.getElementsByClassName('modal-wrapper')[0];
        wrapperEl.style.transformOrigin = '50% 0';
        const wrapperAnimation = this.animationCtrl.create()
        .addElement(wrapperEl)
        .duration(100)
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'scaleY(0.99)', 'scaleY(1)');

        return this.animationCtrl.create()
        .addAnimation([backdropAnimation, wrapperAnimation]);
      },
      leaveAnimation: (baseEl:HTMLElement) => {
        const backdropAnimation = this.animationCtrl.create()
        .addElement(baseEl.getElementsByTagName('ion-backdrop')[0])
        .duration(100)
        .fromTo('opacity', '0.08', '0');
        const wrapperEl = <HTMLElement>baseEl.getElementsByClassName('modal-wrapper')[0]
        wrapperEl.style.transformOrigin = '50% 0';
        const wrapperAnimation = this.animationCtrl.create()
        .addElement(wrapperEl)
        .duration(100)
        .fromTo('opacity', '1', '0')
        .fromTo('transform', 'scale(1)', 'scale(0.99)');
        

        return this.animationCtrl.create()
        .addAnimation([backdropAnimation, wrapperAnimation]);
      }
    });
    modal.present();
  }
}
