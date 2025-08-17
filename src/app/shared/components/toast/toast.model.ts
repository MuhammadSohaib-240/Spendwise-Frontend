export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  duration: number; // ms (0 = sticky)
  dismissible: boolean;
  leaving?: boolean; // internal flag to play exit animation
}
