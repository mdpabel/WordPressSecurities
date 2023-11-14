'use server';
import { Resend } from 'resend';
import { EmailTemplate } from './EmailTemplate';
import { FormDataType, FormSchema } from './Schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface Response {
  status: 'success' | 'error' | 'honeypot';
  title: string;
  message: string;
}

export const handleFormSubmission = async (data: FormDataType) => {
  try {
    if (data?.confirm__name.length > 0) {
      return {
        status: 'honeypot',
        title: 'Honeypot',
        message: 'This appears to be a spam submission.',
        errors: {},
      };
    }

    const validatedFormData = FormSchema.safeParse(data);

    if (!validatedFormData.success) {
      const errorMessages: Response = {
        status: 'error',
        title: 'Please check the following:',
        message: '',
      };

      validatedFormData.error.errors?.forEach((err) => {
        errorMessages['message'] = errorMessages['message'] + err.message + ',';
      });

      return errorMessages;
    }

    const emailOptions = {
      from: 'From mdpabel.com <onboarding@resend.dev>',
      to: [process.env.TO_EMAIL],
      subject: data.subject,
      reply_to: data.email,
      react: EmailTemplate({
        email: data?.email,
        message: data?.message,
        siteUrl: data?.siteUrl,
      }),
    };
    // @ts-ignore
    const res = await resend.emails.send(emailOptions);

    console.log(res);

    return {
      title: 'Thank You for Reaching Out!',
      message:
        "Your message has been successfully sent. We'll get back to you as soon as possible.!",
      status: 'success',
      errors: {},
    };
  } catch (error) {
    return {
      title: 'Oops! Something Went Wrong',
      message: 'It seems there was an issue with your message submission.',
      status: 'error',
      errors: {},
    };
  }
};
