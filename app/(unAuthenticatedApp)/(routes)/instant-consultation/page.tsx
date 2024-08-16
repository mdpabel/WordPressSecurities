import ComponentWrapper from '@/components/ComponentWrapper';
import Hero from '../../_components/Hero';
import lazy from 'next/dynamic';
import { Title } from '@/components/Title';
const Calendly = lazy(() => import('./_components/Calendly'));

export const dynamic = 'force-static';

const InstantConsultation = () => {
  return (
    <ComponentWrapper>
      <Hero
        title='Solve Your WordPress Issues in Minutes'
        description='Having trouble keeping up with your WordPress sites? We manage all the technical details, allowing you to focus on your business while enjoying peace of mind.'
        buttonText='Schedule a Call Now!'
        buttonLink='#calendly'
        image={{
          src: '/hero/instant-consultation.png',
          alt: 'Secure your website',
        }}
      />

      <Calendly />

      <Title>How It Works:</Title>
      <p className='py-2'>
        Get comprehensive soluation for your WordPress website in 4 easy steps.
      </p>
      <ul className='space-y-2'>
        <li>
          <p>
            <strong>Schedule a Call: </strong>
            Use our easy-to-access Calendly link to select a time that fits your
            schedule. Booking is simple and straightforward.
          </p>
        </li>

        <li>
          <p>
            <strong>Immediate Expert Support: </strong>
            Once your appointment is set, our dedicated WordPress engineers will
            connect with you at the scheduled time. Our goal is to address your
            concerns promptly and efficiently.
          </p>
        </li>

        <li>
          <p>
            <strong>Resolve Your Issues: </strong>
            During the call, our experts will work with you to diagnose and
            resolve your WordPress issues. Whether it's a technical glitch, a
            security concern, or performance optimization, we’re here to provide
            immediate solutions.
          </p>
        </li>

        <li>
          <p>
            <strong>Follow-Up Assistance: </strong> We don’t just stop at the
            initial call. Our team will provide any necessary follow-up support
            to ensure your WordPress site runs smoothly and effectively.
          </p>
        </li>
      </ul>
    </ComponentWrapper>
  );
};

export default InstantConsultation;
