'use client';

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from '../ui/icons';

export const FaceBook = ({ url }: { url: string }) => {
  return (
    <FacebookShareButton url={url}>
      <div
        style={{
          backgroundColor: '#4460A0',
          color: '#fff',
        }}
        className='flex items-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0'>
        <span>
          <FacebookIcon />
        </span>
        <span className='md:block'>Share</span>
      </div>
    </FacebookShareButton>
  );
};

export const Twitter = ({ url }: { url: string }) => {
  return (
    <TwitterShareButton url={url}>
      <div
        style={{
          backgroundColor: '#2795E9',
          color: '#fff',
        }}
        className='flex items-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0'>
        <span>
          <TwitterIcon />
        </span>
        <span className='md:block'>Tweet</span>
      </div>
    </TwitterShareButton>
  );
};

export const Linkedin = ({ url }: { url: string }) => {
  return (
    <LinkedinShareButton url={url}>
      <div
        style={{
          backgroundColor: '#007EBB',
          color: '#fff',
        }}
        className='flex items-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0'>
        <span>
          <LinkedinIcon />
        </span>
        <span className='md:block'>Share</span>
      </div>
    </LinkedinShareButton>
  );
};

export const Email = ({ url }: { url: string }) => {
  return (
    <EmailShareButton url={url}>
      <div
        style={{
          backgroundColor: '#CD2900',
          color: '#fff',
        }}
        className='flex items-center px-5 py-1 mr-4 space-x-3 rounded cursor-pointer md:mr-0'>
        <span>
          <EmailIcon />
        </span>
        <span className='md:block'>Email</span>
      </div>
    </EmailShareButton>
  );
};
