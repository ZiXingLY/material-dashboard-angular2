import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class SnackbarService {

    constructor(private snackBar: MatSnackBar) {
    }
    success(message: string) {
        this.snackBar.open(message, '', {
            verticalPosition: 'top',
            duration: 2000,
            panelClass: ['alert', 'alert-success']
        })
    }
    warning(message: string) {
        this.snackBar.open(message, '', {
            verticalPosition: 'top',
            duration: 2000,
            panelClass: ['alert', 'alert-warning']
        })
    }
}
