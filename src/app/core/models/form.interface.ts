export interface IForm {
  formControls: IFormControl[];
  saveBtnTitle?: string;
  cancelBtnTitle?: string;
}

export interface IFormControl {
  name: string;
  label: string;
  value: string;
  options?: IOptions[];
  radioOptions?: string[];
  placeholder: string;
  class: string;
  type: string;
  validators: IValidator[];
}

export interface IValidator {
  validatorName?: string;
  message?: string;
  required?: string;
  pattern?: string;
  minLength?: string;
  maxLength?: string;
  email?: string;
}

export interface IOptions {
  id?: number;
  value?: string;
}
