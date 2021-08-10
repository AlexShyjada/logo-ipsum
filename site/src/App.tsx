import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Logos from './components/Logos/Logos';
import AticleIndex from './components/Articles/ArticleSection';
import GridIsights from './components/GridIsinghts/InghtsGrid';
import Price from './components/GridPrice/PriceGrid'
import Footer from './components/Footer/Footer';
import './Global.css';

function App() {
  return (
    <main className="App">
      <Header/>
      <Hero/>
      <Logos/>
      <AticleIndex/>
      <GridIsights/>
      <Price/>
      <Footer/>
    </main>
  );
}

export default App;