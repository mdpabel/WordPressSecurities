'use client';
import React, { Component } from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const FaceBookMessenger = () => {
  const appId = process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!;
  const pageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID!;

  return (
    <FacebookProvider appId={appId} chatSupport>
      <CustomChat pageId={pageId} minimized={false} />
    </FacebookProvider>
  );
};

export default FaceBookMessenger;
