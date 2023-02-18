import React from 'react';
import './App.css';
import Header from './Components/Header';
import PageContent from './Components/PageContent';

import { BrowserRouter } from 'react-router-dom';
import { ShopContextProvider } from "./context/shop-context";
function App() {
  return (
    <div className="App">
    <ShopContextProvider>
    <BrowserRouter>
    <Header/>
    <PageContent/>
    {/* <Footer1/> */}
    </BrowserRouter>
    </ShopContextProvider>
    </div>
  );
}


export default App;
