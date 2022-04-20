import { AbstractControl, ValidationErrors } from "@angular/forms";

const upperCaseLetters = /[A-Z]/;
const lowerCaseLetters = /[a-z]/;
const numbers = /[0-9]/;
const specialCharacters = /[!@#$%^&*?]/;

export function validatePassword(control: AbstractControl): ValidationErrors | null {
  const password: string = control.value!;

  let errorMessage = 'Your password isn\'t strong enough ';

    if (password.length < 8) {
        errorMessage += '- it must be at least 8 characters \n';
    }

    if (!upperCaseLetters.test(password) && !lowerCaseLetters.test(password) ) {
        errorMessage += '- a mixture of both uppercase and lowercase letters \n';
      }

    if (!numbers.test(password)) {
        errorMessage += '- a mixture of letters and numbers \n';
      }

    if (!specialCharacters.test(password)) {
        errorMessage += '- a mixture of letters and special characters ! @ # $ % ^ & * ? \n';
      }

    return (!upperCaseLetters.test(password) && !lowerCaseLetters.test(password)) 
    || !numbers.test(password) 
    || !specialCharacters.test(password) 
      ? {
        validatePassword: errorMessage
      } : null;
  }