'use client';

import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), {
  ssr: false,
});

export default function DocsPage() {
  return (
    <div className="h-screen bg-white">
      <div className="swagger-ui-wrapper">
        <SwaggerUI url="/api/docs" />
      </div>
    </div>
  );
}
