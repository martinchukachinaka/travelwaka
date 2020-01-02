import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  options;
  constructor(private snackbar: MatSnackBar) {
    this.options = {
      duration: 4000
    };
  }

  showSuccess(message: string, title = 'Success') {
    return this.snackbar.open(message, title, this.options);
  }

  showError(message: string, title = 'Error', error?: any) {
    return this.snackbar.open(message, title, this.options);
  }

  showInfo(message: string, title = 'Info') {
    return this.snackbar.open(message, title, this.options);
  }

  showWarning(message: string, title = 'Warning') {
    return this.snackbar.open(message, title, this.options);
  }
}
