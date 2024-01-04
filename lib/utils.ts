import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { isClerkAPIResponseError } from '@clerk/nextjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

export const formatDateAndTime = (date: Date) => {
  return new Date(date).toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
};

export function calculatePercentageDiscount(
  a: number,
  n: number,
  b: number,
  m: number,
) {
  const costPerMonth3Months = a / n;
  const costPerMonth12Months = b / m;

  const percentageDiscount =
    ((costPerMonth3Months - costPerMonth12Months) / costPerMonth3Months) * 100;

  return Math.floor(percentageDiscount);
}

export const catchError = (err: unknown) => {
  if (err instanceof Error) {
    return err.message;
  }

  if (typeof err === 'string') {
    return err;
  }
  return 'Something went wrong, please try again later.';
};

export const absoluteUrl = (path: string) => process.env.APP_URL + path;

export type ToasterProps = {
  message: string;
  type: 'warning' | 'success' | 'info';
};

export function catchClerkError(err: unknown) {
  const unknownErr = 'Something went wrong, please try again later.';
  console.log(err);
  if (isClerkAPIResponseError(err)) {
    const message = err.errors[0]?.longMessage ?? unknownErr;

    return message;
  } else {
    return unknownErr;
  }
}

type FormatCurrencyType = {
  amount: number;
  local?: string;
  currency?: string;
  decimalPlaces?: number;
};

export const formatCurrency = ({
  amount,
  currency = 'USD',
  decimalPlaces = 2,
  local = 'en-US',
}: FormatCurrencyType) => {
  if (!amount) {
    return;
  }

  const formatter = new Intl.NumberFormat(local, {
    style: 'currency',
    currency,
    maximumFractionDigits: decimalPlaces,
  });

  return isNaN(amount) ? '--' : formatter.format(amount);
};

export function capitalize(str: string): string {
  if (str.length === 0) {
    return str; // Return an empty string if the input is empty
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
