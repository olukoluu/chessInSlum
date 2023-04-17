import React from 'react';
import Approach from './approach/Approach';
import News from './news/News';
import Potential from './potential/Potential';
import Workstream from './workstream/Workstream';

const Main = () => {
  return (
    <main>
        <Approach />
        <News />
        <Workstream />
        <Potential />
    </main>
  )
}

export default Main