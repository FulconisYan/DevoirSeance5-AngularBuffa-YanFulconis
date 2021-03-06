import { Injectable } from '@angular/core';
import {Profile} from '../assignments/profile.model';
import {Assignment} from "../assignments/assignment.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInAdmin=false;
  loggedInUser=false;
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

  logInAdmin(){
    this.loggedInAdmin = true;
  }

  logInUser(){
    this.loggedInUser = true;
  }

  logOut(){
    this.loggedInAdmin = false;
    this.loggedInUser = false;
  }

  verifUser(profil:Profile)
  {
    this.profils.forEach((p, index) => {
      if(p.login === profil.login && p.password === profil.password) {
        if (p.role == 1)
        {
            this.logInAdmin();
        }
        else
        {
            this.logInUser()
        }
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
        resolve(this.loggedInAdmin);
      }
    );

    return isUserAdmin;
  }

  isLogged(){
    const isUserLogged = new Promise(
      (resolve,reject) => {
        resolve(this.loggedInUser);
      }
    );

    return isUserLogged;
  }

}
