import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserTabsComponent } from './user-tabs/user-tabs.component';

const routes: Routes = [
  {path:'',component: AboutComponent},
  {path:'registeration',component: UserTabsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
