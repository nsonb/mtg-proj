import React from 'react';
import { CardsContextProvider } from './context/CardContext';
import Header from './components/Header';
//import Footer from './components/Footer';
//import Search from './components/Search';
import CardList from './components/CardList';
import './App.css'
//import ImageSlide from './components/ImageSlide'
const App = () => {
  
  return (
    <div className='app'>
      <CardsContextProvider>
        <Header/>
        <div style = {bodyStyle}>
          <CardList/>
        </div>
      </CardsContextProvider>
    </div>
  )
}

const bodyStyle = {
  height: 'calc(100vh - 5em)',
  position: 'absolute',
  left: '0',
  top: '5em',
  overflow: 'hidden'
}

export default App;