import { AbstractControl, ValidationErrors } from "@angular/forms";

const urlRegExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

export function validateTitleBlock (control: AbstractControl): ValidationErrors | null {

  let errorMessage = '';

  if (control.value.length < 3) {
    errorMessage = 'The title is too short';
  }

  if (control.value.length > 20) {
    errorMessage = 'The title is too long';
  }

  return errorMessage 
  ? {
    validateTitleBlock: errorMessage
  } : null;
}

export function validateUrl (control: AbstractControl): ValidationErrors | null {
  
  const link = control.value!;
  let errorMessage = '';
  
  if (!urlRegExp.test(link)) {
    errorMessage += 'url error';
  }

  return errorMessage 
  ? {
    validateUrl: errorMessage
  } : null;
}

export function validateDate (control: AbstractControl): ValidationErrors | null {
  
  const date = new Date(control.value)!;
  const now = new Date();
  let errorMessage = '';
  
  if(now.getDate() - date.getDate()  > 0) {
    errorMessage = 'date error';
  }

  return errorMessage 
  ? {
    validateDate: errorMessage
  } : null;
}