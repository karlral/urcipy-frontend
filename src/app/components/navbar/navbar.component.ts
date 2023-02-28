import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user:any=null;
  isLoggedIn:boolean=true;

  constructor(public login:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.user=this.login.getUser();
    this.isLoggedIn=this.login.isLoggedIn();
  }

  public logout(){
    this.login.logout();
    window.location.reload();
  }

}
