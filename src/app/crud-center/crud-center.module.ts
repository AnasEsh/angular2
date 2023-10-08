import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ListsComponent } from './components/lists/lists.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { AppRoutingModule } from '../app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
    ListsComponent,
    GalleriesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,MatTabsModule
  ]
})
export class CrudCenterModule { }
