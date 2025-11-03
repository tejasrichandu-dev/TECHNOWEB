import React from 'react';

const App = () => {
  return (
    <div className="bg-[#232325] min-h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-4xl text-center text-[#0D84FB] mb-6 font-poppins">
          Development Phases
        </h1>
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/9QSM8H86/Frame-132.png"
            alt="Development Phases"
            className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default App;