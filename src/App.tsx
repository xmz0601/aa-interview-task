import { ChakraProvider } from '@chakra-ui/react';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home } from './pages';

function App() {
  return (
    <div className={styles.App}>
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
