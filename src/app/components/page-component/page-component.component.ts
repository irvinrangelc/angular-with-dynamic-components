import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EntryComponent1Component } from '../../components/entry-component1/entry-component1.component';

@Component({
  selector: 'app-page-component',
  templateUrl: './page-component.component.html',
  styleUrls: ['./page-component.component.scss']
})
export class PageComponentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EntryComponent1Component, {
      width: '250px',
      data: {name: 'Entry Component 1'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed, result: ', result);
    });
  }

}
