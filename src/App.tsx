
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatYouGet from './components/WhatYouGet';
import Program from './components/Program';
import Guarantee from './components/Guarantee';
import Team from './components/Team';
import EnrollForm from './components/EnrollForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed">
      <Header />
      <main>
        <Hero />
        <About />
        <WhatYouGet />
        <Program />
        <Guarantee />
        <Team />
        <EnrollForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
