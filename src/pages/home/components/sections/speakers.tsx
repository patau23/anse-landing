import DefaultImg from '@/shared/assets/imgs/default-person-image.png';
import SpeakersRibbonLines from '@/shared/assets/imgs/ribbon-lines-speakers.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/components/ui/carousel.tsx';
import SectionHiga from '@/shared/components/ui/section-higa';
import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

interface FeatureSectionProps {
  onViewportEnter: () => void;
}

const FeatureItems = [
  {
    key: 'alma',
    img: DefaultImg,
    title: 'Кенжебекова Алма',
    profession: 'Доктор юридических наук, профессор',
    topic: (
      <>
        «Автоматический анализ рукописного <br /> текста с помощью AI»
      </>
    ),
  },
  {
    key: 'notalma',
    img: DefaultImg,
    title: 'Кенжебекова Алма',
    profession: 'Доктор юридических наук, профессор',
    topic: '«Автоматический анализ рукописного текста с помощью AI»',
  },
  {
    key: 'drugaya-alma',
    img: DefaultImg,
    title: 'Кенжебекова Алма',
    profession: 'Доктор юридических наук, профессор',
    topic: '«Автоматический анализ рукописного текста с помощью AI»',
  },
];

const Speakers = forwardRef<HTMLDivElement, FeatureSectionProps>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');

    return (
      <motion.div
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.05 }}
        ref={ref}
        className="bg-bg-primary relative flex h-[calc(80vh)] w-full flex-col items-center gap-[12px] self-stretch overflow-hidden px-2 py-8 md:h-[100vh] md:justify-center"
      >
        <div className="flex flex-col items-center gap-6 self-stretch">
          <SectionHiga badgeText="Спикеры" />

          <img
            src={SpeakersRibbonLines}
            className="absolute bottom-0 left-0 min-h-[350.164px] min-w-[446px]"
          />

          <div className="flex w-full flex-col justify-center gap-4 xl:gap-2">
            <Carousel
              opts={{ loop: true }}
              className="w-full max-w-sm sm:max-w-3xl"
            >
              <CarouselContent>
                {FeatureItems.map((item, index) => (
                  <CarouselItem key={index}>
                    <div
                      key={item.title + index}
                      className="flex flex-col items-center justify-center gap-4 select-none"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="pointer-events-none h-[260px] w-[220px] rounded-2xl object-cover select-none"
                        draggable="false"
                      />

                      <div className="flex w-full flex-col items-center gap-1">
                        <h3 className="text-center text-lg text-[20px] leading-6 font-semibold tracking-tight text-white">
                          {t(item.title)}
                        </h3>
                        <p className="w-full text-center text-sm text-[13px] leading-5 font-normal text-[rgba(235,235,245,0.60)]">
                          {t(item.profession)}
                        </p>
                      </div>

                      <p className="w-full text-center text-base text-[17px] leading-6 font-normal text-white">
                        {item.topic}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </motion.div>
    );
  }
);

export default Speakers;
