import { InfiniteMovingCards } from '@/shared/components/ui/infinite-moving-cards.tsx';
import { motion } from 'framer-motion';
import { forwardRef, useState } from 'react';

import ArrowUp from '@/shared/assets/icons/arrowUp.svg?react';
import Clinic1 from '@/shared/assets/imgs/clinic1.png';
import Clinic2 from '@/shared/assets/imgs/clinic2.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/components/ui/carousel.tsx';
import { useTranslation } from 'react-i18next';

interface ClinicsSectionProps {
  onViewportEnter: () => void;
}

interface Clinic {
  city: string;
  boost: string;
  before: string;
  after: string;
  icon: string;
}

const clinics: Clinic[] = [
  {
    city: 'Алматы',
    boost: '+17% выручки',
    before:
      'Несовпадения сумм в кассе, уходило много времени на внесение данных в разные системы',
    after: 'Онлайн-запись, единое расписание, одонтограмма в один клик',
    icon: Clinic1,
  },
  {
    city: 'Алматы',
    boost: '–30% неявок',
    before:
      'Часто путались в расписании, врачи тратили время на бумажные карты',
    after: 'Онлайн-запись, единое расписание, одонтограмма в один клик',
    icon: Clinic2,
  },
];

const ClinicsSection = forwardRef<HTMLDivElement, ClinicsSectionProps>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');
    const [selectedClinic, setSelectedClinic] = useState<Clinic>(clinics[0]);

    return (
      <motion.div
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.05 }}
        ref={ref}
        className="bg-tab-bg h-[70vh] w-full md:h-[100vh]"
      >
        <div className="relative top-[9.5vh] flex flex-col items-center justify-center lg:top-[15vh] xl:top-[12vh]">
          <p className="mb-6 flex gap-4 md:mb-0">
            <span className="text-[17px] font-semibold md:text-[30px] lg:text-[34px]">
              {t('clinics.title')}
            </span>
            <ArrowUp className="mt-[0px] h-7 w-7 md:mt-[-10px] md:h-17 md:w-17" />
          </p>
          {window?.innerWidth > 1023 ? (
            <InfiniteMovingCards items={clinics} speed={'fast'} />
          ) : (
            <div className="flex w-[91.8vw] flex-col items-start justify-center gap-2">
              <Carousel
                opts={{ loop: true }}
                className="w-full max-w-sm sm:max-w-xl"
              >
                <CarouselContent className="ml-0 gap-1">
                  {clinics.map((item, index) => (
                    <CarouselItem
                      key={index}
                      onClick={() => setSelectedClinic(item)}
                      className={`basis-[25%] rounded-[12px] bg-white px-3 py-2 md:basis-[12.5%] ${
                        item.before === selectedClinic.before
                          ? 'border-primary border-1'
                          : ''
                      } `}
                    >
                      <img
                        src={item.icon}
                        alt={`${item.icon}`}
                        className="w-full"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
              <div className="flex w-full flex-col gap-3 rounded-[12px] bg-white p-3">
                <p>
                  <span className="bg-tab-bg rounded-4xl px-3 py-2 text-[13px]">
                    {selectedClinic.city}
                  </span>
                  <span className="text-success bg-tab-bg ml-1 rounded-4xl px-3 py-2 text-[13px]">
                    {selectedClinic.boost}
                  </span>
                </p>
                <hr className="text-tab-bg bg-tab-bg h-[1px]" />
                <p className="flex flex-col gap-1">
                  <span className="text-gray text-xs">
                    {t('clinics.card.before')}
                  </span>
                  <span className="text-base font-medium">
                    {selectedClinic.before}
                  </span>
                </p>
                <p className="flex flex-col gap-1">
                  <span className="text-gray text-xs">
                    {t('clinics.card.after')}
                  </span>
                  <span className="text-base font-medium">
                    {selectedClinic.after}
                  </span>
                </p>
                <hr className="text-tab-bg bg-tab-bg h-[1px]" />
                <img
                  src={selectedClinic.icon}
                  alt=""
                  className="mx-auto w-[32.82vw]"
                />
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  }
);
export default ClinicsSection;
