import React, { useState } from 'react';
import Button from './Button';
import logoMap from '../util/logoMap';

function IntegrationCard({ id, title, description }) {
  const [isConnected, setIsConnected] = useState(false);
  const logo = logoMap[id]; // get the correct logo based on the id

  return (
    <div className="flex flex-col justify-between p-6 border rounded-md border-gray-300 bg-[#FEF9F8]">
      <div className="flex justify-between">
        <img src={logo} alt={`Logo for ${title}`} className="h-8" />
        <Button
          isConnected={isConnected}
          onClick={() => setIsConnected(!isConnected)}
        >
          {isConnected ? 'Connected' : 'Connect'}
        </Button>
      </div>
      <div className="mt-4">
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}

export default IntegrationCard;
