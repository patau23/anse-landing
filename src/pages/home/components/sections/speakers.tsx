import DefaultImg from '@/shared/assets/imgs/default-person-image.png';
import SpeakersRibbonLinesLg from '@/shared/assets/imgs/ribbon-lines-speakers-lg.png';
import SpeakersRibbonLines from '@/shared/assets/imgs/ribbon-lines-speakers.png';
import SecondSpeakersRibbonLinesLg from '@/shared/assets/imgs/second-ribbon-lines-speakers-lg.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/components/ui/carousel.tsx';
import SectionHiga from '@/shared/components/ui/section-higa';
import clsx from 'clsx';
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
  {
    key: 'drugaya-alma',
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
  {
    key: 'drugaya-alma',
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
  {
    key: 'drugaya-alma',
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
    const isDesktop = window.innerWidth >= 768;

    return (
      <motion.div
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.05 }}
        ref={ref}
        className={clsx(
          'bg-bg-primary relative flex h-[calc(80vh)] w-full flex-col items-center gap-[12px] self-stretch overflow-hidden px-2 py-8',
          'md:h-[100vh] md:justify-center'
        )}
      >
        <div
          className={clsx('flex flex-col items-center gap-6 self-stretch', '')}
        >
          <SectionHiga badgeText="Спикеры" />

          {isDesktop && (
            <img
              src={SecondSpeakersRibbonLinesLg}
              alt=""
              className={clsx('absolute top-0 left-0', '')}
            />
          )}
          <img
            src={isDesktop ? SpeakersRibbonLinesLg : SpeakersRibbonLines}
            alt=""
            className={clsx(
              'absolute bottom-0 left-0 min-h-[350.164px] min-w-[446px]',
              'md:min-h-auto md:min-w-auto'
            )}
          />

          <div
            className={clsx(
              'flex w-full flex-col justify-center gap-4 xl:gap-2',
              ''
            )}
          >
            <Carousel
              opts={{ loop: true }}
              className={clsx(
                'w-full max-w-sm sm:max-w-3xl',

                'md:max-w-none'
              )}
            >
              <CarouselContent className={clsx('', '')}>
                {FeatureItems.map((item, index) => (
                  <CarouselItem key={index} className={clsx('', '')}>
                    <div
                      key={item.title + index}
                      className={clsx(
                        'flex flex-col items-center justify-center gap-4 select-none',
                        'md:gap-[52px] md:px-[42px] md:[border-right:1px_solid_#D9D9D9]'
                      )}
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        draggable="false"
                        className={clsx(
                          'pointer-events-none h-[260px] w-[220px] rounded-2xl object-cover select-none',
                          ''
                        )}
                      />

                      <div
                        className={clsx(
                          'flex w-full flex-col items-center gap-1',
                          'md:gap-[14px]'
                        )}
                      >
                        <div
                          className={clsx(
                            'flex w-full flex-col items-center gap-[12px]'
                          )}
                        >
                          <h3
                            className={clsx(
                              'text-center text-lg text-[20px] leading-6 font-semibold tracking-tight text-white',
                              'md:text-[1.5rem] md:leading-[1.41] md:font-bold md:tracking-[0.37px]'
                            )}
                          >
                            {t(item.title)}
                          </h3>
                          <p
                            className={clsx(
                              'w-full text-center text-sm text-[13px] leading-5 font-normal text-[rgba(235,235,245,0.60)]',
                              'md:text-[18px] md:leading-[1.28] md:tracking-[0.35px]'
                            )}
                          >
                            {t(item.profession)}
                          </p>
                        </div>

                        <p
                          className={clsx(
                            'w-full text-center text-base text-[17px] leading-6 font-normal text-white',
                            'md:text-[18px] md:leading-[1.34] md:tracking-[0.46px]'
                          )}
                        >
                          {item.topic}
                        </p>
                      </div>
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
