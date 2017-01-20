import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';


export const firebaseConfig = {
  apiKey: 'your_apikey',
  authDomain: 'your authDomain',
  databaseURL: 'your_databaseURL',
  storageBucket: 'your_storageBucket',
  messagingSenderId: 'your_messagingSenderId'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MembersComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routes
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
