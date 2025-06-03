
import React from 'react';
import { ErrorPage } from '@/components/error/ErrorPage';

const NotFound: React.FC = () => {
  return (
    <ErrorPage 
      title="Page not found"
      message="Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist."
    />
  );
};

export default NotFound;
