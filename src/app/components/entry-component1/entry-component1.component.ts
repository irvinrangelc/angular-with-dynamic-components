import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-entry-component1',
  templateUrl: './entry-component1.component.html',
  styleUrls: ['./entry-component1.component.scss']
})
export class EntryComponent1Component implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EntryComponent1Component>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
