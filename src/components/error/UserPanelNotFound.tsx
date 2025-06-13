
import React from 'react';
import { MainLayout } from '@/components/Layout/MainLayout';
import { NotFoundPage } from './NotFoundPage';

export const UserPanelNotFound: React.FC = () => {
  return (
    <MainLayout>
      <NotFoundPage 
        title="User Page Not Found"
        message="The user panel page you're looking for doesn't exist."
        homeUrl="/app"
      />
    </MainLayout>
  );
};
