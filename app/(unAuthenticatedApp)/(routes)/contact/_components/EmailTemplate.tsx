import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Text,
  Tailwind,
} from '@react-email/components';

interface EmailTemplateProps {
  message: string;
  email: string;
  siteUrl: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message,
  email,
  siteUrl,
}) => (
  <Html>
    <Head />
    <Tailwind>
      <Body className='bg-white my-auto mx-auto font-sans'>
        <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]'>
          <Heading className='text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
            You recieved the following message from your portfolio site
            wordpresssecurities.com
          </Heading>
          <Text className='text-black text-[14px] leading-[24px]'>
            {message}
          </Text>
          <Hr />
          <Text>The sender&apos;s site is {siteUrl}</Text>
          <Text>The sender&apos;s email is {email}</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
