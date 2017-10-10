import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
 user:String;
 password:String;
  constructor(private router: Router) {
   }
   

  ngOnInit() {
  }
  login(){
    
    if(this.user == "aluno"){
      this.pageAluno();
    }
    if(this.user == "professor"){
      this.pageProfessor();
    }
    else{

    }
  }
  pageAluno(){
    this.router.navigate(['/aluno'], { replaceUrl: true });
  }
  pageProfessor(){
    this.router.navigate(['/professor'], { replaceUrl: true });
  }

}
