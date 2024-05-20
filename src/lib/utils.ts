import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function greetBasedOnTime() {
  const now = new Date();
  const hour = now.getHours();

  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Afternoon";
  } else {
    greeting = "Night";
  }

  return greeting;
}
