import { Sections } from '@/shared/constants/navigation';
import { useStore } from '@/store';
import Header from '@/shared/components/ui/header.tsx';
import { useRef } from 'react';
import HeroSection from '@/pages/home/_sections/HeroSection';
import GrowSection from '@/pages/home/_sections/GrowSection';
import FeatureSection from '@/pages/home/_sections/FeatureSection';
import ClinicsSection from '@/pages/home/_sections/ClinicsSection';
import ServiceSection from '@/pages/home/_sections/ServiceSection';
import TariffSection from '@/pages/home/_sections/TariffSection';
import FaqSection from '@/pages/home/_sections/FaqSection';
import FormSection from '@/pages/home/_sections/FormSection';

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
      <HeroSection
        ref={heroRef}
        onViewportEnter={() => handleViewportEnter(0)}
        handleTabClick={handleTabClick}
      />
      <GrowSection
        ref={growRef}
        onViewportEnter={() => handleViewportEnter(1)}
      />
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
