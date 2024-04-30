import { z } from 'zod';

export const minEmail = 5;
export const maxEmail = 100;
export const minSubject = 5;
export const maxSubject = 300;
export const minMessage = 5;
export const maxMessage = 500;
export const minSiteUrl = 3;
export const maxSiteUrl = 100;

export const FormSchema = z.object({
  email: z
    .string()
    .min(minEmail, {
      message: `Email must be at least ${minEmail} characters`,
    })
    .max(maxEmail, {
      message: `Email must be at most ${maxEmail} characters`,
    })
    .email({
      message: 'Invalid email address',
    }),
  siteUrl: z
    .string()
    .min(minSiteUrl, {
      message: `Site URL must be at least ${minSiteUrl} characters`,
    })
    .max(100, {
      message: `Max URL must be at least ${maxSiteUrl} characters`,
    })
    .url(),
  subject: z
    .string()
    .min(minSubject, {
      message: `Subject must be at least ${minSubject} characters`,
    })
    .max(maxSubject, {
      message: `Subject must be at most ${maxSubject} characters`,
    }),
  message: z
    .string()
    .min(minMessage, {
      message: `Message must be at least ${minMessage} characters`,
    })
    .max(maxMessage, {
      message: `Subject must be at most ${maxMessage} characters`,
    }),

  confirm__name: z.string(),
});

export type FormDataType = z.infer<typeof FormSchema>;
