// Popover.tsx
import React from 'react';

interface PopoverProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ content, children }) => {
  return (
    <div className="relative group">
      <div className="group-hover:block absolute hidden bg-gray-800 p-2 rounded text-sm text-white">
        {content}
      </div>
      {children}
    </div>
  );
};

export default Popover;
