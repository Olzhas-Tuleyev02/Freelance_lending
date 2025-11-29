
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VideoSection from './components/VideoSection';
import ForWhom from './components/ForWhom';
import WhatYouGet from './components/WhatYouGet';
import Program from './components/Program';
import StudentWorks from './components/StudentWorks';
import WhatsAppReviews from './components/WhatsAppReviews';
import Guarantee from './components/Guarantee';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Bonuses from './components/Bonuses';
import PackageSummary from './components/PackageSummary';
import FAQ from './components/FAQ';
import EnrollForm from './components/EnrollForm';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-gray-200 font-sans leading-relaxed pb-16 md:pb-0">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <ForWhom />
        <WhatYouGet />
        <Program />
        <StudentWorks />
        <WhatsAppReviews />
        <Guarantee />
        <Testimonials />
        <Team />
        <Bonuses />
        <PackageSummary />
        <FAQ />
        <EnrollForm />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default App;
