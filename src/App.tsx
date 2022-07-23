import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <ChakraProvider>hello world!</ChakraProvider>
    </div>
  );
}

export default App;
