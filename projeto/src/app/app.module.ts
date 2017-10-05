import { ListaDisciplinaPage } from './../pages/lista-disciplina/lista-disciplina';
import { CadastroDisciplinaPage } from './../pages/cadastro-disciplina/cadastro-disciplina';
import { HomePage } from './../pages/home/home';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";


import { MyApp } from './app.component';
import { DisciplinaServiceProvider } from '../providers/disciplina-service/disciplina-service';

export const firebaseConfig = {
  apiKey: "AIzaSyDCw7ovenSUXFZLhoZuXemBtpl2Ap32VQ4",
  authDomain: "teste-e0fb7.firebaseapp.com",
  databaseURL: "https://teste-e0fb7.firebaseio.com",
  projectId: "teste-e0fb7",
  storageBucket: "teste-e0fb7.appspot.com",
  messagingSenderId: "951221376667"
}


@NgModule({
  declarations: [
    MyApp,
    CadastroPage,
    LoginPage,
    HomePage,
    CadastroDisciplinaPage,
    ListaDisciplinaPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CadastroPage,
    LoginPage,
    HomePage,
    CadastroDisciplinaPage,
    ListaDisciplinaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DisciplinaServiceProvider
  ]
})
export class AppModule {}
