import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import Modal from './components/Modal';
import { projects, skills, experience, genres } from './data';


// 3D Bg
import Background3D from './components/Background3D';

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const selectGenreRef = useRef(null);
  const topTrendingRef = useRef(null);
  const projectsRef = useRef(null);

  const handleProjectsClick = () => {
    const element = document.getElementById('latest-releases');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    if (projectsRef.current) {
      setTimeout(() => {
        projectsRef.current.scrollToIndex(0); // Jurassic Park is at index 0
      }, 500);
    }
  };
  //submitted changes to port
  const handleSkillsClick = () => {
    // 1. Scroll page to section
    document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });

    // 2. Scroll the row to the 1st item (index 0) - Rank 1
    if (topTrendingRef.current) {
      setTimeout(() => {
        topTrendingRef.current.scrollToIndex(0);
      }, 500);
    }
  };

  const handleLeadershipClick = () => {
    // 1. Scroll page to section
    document.getElementById('select-genre')?.scrollIntoView({ behavior: 'smooth' });

    // 2. Scroll the row to the 4th item (index 3) - Leadership
    if (selectGenreRef.current) {
      setTimeout(() => {
        selectGenreRef.current.scrollToIndex(4); // Updated index for Leadership
      }, 500); // Small delay to allow page scroll to start/settle
    }
  };//row section completed

  const handleContactClick = () => {
    // 1. Scroll page to section
    document.getElementById('select-genre')?.scrollIntoView({ behavior: 'smooth' });

    // 2. Scroll the row to the 3rd item (index 2) - Contact Me
    if (selectGenreRef.current) {
      setTimeout(() => {
        selectGenreRef.current.scrollToIndex(2);
      }, 500);
    }
  };

  const handleExperienceClick = () => {
    document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' });
  };


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
      <Navbar
        onLeadershipClick={handleLeadershipClick}
        onSkillsClick={handleSkillsClick}
        onProjectsClick={handleProjectsClick}
        onExperienceClick={handleExperienceClick}
        onSearchSelect={handleSelect}
      />

      <Hero onContactClick={handleContactClick} />

      <div className="relative z-20 -mt-2 md:-mt-4 pl-4 md:pl-8 xl:pl-12 pb-12 space-y-2">
        {/* Projects Row */}
        <div id="latest-releases" className="scroll-mt-28">
          <Row
            ref={projectsRef}
            title="Latest Releases"
            items={projects}
            onSelect={handleSelect}
            itemClassName="!w-[260px] !md:w-[340px] !h-[170px]"
          />
        </div>

        {/* Top Trending Skills Row */}
        {/* Top Trending Skills Row */}
        <div id="skills-section">
          <Row
            ref={topTrendingRef}
            title="Top Trending"
            items={skills}
            isLargeRow={true}
            onSelect={handleSelect}
            className="!-mt-4 md:!-mt-10 lg:!-mt-12 xl:!-mt-16 relative z-30"
          />
        </div>

        {/* Top Picks for You (Experience) */}
        <div id="experience-section">
          <Row
            title={<>Top Picks<br />For You</>}
            items={experience}
            onSelect={handleSelect}
            className="!-mt-2 md:!-mt-8 lg:!-mt-10 xl:!-mt-12 relative z-20 [&_.scrollbar-hide]:pt-20 md:[&_.scrollbar-hide]:pt-32"
            itemClassName="!w-[260px] !md:w-[340px] !h-[170px] -translate-y-8 md:-translate-y-16 hover:!-translate-y-10 md:hover:!-translate-y-20"
          />
        </div>

        {/* Select Genre (Background) */}
        <div id="select-genre">
          <Row
            title="Select Genre"
            ref={selectGenreRef}
            items={genres}
            onSelect={handleSelect}
            className="!-mt-2 md:!-mt-8 lg:!-mt-12 xl:!-mt-16 relative z-10"
            itemClassName="!w-[260px] !md:w-[340px] !h-[170px]"
          />
        </div>
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
        <p> All copyrights reserved by Sarisha Kadakia © 2026</p>
      </footer>
    </div>
  );
}

export default App;
