import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/first/app.component';
import { AppRoutingModule } from './/app-routing.module';

import { Router } from '@angular/router';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
   MatInputModule,
   MatCardModule,
   BrowserAnimationsModule,
   NoopAnimationsModule,
   FormsModule,
   ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
   HttpClientModule
  ],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
