import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss']
})
export class ButtonSecondaryComponent implements OnInit {

  @Input() text: string;
  @Input() color: string;
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  SendEvent() {
    this.onClick.emit();
  }

}
