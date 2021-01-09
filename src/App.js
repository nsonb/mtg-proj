import React from 'react';
import Header from './components/Header';
//import Footer from './components/Footer';
//import Search from './components/Search';
import CardList from './components/CardList';
import './App.css'
//import ImageSlide from './components/ImageSlide'
const App = () => {
  
  return (
    <div>
      <Header/>
      <div style = {bodyStyle}>
        <CardList/>
      </div>
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