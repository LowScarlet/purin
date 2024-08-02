// App.tsx
import React from 'react';
import Popover from './Popover';

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Popover content="This is a pop-up message">
        <button className="bg-blue-500 px-4 py-2 rounded text-white">
          Hover over me
        </button>
      </Popover>
    </div>
  );
};

export default App;