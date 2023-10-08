import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserTabsComponent } from './components/user-tabs/user-tabs.component';
import { DashboardComponent } from './crud-center/components/dashboard/dashboard.component';
import { ProfileComponent } from './crud-center/components/profile/profile.component';
import { GalleriesComponent } from './crud-center/components/galleries/galleries.component';


const routes: Routes = [
  {path:'',component: AboutComponent},
  {path:'registeration',component: UserTabsComponent},
  {
    path: 'dashboard',
    redirectTo: 'dashboard/profile',
    pathMatch: 'full'
  },
  {path:'dashboard',component: DashboardComponent
  ,children:[
    { path: 'profile',component:ProfileComponent},
    { path: 'galleries',component:GalleriesComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
