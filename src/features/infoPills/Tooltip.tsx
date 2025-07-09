import React from 'react'

interface TooltipProps {
  text: string
}

export const Tooltip: React.FC<TooltipProps> = ({ text }) => {
  return (
    <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg z-10 border border-gray-700 max-w-xs whitespace-normal">
      {text}
      <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
    </div>
  )
}