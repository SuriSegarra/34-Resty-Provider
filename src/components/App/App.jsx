import React from 'react';
import { RestyProvider } from '../../Hooks/RestyProvider';
import Resty from '../Resty/Resty';

export default function App() {
  return (
  <RestyProvider>
    <Resty/>
  </RestyProvider>
  );
}
  