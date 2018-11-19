import { User } from './user';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
//import { LoginService, AuthService } from './auth.service';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();
  user: User = new User();
  retorno: {};
  
  constructor(
    private authService: AuthService,
    private router: Router) { }
  //constructor(private authService: LoginService) { }

  ngOnInit() {
  }

    // fazerLogin(){
    //   this.authService.fazerLogin(this.usuario);
    // }
//------------------------------------------------------------------------------------------------------
    // verificarLogin(nome, senha){
    //   let objeto = {
    //     "username": this.usuario.nome,
    //     "password": this.usuario.senha
    //   }
    //  this.authService.verificarLogin(objeto).subscribe((res:Response) => this.retorno = res.json());
    // }
//-------------------------------------------------------------------------------------------------------
    // logar() {
    //   this.authService.logar(this.usuario.nome, this.usuario.senha)
    //     .subscribe(
    //               login => this.processarLogin(login),
    //               /*error => this.msgErro = error*/);
    // }
   
    // processarLogin(login: Usuario) {
    //   localStorage['token'] = login.nome;
    //   //this.router.navigate(['/aluno-listar']);
    // }
//-------------------------------------------------------------------------------------------------------
    login(user) {
      const self = this;
  
        this.authService.login(user).then(function(data) {
          self.authService.setToken(JSON.parse(data['_body'])['token']);
          self.router.navigate(['/home']);
        });
    }
  
    logout() {
      this.authService.removeToken();
    }
}