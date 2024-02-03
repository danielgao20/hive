import React from 'react';
import NavBar from './NavBar';
import IntegrationCard from './IntegrationCard';
import applications from './util/data/applications.json';
import shadow from './assets/shadow.png';

function App() {
  const mainStyle = {
    backgroundImage: `url(${shadow})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  }

  function handleBackClick() {
    alert('Back button clicked!');
  }

  function handleFinishClick() {
    alert('Finish button clicked!');
  }
  
  return (
    <>
      <NavBar />
      <main style={mainStyle} className="min-h-screen flex flex-col justify-center px-4 md:px-8">
        <h1 className="mb-8 text-4xl font-medium">Connect your favorite tools.</h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {applications.map((app) => (
            <IntegrationCard key={app.id} {...app} />
          ))}
        </div>
        <div className="mt-16 space-x-4">
          <button onClick={handleBackClick} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Back
          </button>
          <button onClick={handleFinishClick} className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Finish
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
