import {Component, Inject, Injectable} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

export interface DialogData {
    title: string;
    content: string;
}

@Injectable({
    providedIn: 'root'
})
export class DialogService {
    title: string;
    content: string;

    constructor(public dialog: MatDialog) {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogOverviewComponent, {
            width: '250px',
            data: {title: this.title, content: this.content}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.content = result;
        });
    }
}

@Component({
    selector: 'app-overview-dialog',
    template: `<h1 mat-dialog-title>{{data.title}}</h1>
        <div mat-dialog-content>
          <p>{{data.content}}</p>
        </div>
        <div mat-dialog-actions>
          <button mat-button (click)="onNoClick()">取消</button>
          <button mat-button cdkFocusInitial>确定</button>
          <!--<button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>确定</button>-->
        </div>`,
})
export class DialogOverviewComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogOverviewComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
