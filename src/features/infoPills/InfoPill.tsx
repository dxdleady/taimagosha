import React from 'react';

interface InfoPillProps {
  label: string;
}

export const InfoPill: React.FC<InfoPillProps> = ({ label }) => {
  return (
    <div className='px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium'>
      {label}
    </div>
  );
};
