import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-brackets-validator',
  templateUrl: './brackets-validator.component.html',
  styleUrls: ['./brackets-validator.component.scss'],
})
export class BracketsValidatorComponent {
  input: string;
  constructor(private snackBar: MatSnackBar) {}

  onValidate() {
    const isValid = this.validate(this.input);
    const message = isValid ? 'Valid' : 'Invalid';
    this.snackBar.open(`${message} brackets`, 'CLOSE', {
      duration: 3000,
    });
  }

  private validate(str: string): boolean {
    const bracketsOpened = ['[', '{', '('];
    const bracketsClosed = [']', '}', ')'];
    const stack = [];

    for (const char of str) {
      if (bracketsOpened.includes(char)) {
        stack.push(char);
      } else if (bracketsClosed.includes(char)) {
        const indexOfOpened = bracketsOpened.indexOf(stack.pop());
        const closingBracket = bracketsClosed[indexOfOpened];

        if (char !== closingBracket) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}
