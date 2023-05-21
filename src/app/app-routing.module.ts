import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';
import { Page404Component } from './shared/page404/page404.component';
import { SharedRoutingModule } from './shared/shared.routing';

const routes: Routes = [

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule,
    SharedRoutingModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
