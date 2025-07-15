import React, { useState } from 'react';

import { Tooltip } from './Tooltip';

interface InfoIconProps {
  tooltip: string;
}

export const InfoIcon: React.FC<InfoIconProps> = ({ tooltip }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className='relative'>
      <img
        src='/assets/icons/info_icon.png'
        alt='Info'
        className='w-7 h-3.5 cursor-pointer opacity-60 hover:opacity-100 transition-opacity'
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && <Tooltip text={tooltip} />}
    </div>
  );
};
