import React from 'react';
import ReactDOM from 'react-dom/client';
import Comp1 from './BasicContext';
import { WrapProvider } from './GlobalContext';
import CompChild from './CompChild';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Comp1 />
    <WrapProvider>
      <CompChild />
    </WrapProvider>
  </>
);
