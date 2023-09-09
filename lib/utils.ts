import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import { isClerkAPIResponseError } from "@clerk/nextjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const formatDate = (date: Date) => {
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

export const catchError = (err: unknown) => {
  if (err instanceof Error) {
    return err.message;
  }

  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => issue.message);
    return errors.join("\n");
  }

  if (typeof err === "string") {
    return err;
  }
  return "Something went wrong, please try again later.";
};

export const absoluteUrl = (path: string) => process.env.APP_URL + path;

export type ToasterProps = {
  message: string;
  type: "warning" | "success" | "info";
};

export function catchClerkError(err: unknown) {
  const unknownErr = "Something went wrong, please try again later.";
  console.log(err);
  if (err instanceof z.ZodError) {
    const errors = err.issues.map((issue) => {
      return issue.message;
    });

    return errors.join("\n");
  } else if (isClerkAPIResponseError(err)) {
    const message = err.errors[0]?.longMessage ?? unknownErr;

    return message;
  } else {
    return unknownErr;
  }
}
