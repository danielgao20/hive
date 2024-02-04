import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/NavBar';
import IntegrationCard from './components/IntegrationCard';
import tools from './util/data/tools.json';
import shadowImage from './assets/shadow.png';

function App() {
  const [connectedApps, setConnectedApps] = useState([]);

  const handleAppConnectionChange = (id, isConnected) => {
    setConnectedApps((prevConnectedApps) => {
      if (isConnected) {
        return [...prevConnectedApps, id];
      } else {
        return prevConnectedApps.filter(appId => appId !== id);
      }
    });
  };

  const handleBackClick = () => toast.info('Back button clicked!', { position: "bottom-right" });

  const handleFinishClick = () => {
    const connectedAppNames = connectedApps.map(appId => tools.find(tool => tool.id === appId)?.title).filter(Boolean);
    const message = connectedAppNames.length > 0 ? `Connected apps: ${connectedAppNames.join(', ')}` : 'No apps connected.';
    toast.success(message, { position: "bottom-right" });
  };

  return (
    <>
      <NavBar />
      <ToastContainer />
      <main className="min-h-screen flex flex-col justify-center p-4 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${shadowImage})` }}>
        <h1 className="w-full max-w-[585px] mt-[30px] mb-[30px] ml-[20px] font-sans text-[40px] font-normal leading-[77px] text-left">
          Connect your favorite tools.
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ml-[20px]">
          {tools.map((tool) => (
            <IntegrationCard key={tool.id} {...tool} onConnectionChange={(isConnected) => handleAppConnectionChange(tool.id, isConnected)} />
          ))}
        </div>
        <div className="mt-10 flex justify-start ml-[20px]">
          <button onClick={handleBackClick} className="bg-white text-black text-base font-medium py-3 px-5 rounded font-PlusJakartaSans text-lg leading-6 border border-gray">
            Back
          </button>
          <button onClick={handleFinishClick} className="bg-black text-white text-base font-medium py-3 px-7 ml-4 rounded font-PlusJakartaSans text-lg leading-6">
            Finish
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
