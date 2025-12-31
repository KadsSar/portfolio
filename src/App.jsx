import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import Modal from './components/Modal';
import { projects, skills, experience, genres } from './data';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="relative min-h-screen bg-[#141414] overflow-x-hidden">
      <Navbar />

      <Hero />

      <div className="relative z-20 -mt-10 md:-mt-16 pl-4 md:pl-12 pb-12 space-y-8">
        {/* Projects Row */}
        <Row
          title="Latest Releases"
          items={projects}
          onSelect={handleSelect}
        />

        {/* Top Trending Skills Row */}
        <Row
          title="Top Trending"
          items={skills}
          isLargeRow={true}
          onSelect={handleSelect}
        />

        {/* Top Picks for You (Experience) */}
        <Row
          title="Top Picks for You"
          items={experience}
          onSelect={handleSelect}
        />

        {/* Select Genre (Background) */}
        <Row
          title="Select Genre"
          items={genres}
          onSelect={handleSelect}
        />
      </div>

      {/* Modal Overlay */}
      {selectedItem && (
        <Modal
          item={selectedItem}
          onClose={handleClose}
        />
      )}

      {/* Footer / Copyright */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>© 2024 Netflix Portfolio Clone. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
