import { readonly, ref } from 'vue';

export type LaunchToastType = 'success' | 'error' | 'validation' | 'duplicate';

export interface LaunchToastPayload {
  type: LaunchToastType;
  title: string;
  message: string;
}

export interface LaunchToast extends LaunchToastPayload {
  id: number;
  isVisible: boolean;
}

const toast = ref<LaunchToast | null>(null);
let toastTimer: ReturnType<typeof window.setTimeout> | null = null;
let hideTimer: ReturnType<typeof window.setTimeout> | null = null;

const TOAST_DURATION_MS = 4_000;
const TOAST_ANIMATION_MS = 250;

const toastPresets: Record<LaunchToastType, LaunchToastPayload> = {
  success: {
    type: 'success',
    title: "You're on the list!",
    message: "We'll notify you via WhatsApp before OneMission officially launches.",
  },
  error: {
    type: 'error',
    title: 'Something went wrong',
    message: 'Please try again in a moment.',
  },
  validation: {
    type: 'validation',
    title: 'Invalid WhatsApp Number',
    message: 'Please enter a valid Indonesian WhatsApp number.',
  },
  duplicate: {
    type: 'duplicate',
    title: 'Already Registered',
    message: 'This WhatsApp number is already on our waiting list.',
  },
};

function clearTimers() {
  if (toastTimer) {
    window.clearTimeout(toastTimer);
    toastTimer = null;
  }
  if (hideTimer) {
    window.clearTimeout(hideTimer);
    hideTimer = null;
  }
}

function closeToast() {
  if (!toast.value) return;
  toast.value = { ...toast.value, isVisible: false };
  hideTimer = window.setTimeout(() => {
    toast.value = null;
    hideTimer = null;
  }, TOAST_ANIMATION_MS);
}

function showToast(type: LaunchToastType) {
  if (typeof window === 'undefined') return;

  clearTimers();
  toast.value = {
    ...toastPresets[type],
    id: Date.now(),
    isVisible: true,
  };

  toastTimer = window.setTimeout(closeToast, TOAST_DURATION_MS);
}

export function useLaunchToast() {
  return {
    toast: readonly(toast),
    showToast,
    closeToast,
  };
}
