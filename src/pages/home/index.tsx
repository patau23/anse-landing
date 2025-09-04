import ClinicsSection from '@/pages/home/_sections/ClinicsSection';
import FaqSection from '@/pages/home/_sections/FaqSection';
import FeatureSection from '@/pages/home/_sections/FeatureSection';
import FormSection from '@/pages/home/_sections/FormSection';
import ServiceSection from '@/pages/home/_sections/ServiceSection';
import TariffSection from '@/pages/home/_sections/TariffSection';
import Header from '@/shared/components/ui/header.tsx';
import { Sections } from '@/shared/constants/navigation';
import { useStore } from '@/store';
import { useRef } from 'react';
import AnseAbouts from './components/sections/anse-abouts';
import ForumAbout from './components/sections/forum-about';
import HeroBlock from './components/sections/hero-block';
import EnuAbout from './components/sections/enu-about';
import Speakers from './components/sections/speakers';

const HomePage = () => {
  const setSection = useStore((state) => state.updateSection);
  const isScrolling = useStore((state) => state.isScrolling);
  const setIsScrolling = useStore((state) => state.updateScrolling);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Section refs
  const heroRef = useRef<HTMLDivElement>(null);
  const growRef = useRef<HTMLDivElement>(null);
  const featureRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const clinicsRef = useRef<HTMLDivElement>(null);
  const tariffRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    heroRef,
    growRef,
    featureRef,
    serviceRef,
    clinicsRef,
    tariffRef,
    faqRef,
    formRef,
  ];

  const handleViewportEnter = (idx: number) => {
    if (!isScrolling && window.innerWidth > 768) {
      setSection(Sections[idx]);
      sectionRefs[idx]?.current?.scrollIntoView({
        block: 'start',
      });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  const handleTabClick = (tabValue: string) => {
    const idx = Sections.findIndex((tab) => tab === tabValue);
    if (idx !== -1) {
      setSection(tabValue);
      setIsScrolling(true);

      sectionRefs[idx]?.current?.scrollIntoView({
        block: 'start',
      });

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    }
  };

  return (
    <div>
      {/*<button onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}>Hello world</button>*/}
      <Header handleTabClick={handleTabClick} />
      <HeroBlock
        ref={heroRef}
        onViewportEnter={() => handleViewportEnter(0)}
        handleTabClick={handleTabClick}
      />

      <ForumAbout
        ref={growRef}
        onViewportEnter={() => handleViewportEnter(1)}
      />

      <AnseAbouts
        ref={growRef}
        onViewportEnter={() => handleViewportEnter(2)}
      />

      <EnuAbout ref={growRef} onViewportEnter={() => handleViewportEnter(3)} />

      <Speakers onViewportEnter={() => handleViewportEnter(4)} />

      <FeatureSection
        ref={featureRef}
        onViewportEnter={() => handleViewportEnter(2)}
      />

      <ServiceSection
        ref={serviceRef}
        onViewportEnter={() => handleViewportEnter(3)}
      />
      <ClinicsSection
        ref={clinicsRef}
        onViewportEnter={() => handleViewportEnter(4)}
      />
      <TariffSection
        ref={tariffRef}
        onViewportEnter={() => handleViewportEnter(5)}
      />
      <FaqSection ref={faqRef} onViewportEnter={() => handleViewportEnter(6)} />
      <FormSection
        ref={formRef}
        onViewportEnter={() => handleViewportEnter(7)}
      />
    </div>
  );
};

export default HomePage;
