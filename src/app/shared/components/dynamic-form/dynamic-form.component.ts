import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IForm, IFormControl } from 'src/app/core/models/form.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  imports: [ReactiveFormsModule],
})
export class DynamicFormComponent implements OnInit {
  @Input() form!: IForm;
  dynamicFormGroup: FormGroup;
  fb = inject(FormBuilder);

  constructor() {
    this.dynamicFormGroup = this.fb.group({}, { updateOn: 'submit' });
  }

  ngOnInit(): void {
    if (this.form?.formControls) {
      const formGroup: any = {};
      this.form.formControls.forEach((control: any) => {
        const controlValidators: any = [];
        if (control.validators) {
          control.validators.forEach((val: any) => {
            if (val.validatorName === 'required')
              controlValidators.push(Validators.required);
            if (val.validatorName === 'email')
              controlValidators.push(Validators.email);
            if (val.validatorName === 'minlength')
              controlValidators.push(Validators.minLength(val.minLength));
            if (val.validatorName === 'pattern')
              controlValidators.push(Validators.pattern(val.pattern));
            if (val.validatorName === 'maxlength')
              controlValidators.push(Validators.maxLength(val.maxLength));
          });
        }
        formGroup[control.name] = [control.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }

  onSubmit() {
    if (this.dynamicFormGroup.valid) {
      console.log('Form values:', this.dynamicFormGroup.value);
    }
  }

  // Implement validation error message handling here

  resetForm() {
    this.dynamicFormGroup.reset();
  }

  getErrorMessage(form: IFormControl) {}
}
