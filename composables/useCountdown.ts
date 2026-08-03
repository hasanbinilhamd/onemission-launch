export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

function calculateCountdown(targetDate: Date): CountdownState {
  const remainingMs = Math.max(0, targetDate.getTime() - Date.now());
  const totalSeconds = Math.floor(remainingMs / 1000);

  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    isLive: remainingMs === 0,
  };
}

export function useCountdown(launchDate: string) {
  const targetDate = computed(() => new Date(launchDate));
  const countdown = ref<CountdownState>(calculateCountdown(targetDate.value));

  let timer: ReturnType<typeof setInterval> | undefined;

  onMounted(() => {
    countdown.value = calculateCountdown(targetDate.value);
    timer = setInterval(() => {
      countdown.value = calculateCountdown(targetDate.value);
      if (countdown.value.isLive && timer) {
        clearInterval(timer);
      }
    }, 1000);
  });

  onBeforeUnmount(() => {
    if (timer) clearInterval(timer);
  });

  return countdown;
}
