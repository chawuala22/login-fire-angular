import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PagesModule } from '../pages/pages.module';

@NgModule({
  declarations: [Page404Component, HeaderComponent, FooterComponent],
  exports: [Page404Component, HeaderComponent, FooterComponent],
  imports: [CommonModule],
})
export class SharedModule {}
