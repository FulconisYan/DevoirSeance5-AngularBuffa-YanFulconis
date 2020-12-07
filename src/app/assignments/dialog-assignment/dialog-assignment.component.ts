import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/auth.service";
import {Profile} from "../profile.model"
import {Assignment} from "../assignment.model";

@Component({
  selector: 'app-dialog-assignment',
  templateUrl: './dialog-assignment.component.html',
  styleUrls: ['./dialog-assignment.component.css']
})
export class DialogAssignmentComponent implements OnInit {
  login:string;
  password:string;

  constructor(public dialogRef:MatDialogRef<DialogAssignmentComponent>,
              private router:Router,
              private authService:AuthService) {}

  ngOnInit(): void {

  }

  onNoClick():void {
      this.dialogRef.close();
  }

  onValidClick(event){

  event.preventDefault();
  const profile = new Profile();
  profile.login = this.login;
  profile.password = this.password;
  this.authService.verifUser(profile);

  console.log(this.login);
  console.log(this.password);
  console.log(profile);

  this.dialogRef.close();
  }



}
