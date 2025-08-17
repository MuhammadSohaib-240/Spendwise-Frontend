import { Component, Input } from '@angular/core';
import { ToastService } from './toast.service';

type Pos =
  | 'top-right'
  | 'top-left'
  | 'top-center'
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom-center';

@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.html',
  styleUrl: './toast.scss',
})
export class Toast {
  @Input() position: Pos = 'top-right';
  constructor(public toastService: ToastService) {}
}
