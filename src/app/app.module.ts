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
  apiKey: 'AIzaSyDif4_SXRy3TuQfdcYeqt8W8nl4wM6UDtQ',
  authDomain: 'ombak-divers.firebaseapp.com',
  databaseURL: 'https://ombak-divers.firebaseio.com',
  storageBucket: 'ombak-divers.appspot.com',
  messagingSenderId: '57395446739'
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
