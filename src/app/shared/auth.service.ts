import { Injectable } from '@angular/core';
import {Profile} from '../assignments/profile.model';
import {Assignment} from "../assignments/assignment.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn=false;
  username:string;
  constructor() {}

  profils:Profile[] = [
    {
      login: "Sopra-Steria",
      password: "soprasteria",
      role:1
    },
    {
      login: "Capgemini",
      password: "capgemini",
      role:0
    },
    {
      login: "CGI",
      password: "cgi",
      role:0
    },
    {
      login: "Atos",
      password: "atos",
      role:0
    },
  ];

  logIn(){
    this.loggedIn = true;
  }

  logOut(){
    this.loggedIn = false;
  }

  verifUser(profil:Profile)
  {
    this.profils.forEach((p, index) => {
      if(p.login === profil.login && p.password === profil.password) {
        this.logIn();
        this.username = p.login;
        console.log("critères valides");
        //this.assignments[index] = assignment;
      }
    });
    //this.logginService.log(assignment.nom, "modifié");
  }

  isAdmin(){
    const isUserAdmin = new Promise(
      (resolve,reject) => {
        resolve(this.loggedIn);
      }
    );

    return isUserAdmin;
  }

  isLogged(){
    const isUserLogged = new Promise(
      (resolve,reject) => {
        resolve(this.loggedIn);
      }
    );

    return isUserLogged;
  }

}
