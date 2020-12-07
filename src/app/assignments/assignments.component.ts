import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import {Assignment} from './assignment.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogAssignmentComponent} from "./dialog-assignment/dialog-assignment.component";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignments:Assignment[];

  constructor(private assignmentService:AssignmentsService, private authService:AuthService) { }

  ngOnInit(): void {
    //this.assignments = this.assignmentService.getAssignments();
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentService.getAssignments()
      .subscribe((assignments) => {
        this.assignments = assignments
      });
  }

  isAdmin(){
    return this.authService.loggedIn;
  }


  /*
  onAddAssignmentBtnClick() {
  }*/
  /*
  assignmentClique(assignment) {
    this.assignmentSelectionne = assignment;
    console.log(assignment);
  }*/

  /*
  onNouvelAssignment(event) {
    //console.log("components : onNouvelAssignment")
    // event est un Assignment ajouté par le fils (add-assignment)
    //this.assignments.push(event);

    this.assignmentService.addAssignment(event)
      .subscribe((message) => console.log(message));

    // on cache le formulaire d'ajout
  }
   */
}
