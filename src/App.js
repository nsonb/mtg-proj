import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import ImageSlide from './components/ImageSlide'
const App = () => {
  return (
    <div>
      <Header/>
      <Footer/>
      <ImageSlide/>
      <div style = {bodyStyle}>
        body
      </div>
    </div>
  )
}

const bodyStyle = {
  width: '100vw',
  height: 'calc(100vh - 6em)',
  position: 'absolute',
  left: '0',
  top: '3em'
}

export default App;