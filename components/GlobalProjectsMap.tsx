'use client';
import dynamic from 'next/dynamic';
import worldMill from '@react-jvectormap/world/worldMill.json';
import {
  getProjectsByCountryCode,
  totalClients,
  totalProjects,
  totalWebsiteFixes,
  worldDominaation,
} from './GlobalProjectsMap.data';
import { SectionTitleWithSubTitle } from './ui/Title';

const VectorMap = dynamic(
  // @ts-ignore
  () => import('@react-jvectormap/core').then((m) => m.VectorMap),
  { ssr: false },
);

const GlobalProjectsMap = () => {
  return (
    <div className='mb-6'>
      <SectionTitleWithSubTitle
        title='Our Milestones and Worldwide Impact'
        subTitle='Unveiling Project Success, Hacked Website Fixes, Client Relationships, Global Impact.'
      />
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-6'>
        <Card title={totalWebsiteFixes + '+'} subtitle='Hacked Website Fixes' />
        <Card title={worldDominaation + '%'} subtitle='Global Impact' />
        <Card title={totalProjects + '+'} subtitle='Project Success' />
        <Card title={totalClients + '+'} subtitle='Clients' />
      </div>
      <div className='w-full h-52 md:h-96'>
        <VectorMap
          zoomOnScroll={false}
          map={worldMill}
          onRegionTipShow={(e, el, code) => {
            // @ts-ignore
            el.html(
              // @ts-ignore
              el.html() +
                ' (Completed Projects - ' +
                getProjectsByCountryCode(code) +
                ')',
            );
          }}
        />
      </div>
    </div>
  );
};

const Card = ({
  title,
  subtitle,
}: {
  title: string | number;
  subtitle: string;
}) => {
  return (
    <div className='flex justify-center items-center h-28 flex-col border rounded shadow-sm p-2'>
      <h3 className='font-bold text-3xl'>{title}</h3>
      <h4>{subtitle}</h4>
    </div>
  );
};

export default GlobalProjectsMap;
