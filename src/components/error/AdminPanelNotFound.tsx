
import React from 'react';
import { AdminLayout } from '@/components/Layout/AdminLayout';
import { NotFoundPage } from './NotFoundPage';

export const AdminPanelNotFound: React.FC = () => {
  return (
    <AdminLayout>
      <NotFoundPage 
        title="Admin Page Not Found"
        message="The admin panel page you're looking for doesn't exist."
        homeUrl="/admin"
      />
    </AdminLayout>
  );
};
