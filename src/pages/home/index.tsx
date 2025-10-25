import Header from '@/shared/components/ui/header.tsx';
import { Sections } from '@/shared/constants/navigation';
import { useStore } from '@/store';
import { useEffect, useRef } from 'react';
import AnseAbouts from './components/sections/anse-abouts';
import ApplyBlock from './components/sections/apply-block';
import EnuAbout from './components/sections/enu-about';
import Footer from './components/sections/footer';
import ForumAbout from './components/sections/forum-about';
import HeroBlock from './components/sections/hero-block';
import Speakers from './components/sections/speakers';
import Training from './components/sections/training';

const DEBOUNCE_MS = 250;

const HomePage = () => {
  const setSection = useStore((state) => state.updateSection);
  const isScrolling = useStore((state) => state.isScrolling);
  const setIsScrolling = useStore((state) => state.updateScrolling);

  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const secondref = useRef<HTMLDivElement>(null);
  const thirdref = useRef<HTMLDivElement>(null);
  const fourthref = useRef<HTMLDivElement>(null);
  const fifthref = useRef<HTMLDivElement>(null);
  const sixthref = useRef<HTMLDivElement>(null);
  const seventhref = useRef<HTMLDivElement>(null);
  const eighthref = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    heroRef,
    secondref,
    thirdref,
    fourthref,
    fifthref,
    sixthref,
    seventhref,
    eighthref,
  ];

  const handleViewportEnter = (idx: number) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (!isScrolling && window.innerWidth > 768) {
        setSection(Sections[idx]);
        sectionRefs[idx]?.current?.scrollIntoView({
          block: 'start',
        });

        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 1000);
      }
    }, DEBOUNCE_MS);
  };

  const handleTabClick = (tabValue: string) => {
    const idx = Sections.findIndex((tab) => tab === tabValue);
    if (idx !== -1) {
      setSection(tabValue);
      setIsScrolling(true);

      sectionRefs[idx]?.current?.scrollIntoView({
        block: 'start',
      });

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    }
  };

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header handleTabClick={handleTabClick} />

      <HeroBlock
        ref={heroRef}
        onViewportEnter={() => handleViewportEnter(0)}
        handleTabClick={handleTabClick}
      />

      <ForumAbout
        ref={secondref}
        onViewportEnter={() => handleViewportEnter(1)}
      />

      <AnseAbouts
        ref={thirdref}
        onViewportEnter={() => handleViewportEnter(2)}
      />

      <EnuAbout
        ref={fourthref}
        onViewportEnter={() => handleViewportEnter(3)}
      />

      <Speakers ref={fifthref} onViewportEnter={() => handleViewportEnter(4)} />

      <Training ref={sixthref} onViewportEnter={() => handleViewportEnter(5)} />

      <ApplyBlock
        ref={seventhref}
        onViewportEnter={() => handleViewportEnter(6)}
      />

      <Footer onViewportEnter={() => handleViewportEnter(7)} />
    </div>
  );
};

export default HomePage;
