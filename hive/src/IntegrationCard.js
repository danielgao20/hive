import React, { useState } from 'react';
import figmaLogo from './assets/figma.png';
import driveLogo from './assets/drive.png';
import slackLogo from './assets/slack.png';
import notionLogo from './assets/notion.png';
import miroLogo from './assets/miro.png';
import airtableLogo from './assets/airtable.png';
import confluenceLogo from './assets/confluence.png';
import dovetailLogo from './assets/dovetail.png';

// mapping from id to the corresponding logo
const logoMap = {
  figma: figmaLogo,
  drive: driveLogo,
  slack: slackLogo,
  notion: notionLogo,
  miro: miroLogo,
  airtable: airtableLogo,
  confluence: confluenceLogo,
  dovetail: dovetailLogo,
};

function IntegrationCard({ id, title, description }) {
  const [isConnected, setIsConnected] = useState(false);
  const logo = logoMap[id]; // Get the correct logo based on the id

  return (
    <div className="h-full w-full space-y-2 rounded-md border border-[#C8C8C8] bg-[#FEF9F8] px-6 py-5">
      <div className="flex justify-between">
        {/* Use the logo variable to display the image */}
        <img src={logo} alt={`Logo for ${title}`} className="h-8" />
        <button
          onClick={() => setIsConnected(!isConnected)}
          className={`px-6 py-2.5 text-white ${isConnected ? 'bg-green-500' : 'bg-purple-500'} rounded transition duration-300`}
        >
          {isConnected ? 'Connected' : 'Connect'}
        </button>
      </div>
      <div className="space-y-1">
        <p className="font-medium">{title}</p>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}

export default IntegrationCard;
