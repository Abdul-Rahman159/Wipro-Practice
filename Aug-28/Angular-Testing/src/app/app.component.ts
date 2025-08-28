import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Palindrome Checker</h1>
    <p>Check console for results</p>
  `
})
export class AppComponent {
  title = 'palindrome-app';

  // Function to check palindrome
  isPalindrome(str: string): boolean {
    if (!str) return false;
    const cleaned = str.replace(/\s+/g, '').toLowerCase();
    return cleaned === cleaned.split('').reverse().join('');
  }
}
