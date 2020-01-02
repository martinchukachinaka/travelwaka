import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/core/models';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private catService: CategoryService,
    public dialogRef: MatDialogRef<EditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public cat: Category
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: this.cat.id,
      creationDate: this.cat.creationDate || new Date().toISOString(),
      code: [this.cat.code, Validators.required],
      name: [this.cat.name, Validators.required],
      description: [this.cat.description],
      icon: this.cat.icon
    });
  }

  submit() {
    if (this.form.valid) {
      this.catService.saveCategory(this.form.value).subscribe(
        result => this.dialogRef.close(result),
        error => this.dialogRef.close(error)
      );
    }
  }
}
