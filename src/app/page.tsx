import React from 'react';
import Home from './components/Home'; // Ensure path is correct
import Quote from './components/UpcomingEvents/Quote'; // Ensure path is correct
import World from './components/World/world';
import Tour from './components/Tour/Tour';

const Page = () => {
  return (
    <div>
      <Home />
      <Quote />
      <World />
      <Tour />
    </div>
  );
}

export default Page;
