import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Pc from '@/shared/assets/icons/pc.svg?react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/components/ui/carousel.tsx';

interface FeatureSectionProps {
  onViewportEnter: () => void;
}

const FeatureItems = [1, 2, 3, 4, 5, 6].map((i) => ({
  title: `feature.panels.panel${i}.title`,
  text: `feature.panels.panel${i}.text`,
}));

const FeatureSection = forwardRef<HTMLDivElement, FeatureSectionProps>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');

    return (
      <motion.div
        className="bg-bg relative h-[70vh] w-full md:h-[100vh]"
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.05 }}
        ref={ref}
      >
        <div className="absolute top-[8vh] flex w-full flex-col items-center justify-center lg:top-[20vh] xl:top-[11vh] 2xl:top-[12vh]">
          <p className="mb-10 flex items-start justify-center gap-0 px-4 text-center lg:gap-4 lg:px-0 xl:mb-4">
            <span className="w-[75%] text-[17px] font-semibold md:w-auto md:text-[34px]">
              {t('feature.title')}
            </span>
            <Pc className="mt-[0px] h-7 w-8 md:mt-[-10px] md:h-[70px] md:w-[70px]" />
          </p>
          <div className="flex w-full flex-col justify-center gap-4 xl:gap-2">
            {window?.innerWidth >= 1024 ? (
              FeatureItems.map((item, index) => (
                <motion.div
                  key={item.text}
                  className="3xl:gap-4 3xl:p-4 flex items-center justify-start gap-2 p-2 xl:gap-2 xl:p-2"
                  variants={{
                    initial: {
                      opacity: 0,
                    },
                    animated: {
                      opacity: 1,
                    },
                  }}
                  initial={'initial'}
                  whileInView={'animated'}
                  transition={{ delay: (index + 1) / 15, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="mr-2 rounded-4xl bg-[#C0FE5C] px-2 py-3 text-center text-[22px] leading-6 font-medium whitespace-nowrap xl:px-4 xl:py-5">
                    0{index + 1} /
                  </p>
                  <p className="shrink-0 text-left text-[24px] leading-6 font-medium xl:text-2xl">
                    {t(item.title)}
                  </p>
                  <p className="grow-0 text-center text-[16px] leading-6 text-[rgba(0,0,0,0.45)] xl:text-xl">
                    {t(item.text)}
                  </p>
                  <button
                    className="bg-primary ml-auto shrink-0 cursor-not-allowed rounded-4xl px-3 py-2 text-white xl:px-6 xl:py-4"
                    title="В данный момент недоступно"
                  >
                    {t('feature.video')}
                  </button>
                </motion.div>
              ))
            ) : (
              <Carousel
                className="w-full max-w-sm sm:max-w-3xl"
                opts={{ loop: true }}
              >
                <CarouselContent>
                  {FeatureItems.map((item, index) => (
                    <CarouselItem key={index}>
                      <div
                        key={item.text}
                        className="flex flex-col items-center justify-center gap-4 rounded-[12px] bg-white px-2 py-6"
                      >
                        <p className="mr-2 rounded-4xl bg-[#C0FE5C] px-2 py-3 text-center text-[17px] leading-6 font-medium">
                          0{index + 1} /
                        </p>
                        <p className="text-center text-[16px] leading-6 font-medium">
                          {t(item.title)}
                        </p>
                        <p className="text-center text-xs leading-6 text-[rgba(0,0,0,0.45)]">
                          {t(item.text)}
                        </p>
                        <button
                          className="bg-primary cursor-not-allowed rounded-4xl px-4 py-3 text-base text-white"
                          title="В данный момент недоступно"
                        >
                          {t('feature.video')}
                        </button>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            )}
          </div>
        </div>
      </motion.div>
    );
  }
);

export default FeatureSection;
