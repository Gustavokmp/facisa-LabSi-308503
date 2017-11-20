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
import { CriarProvaPage } from './../pages/criar-prova/criar-prova';
import { DisciplinaProvaPage } from './../pages/disciplina-prova/disciplina-prova';
import { DisciplinaProvider } from './../providers/disciplina/disciplina';
import { LoginPage } from './../pages/login/login';
import { MyApp } from './app.component';
import { ProfessorLogadoPage } from './../pages/professor-logado/professor-logado';
import { FormularioProvaPage } from "./../pages/formulario-prova/formulario-prova";
import { AlunoHistoricoPage } from "./../pages/aluno-historico/aluno-historico";
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
    FormularioProvaPage,
    AdicionarAlunoDisciplinaPage,
    AlunoHistoricoPage,
    DisciplinaProvaPage
   
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
    CadastraDisciplinaPage,
    FormularioProvaPage,
    AdicionarAlunoDisciplinaPage,
    DisciplinaProvaPage,
    AlunoHistoricoPage
    
    
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
