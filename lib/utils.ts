import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const formateDate = (date: Date) => {
  return new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const formateDateAndTime = (date: Date) => {
  return new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

export function calculatePercentageDiscount(
  a: number,
  n: number,
  b: number,
  m: number
) {
  const costPerMonth3Months = a / n;
  const costPerMonth12Months = b / m;

  const percentageDiscount =
    ((costPerMonth3Months - costPerMonth12Months) / costPerMonth3Months) * 100;

  return Math.floor(percentageDiscount);
}
