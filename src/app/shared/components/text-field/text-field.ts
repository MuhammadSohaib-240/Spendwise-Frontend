import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  imports: [],
  templateUrl: './text-field.html',
  styleUrl: './text-field.scss',
})
export class TextField {
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() error: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.valueChange.emit(target.value);
  }
}
