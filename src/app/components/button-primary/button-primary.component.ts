import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {
  
  @Input() text: string;  
  @Output() onClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {}

  onClickButton() {
    this.onClick.emit();
  }
}
