import { Injectable, signal } from '@angular/core';
import { Toast, ToastType } from './toast.model';

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly _toasts = signal<Toast[]>([]);
  private _id = 0;

  toasts = this._toasts.asReadonly();

  show(
    message: string,
    type: ToastType = 'info',
    opt?: Partial<Omit<Toast, 'id' | 'message' | 'type'>>
  ) {
    const toast: Toast = {
      id: ++this._id,
      message,
      type,
      duration: opt?.duration ?? 3000,
      dismissible: opt?.dismissible ?? true,
    };
    this._toasts.update((list) => [...list, toast]);

    if (toast.duration > 0) {
      setTimeout(() => this.dismiss(toast.id), toast.duration);
    }
    return toast.id;
  }

  success(msg: string, opt?: Partial<Omit<Toast, 'id' | 'message' | 'type'>>) {
    return this.show(msg, 'success', opt);
  }
  error(msg: string, opt?: Partial<Omit<Toast, 'id' | 'message' | 'type'>>) {
    return this.show(msg, 'error', opt);
  }
  info(msg: string, opt?: Partial<Omit<Toast, 'id' | 'message' | 'type'>>) {
    return this.show(msg, 'info', opt);
  }
  warning(msg: string, opt?: Partial<Omit<Toast, 'id' | 'message' | 'type'>>) {
    return this.show(msg, 'warning', opt);
  }

  dismiss(id: number) {
    // mark leaving to play exit animation
    this._toasts.update((list) => list.map((t) => (t.id === id ? { ...t, leaving: true } : t)));
    // remove after exit animation (keep in sync with CSS)
    setTimeout(() => {
      this._toasts.update((list) => list.filter((t) => t.id !== id));
    }, 250);
  }

  clear() {
    this._toasts.set([]);
  }
}
