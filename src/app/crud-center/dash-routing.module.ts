import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
const dasboardRoutes=<Routes>[
  { path: 'profile',component:ProfileComponent},
  { path: 'galleries',component:GalleriesComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(dasboardRoutes)
  ],
  exports:[RouterModule]
})
export class DashRoutingModule { }
