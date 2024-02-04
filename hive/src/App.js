import React from 'react';
import NavBar from './components/NavBar';
import IntegrationCard from './components/IntegrationCard';
import tools from './util/data/tools.json';
import shadowImage from './assets/shadow.png';

function App() {
  function handleBackClick() {
    alert('Back button clicked!');
  }
  function handleFinishClick() {
    alert('Finish button clicked!');
  }
  
  return (
    <>
      <NavBar />
      <main className="min-h-screen flex flex-col justify-center p-4 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${shadowImage})` }}>
        <h1 className="w-[585px] h-[77px] mt-[30px] mb-[30px] ml-[20px] font-sans text-[40px] font-normal leading-[77px] text-left">
          Connect your favorite tools.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ml-[20px]">
          {tools.map((tool) => (
            <IntegrationCard key={tool.id} {...tool} />
          ))}
        </div>
        <div className="ml-5 mb-10 absolute bottom-0 left-0">
          <button onClick={handleBackClick} className="bg-white text-black !text-base font-medium py-3 px-5 rounded text-right font-PlusJakartaSans text-lg leading-6 ml-[20px] border border-gray">
            Back
          </button>
          <button onClick={handleFinishClick} className="bg-black text-white !text-base font-medium py-3 px-7 ml-4 rounded text-right font-PlusJakartaSans text-lg leading-6">
            Finish
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
