import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AdicionarAlunoDisciplinaPage } from './../pages/adicionar-aluno-disciplina/adicionar-aluno-disciplina';
import { AlunoLogadoPage } from './../pages/aluno-logado/aluno-logado';
import { AlunoProvider } from '../providers/aluno/aluno';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireModule } from "angularfire2";
import { BrowserModule } from '@angular/platform-browser';
import { CadastraDisciplinaPage } from './../pages/cadastra-disciplina/cadastra-disciplina';
import { CadastrarNotasPage } from './../pages/cadastrar-notas/cadastrar-notas';
import {SelecionarProvasPage} from './../pages/selecionar-provas/selecionar-provas';
import { CriarProvaPage } from './../pages/criar-prova/criar-prova';
import { DisciplinaProvider } from './../providers/disciplina/disciplina';
import { LoginPage } from './../pages/login/login';
import { MyApp } from './app.component';
import { ProfessorLogadoPage } from './../pages/professor-logado/professor-logado';
import { ProfessorProvider } from '../providers/professor/professor';
import { ProvaProvider } from '../providers/prova/prova';
import { RegistrarPage } from './../pages/registrar/registrar';
import { RegistroProvider } from './../providers/registro/registro';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

const firebaseConfig = {
  apiKey: "AIzaSyALMT_OzlFA-SG4ppBVlqcyBWPOxQQIXvg",
  authDomain: "testenegadocola.firebaseapp.com",
  databaseURL: "https://testenegadocola.firebaseio.com",
  projectId: "testenegadocola",
  storageBucket: "testenegadocola.appspot.com",
  messagingSenderId: "558184232548"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrarPage,
    ProfessorLogadoPage,
    AlunoLogadoPage,
    CriarProvaPage,
    CadastrarNotasPage,
    CadastraDisciplinaPage,
    SelecionarProvasPage,
    AdicionarAlunoDisciplinaPage,
   
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
    LoginPage,
    RegistrarPage,
    ProfessorLogadoPage,
    AlunoLogadoPage,
    CriarProvaPage,
    CadastrarNotasPage,
    SelecionarProvasPage,
    CadastraDisciplinaPage,
    AdicionarAlunoDisciplinaPage
    
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegistroProvider,
    DisciplinaProvider,
    AlunoProvider,
    ProfessorProvider,
    ProvaProvider
  ]
})
export class AppModule {}
