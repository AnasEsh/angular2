import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule,} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import {MatTabsModule} from '@angular/material/tabs';
import { UserTabsComponent } from './user-tabs/user-tabs.component';
import { AboutComponent } from './about/about.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    RegFormComponent,
    UserTabsComponent,
    AboutComponent
  ],
  imports: [ 
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatTabsModule, 
    MatCardModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRippleModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
