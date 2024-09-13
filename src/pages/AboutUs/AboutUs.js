import React from 'react';

import { homeObjOne, homeObjThree } from './Data';
import {InfoSection} from '../../components';

function AboutUs() {
  return (
    <>
  
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export default AboutUs;