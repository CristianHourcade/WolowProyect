import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent {
  @Input() text: string;
  @Output() onClick = new EventEmitter();

  onClickButton() {
    this.onClick.emit();
  }
}
