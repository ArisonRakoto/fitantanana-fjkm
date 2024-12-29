import { IForm } from '../models/form.interface';

export const profileFormConfig: IForm = {
  saveBtnTitle: 'Confirm Registration',
  cancelBtnTitle: 'Reset',
  formControls: [
    {
      name: 'noFiang',
      label: 'N° Fiangonana',
      value: '',
      placeholder: '',
      class: 'w-1/3',
      type: 'text',
      validators: [
        {
          validatorName: 'pattern',
          pattern: '^[A-Z]{8,15}$',
          message: 'First name should be 8-15 characters in uppercase',
        },
        {
          validatorName: 'required',
          message: 'First Name is Required',
        },
      ],
    },
    {
      name: 'firstName',
      label: 'First name',
      value: '',
      placeholder: '',
      class: 'w-1/3',
      type: 'text',
      validators: [
        {
          validatorName: 'pattern',
          pattern: '^[A-Z]{8,15}$',
          message: 'First name should be 8-15 characters in uppercase',
        },
        {
          validatorName: 'required',
          message: 'First Name is Required',
        },
      ],
    },
  ],
};
