import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss']
})
export class ButtonSecondaryComponent {
  @Input() text: string;
  @Input() color: string;
  @Output() onClick = new EventEmitter();

  SendEvent() {
    this.onClick.emit();
  }
}
