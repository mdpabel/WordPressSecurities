import ComponentWrapper from '@/components/ComponentWrapper';
import Image from 'next/image';
import React from 'react';

export const dynamic = 'force-static';

const AboutPage = () => {
  return (
    <ComponentWrapper className='py-12'>
      <div className='mx-auto max-w-7xl'>
        <p className='mt-2 font-medium text-gray-900 text-xl leading-8 tracking-tight'>
          Welcome to NextGenerationWordPress!
        </p>
        <div className='mt-10'>
          <p className='mb-4 text-gray-700'>
            We are a team of four passionate friends, each having completed our
            Computer Science degrees from reputable universities in Bangladesh.
            Our expertise spans various programming languages and frameworks,
            honed through years of solving complex coding challenges and
            addressing real-world problems for clients.
          </p>
          <p className='mb-4 text-gray-700'>
            For the past eight years, we have been dedicated freelancers, making
            our mark on platforms like Upwork, Fiverr, Freelancer.com, and
            PeoplePerHour. Our collective experience also includes significant
            roles as software engineers and data scientists at renowned
            companies in Bangladesh. This diverse background has equipped us
            with the skills and insights necessary to tackle a wide range of
            technical issues.
          </p>

          <div className='gap-8 grid grid-cols-2 md:grid-cols-4'>
            <div>
              <Image
                src='/team/rony.jpg'
                width={800}
                height={800}
                alt='Nasrullah rony'
              />
              <p className='py-2 font-medium text-gray-900'>Nasrullah Rony</p>
            </div>
            <div>
              <Image
                src='/team/pabel.jpg'
                width={800}
                height={800}
                alt='MD Pabel'
              />
              <p className='py-2 font-medium text-gray-900'>MD Pabel</p>
            </div>
            <div>
              <Image
                src='/team/naeem.jpg'
                width={800}
                height={800}
                alt='Naeem'
              />
              <p className='py-2 font-medium text-gray-900'>
                Mohtamim Islam Nayeem
              </p>
            </div>
            <div>
              <Image
                src='/team/saiful.webp'
                width={800}
                height={800}
                alt='Saiful'
              />
              <p className='py-2 font-medium text-gray-900'>Saifur Rahman</p>
            </div>
          </div>
          <div className='mt-6'>
            <ul className='pl-5 text-gray-700 list-disc'>
              <li>
                Over 6140+ hacked websites fixed: We've restored security and
                functionality to countless sites, ensuring our clients' digital
                presence remains safe and robust.
              </li>
              <li>
                More than 200+ websites built: From simple blogs to complex
                e-commerce platforms, we've crafted digital solutions tailored
                to our clients' needs.
              </li>
              <li>
                3000+ clients served globally: Our client base spans the globe,
                with over 55% market penetration in various regions.
              </li>
            </ul>
          </div>
          <p className='mt-4 text-gray-700'>
            After years of freelancing success, we decided to channel our
            expertise into a new venture—NextGenerationWordPress. This
            initiative is our way of transitioning into the specialized world of
            WordPress, offering top-tier services derived from our extensive
            experience. We aim to leverage our knowledge and skills to provide
            unparalleled WordPress solutions, ensuring your website not only
            meets but exceeds your expectations.
          </p>
          <p className='mt-4 text-gray-700'>
            At NextGenerationWordPress, we are committed to delivering
            excellence, security, and innovation. Whether you're looking to
            build a new site from scratch, enhance your existing WordPress site,
            or recover from a cyber attack, we are here to help. Our mission is
            to make your digital experience seamless and successful, backed by
            our proven track record and dedication to client satisfaction.
          </p>
          <p className='mt-4 text-gray-700'>
            Thank you for choosing NextGenerationWordPress. We look forward to
            working with you and bringing your vision to life.
          </p>
          <div className='mt-8'>
            <p className='font-medium text-gray-900'>Best regards,</p>
            <p className='font-medium text-gray-900'>
              The NextGenerationWordPress Team
            </p>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default AboutPage;
