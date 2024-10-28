"use client"; // Ensure this is a client component

import React from 'react';
import FirstSect from '../app/component/Sections/FirstSect'; // Corrected import path
import SecondSect from '../app/component/Sections/SecondSect'; // Corrected import path
import Third from '../app/component/Sections/Third';

const Page = () => {
  return (
    <div>
      <FirstSect />
      <SecondSect />
      <Third/>
    </div>
  );
};

export default Page;