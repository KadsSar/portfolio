import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import Modal from './components/Modal';
import { projects, skills, experience, genres } from './data';


// 3D Background
import Background3D from './components/Background3D';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 3D Background Layer */}
      <Background3D />
      <Navbar />

      <Hero />

      <div className="relative z-20 -mt-2 md:-mt-4 pl-4 md:pl-12 xl:pl-16 pb-12 space-y-2">
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
          className="!-mt-4 md:!-mt-10 lg:!-mt-12 xl:!-mt-16 relative z-30"
        />

        {/* Top Picks for You (Experience) */}
        <Row
          title={<>Top Picks<br />For You</>}
          items={experience}
          onSelect={handleSelect}
          className="!-mt-2 md:!-mt-8 lg:!-mt-10 xl:!-mt-12 relative z-20 [&_.scrollbar-hide]:pt-20 md:[&_.scrollbar-hide]:pt-32"
          itemClassName="-translate-y-8 md:-translate-y-16 hover:!-translate-y-10 md:hover:!-translate-y-20"
        />

        {/* Select Genre (Background) */}
        <Row
          title="Select Genre"
          items={genres}
          onSelect={handleSelect}
          className="!-mt-6 md:!-mt-14 lg:!-mt-18 xl:!-mt-24 relative z-10"
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
