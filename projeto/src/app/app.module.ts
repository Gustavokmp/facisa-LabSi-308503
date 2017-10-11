<<<<<<< HEAD
import { CriarProvaPage } from './../pages/criar-prova/criar-prova';
import { RegistroProvider } from './../providers/registro/registro';
import { AlunoLogadoPage } from './../pages/aluno-logado/aluno-logado';
import { ProfessorLogadoPage } from './../pages/professor-logado/professor-logado';
import { RegistrarPage } from './../pages/registrar/registrar';
import { LoginPage } from './../pages/login/login';

=======
import { ListaDisciplinaPage } from './../pages/lista-disciplina/lista-disciplina';
import { CadastroDisciplinaPage } from './../pages/cadastro-disciplina/cadastro-disciplina';
import { HomePage } from './../pages/home/home';
import { CadastroPage } from './../pages/cadastro/cadastro';
import { LoginPage } from './../pages/login/login';
>>>>>>> 69ee9a9eaceac1d5c28ac82caed783eb007a09d4
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";


import { MyApp } from './app.component';
<<<<<<< HEAD


const firebaseConfig = {
  apiKey: "AIzaSyDKJekhwJSn5W8-xcsF_g10fMIPShJm8wM",
  authDomain: "negadocola.firebaseapp.com",
  databaseURL: "https://negadocola.firebaseio.com",
  projectId: "negadocola",
  storageBucket: "negadocola.appspot.com",
  messagingSenderId: "61196324193"
};
=======
import { DisciplinaServiceProvider } from '../providers/disciplina-service/disciplina-service';

export const firebaseConfig = {
  apiKey: "AIzaSyDCw7ovenSUXFZLhoZuXemBtpl2Ap32VQ4",
  authDomain: "teste-e0fb7.firebaseapp.com",
  databaseURL: "https://teste-e0fb7.firebaseio.com",
  projectId: "teste-e0fb7",
  storageBucket: "teste-e0fb7.appspot.com",
  messagingSenderId: "951221376667"
}

>>>>>>> 69ee9a9eaceac1d5c28ac82caed783eb007a09d4

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    LoginPage,
    RegistrarPage,
    ProfessorLogadoPage,
    AlunoLogadoPage,
    CriarProvaPage
    
=======
    CadastroPage,
    LoginPage,
    HomePage,
    CadastroDisciplinaPage,
    ListaDisciplinaPage
>>>>>>> 69ee9a9eaceac1d5c28ac82caed783eb007a09d4
    
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
<<<<<<< HEAD
    LoginPage,
    RegistrarPage,
    ProfessorLogadoPage,
    AlunoLogadoPage,
    CriarProvaPage
    
=======
    CadastroPage,
    LoginPage,
    HomePage,
    CadastroDisciplinaPage,
    ListaDisciplinaPage
>>>>>>> 69ee9a9eaceac1d5c28ac82caed783eb007a09d4
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
<<<<<<< HEAD
    RegistroProvider
=======
    DisciplinaServiceProvider
>>>>>>> 69ee9a9eaceac1d5c28ac82caed783eb007a09d4
  ]
})
export class AppModule {}
