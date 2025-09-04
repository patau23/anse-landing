import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Grow from '@/shared/assets/icons/grow.svg?react';

interface GrowSectionProps {
  onViewportEnter: () => void;
}

const GrowItems = [1, 2, 3].map((i) => ({
  label: {
    title: `grow.cards.card${i}.label.title`,
    text: `grow.cards.card${i}.label.text`,
  },
  value: {
    title: `grow.cards.card${i}.value.title`,
    text: `grow.cards.card${i}.value.text`,
    tip: `grow.cards.card${i}.value.tip`,
  },
}));

const GrowSection = forwardRef<HTMLDivElement, GrowSectionProps>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');
    console.log('window.innerWidth', window.innerWidth);
    console.log('window.innerHeight', window.innerHeight);

    return (
      <motion.section
        ref={ref}
        className="bg-body-bg relative flex h-[85vh] flex-col items-center justify-center overflow-hidden md:h-[90vh] lg:h-[calc(100vh)]"
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.005 }}
      >
        <div className="absolute top-[10vh] mx-auto flex flex-col justify-center px-4 md:top-[20vh] md:px-0 lg:w-full">
          <p className="mb-6 flex justify-center px-9 text-center font-semibold md:mb-14 md:px-0">
            <span className="text-[17px] font-semibold md:text-3xl">
              {t('grow.title')}
            </span>
            <Grow className="h-12 w-12 md:mt-[-15px] md:h-12 md:w-12" />
          </p>
          <div className="flex flex-col items-center justify-center gap-6">
            {GrowItems.map((item) => (
              <div
                key={item.label.text}
                className="flex w-full flex-col items-center justify-center lg:w-auto lg:flex-row"
              >
                <div className="z-1 flex w-full flex-col justify-center gap-[1.25vw] rounded-[16px] bg-white p-[1.25vw] text-center lg:w-[46vw]">
                  <p className="text-base font-medium md:text-2xl">
                    {t(item.label.title)}
                  </p>
                  <p className="text-xs font-normal md:text-xl">
                    {t(item.label.text)}
                  </p>
                </div>
                <motion.svg
                  className="z-0 mx-[-25px] h-8 w-8 rotate-90 lg:h-[70px] lg:w-[70px] lg:rotate-0"
                  viewBox="0 0 70 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  whileInView={{
                    x: [-100, 30, 0],
                    zIndex: [0, 0, 1],
                  }}
                  transition={{
                    duration: 0.5,
                    times: [0, 0.5, 1],
                  }}
                  viewport={{ once: true }}
                >
                  <rect width="70" height="70" rx="35" fill="#E6F4FF" />
                  <path
                    d="M21.584 35H48.4173"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35 21.5834L48.4167 35L35 48.4167"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>

                <motion.div
                  className="z-0 flex w-full flex-col justify-center gap-[1.25vw] rounded-[16px] bg-[#C7EBFF] p-[1.25vw] text-center lg:w-[46vw]"
                  variants={{
                    initial: {
                      x: '-100%',
                      backgroundColor: '#fff',
                    },
                    animated: {
                      x: 0,
                      y: 0,
                      backgroundColor: '#C7EBFF',
                    },
                    initialMobile: {
                      y: '-100%',
                      backgroundColor: '#fff',
                    },
                  }}
                  initial={
                    window.innerWidth > 1023 ? 'initial' : 'initialMobile'
                  }
                  whileInView={'animated'}
                  viewport={{ once: true }}
                  transition={{
                    backgroundColor: { duration: 0.8, ease: 'easeIn' },
                    x: { duration: 0.8, ease: 'easeInOut' },
                  }}
                >
                  <p className="text-base font-medium md:text-[22px] xl:text-2xl">
                    {t(item.value.title)}
                    <span className="ml-2 rounded-4xl bg-[#C0FE5C] px-2 py-1 text-[11px] md:text-[22px]">
                      {t(item.value.tip)}
                    </span>
                  </p>
                  <p className="text-xs font-normal md:text-xl">
                    {t(item.value.text)}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }
);

export default GrowSection;
