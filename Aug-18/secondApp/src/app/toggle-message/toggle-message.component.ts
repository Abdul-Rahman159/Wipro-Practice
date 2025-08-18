import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-message',
  templateUrl: './toggle-message.component.html',
  styleUrls: ['./toggle-message.component.css']
})
export class ToggleMessageComponent {
  showMessage: boolean = false;  // by default hidden

  toggleMessage(event: any) {
    this.showMessage = event.target.checked;
  }
}
