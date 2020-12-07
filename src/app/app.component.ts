import { Component } from '@angular/core';
import {AuthService} from "./shared/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DialogAssignmentComponent} from "./assignments/dialog-assignment/dialog-assignment.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre = 'Application de gestion des devoirs (Assignments)';
  username:string
  constructor(private authService:AuthService,
              private router:Router,
              private route:ActivatedRoute,
              public dialog:MatDialog) {}

  login(){
    if (this.authService.loggedInAdmin || this.authService.loggedInUser){
      console.log("logOut")
      this.authService.logOut();
      this.router.navigate(['home']);
    }
    else {
      console.log("logIn")
      this.authService.logInAdmin();
    }
  }

  openDialog():void
  {
    const dialogRef = this.dialog.open(DialogAssignmentComponent, { width:'300px'});

    dialogRef.afterClosed().subscribe(result => {
      if (this.route.snapshot.params.login != "") {
        this.username = this.authService.username;

      }
      console.log('The dialog was closed');
    });
  }

  isAdmin(){
    return this.authService.loggedInAdmin;
  }

  isLogged(){
    return this.authService.loggedInUser;
  }


  deconnexion()
  {
    this.router.navigate(['home'])
    this.authService.logOut();
  }


}
