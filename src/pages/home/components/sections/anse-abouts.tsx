import { motion } from 'framer-motion';
import { forwardRef, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import AiAboutIconLg from '@/shared/assets/imgs/ai-about-icon-lg.png';
import AiAboutIcon from '@/shared/assets/imgs/ai-about-icon.png';
import AiAboutRibbonIconLg from '@/shared/assets/imgs/ai-about-ribbon-icon-lg.png';
import SectionHiga from '@/shared/components/ui/section-higa';
import SocialTag from '@/shared/components/ui/social-tag';
import clsx from 'clsx';

interface Props {
  onViewportEnter: () => void;
}

// =======================
// i18n-like texts
// =======================
const TEXT = {
  section: {
    badge: 'Об АНСЭ',
    titlePart1: 'Альянс Независимой',
    titlePart2: 'Судебной Экспертизы',
    description:
      'Более 10 лет опыта, 5000+ проведённых экспертиз, работа по всей территории Казахстана. Мы внедряем AI в экспертную практику, чтобы обеспечить максимальную точность и скорость исследований.',
  },
  items: [
    { index: 1, label: 'Признаны судами и следственными органами' },
    { index: 2, label: 'Многолетний опыт работы' },
    { index: 3, label: 'Работаем по всей стране' },
  ] as { index: number; label: string }[],
} as const;

const Items = TEXT.items;

const AnseAbouts = forwardRef<HTMLDivElement, Props>(
  ({ onViewportEnter }, ref) => {
    const isDesktop = window.innerWidth >= 768;

    const listItems = (text: string | ReactNode) => {
      return (
        <div
          className={clsx(
            'flex flex-col items-start justify-center gap-6 self-stretch rounded-xl bg-[#C85E4B]',
            ''
          )}
        >
          <p
            className={clsx(
              'self-stretch text-center text-[16px] leading-[21px] font-normal tracking-[-0.32px] text-white',
              'md:text-[1.5rem] md:leading-[1.34] md:tracking-[0.36px]'
            )}
          >
            {text}
          </p>
        </div>
      );
    };

    return (
      <motion.section
        ref={ref}
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.005 }}
        className={clsx(
          'bg-bg-primary relative h-[calc(80vh)] w-full overflow-hidden',
          'md:h-[100vh] md:min-h-[800px]'
        )}
      >
        <div
          className={clsx(
            'z-5 flex h-full w-full flex-col items-center gap-6 self-stretch px-2 py-8',
            'md:mt-[100px]'
          )}
        >
          <SectionHiga
            badgeText={TEXT.section.badge}
            title={
              <span className="md:text-[74px]">
                {TEXT.section.titlePart1} <br /> {TEXT.section.titlePart2}
              </span>
            }
            description={TEXT.section.description}
          />

          <img
            src={isDesktop ? AiAboutIconLg : AiAboutIcon}
            alt=""
            className={clsx(
              'absolute right-[-30px] bottom-0 aspect-[245/244] h-[244px] w-[245px]',
              'md:right-auto md:bottom-[-30px] md:h-[501px] md:w-[503px]'
            )}
          />

          <img
            src={AiAboutRibbonIconLg}
            alt=""
            className={clsx(
              'absolute right-[-30px] bottom-0 hidden aspect-[245/244] h-[244px] w-[245px]',
              'md:top-[-250px] md:right-auto md:bottom-auto md:left-[-9.98px] md:block md:aspect-auto md:h-auto md:w-auto md:rotate-0'
            )}
          />

          <div
            className={clsx(
              'z-10 flex flex-col items-start gap-3 self-stretch',
              'md:items-center md:gap-[25px]'
            )}
          >
            {Items.map((item, index) => (
              <motion.div
                key={item.index}
                variants={{
                  initial: { x: '-100%', backgroundColor: '#4136C3' },
                  animated: {
                    x: !isDesktop
                      ? 0
                      : index === 0
                        ? '-50%'
                        : index === 2
                          ? 0
                          : '50%',
                    y: 0,
                    backgroundColor: '#C85E4B',
                  },
                  initialMobile: { y: '-100%', backgroundColor: '#4136C3' },
                }}
                initial={window.innerWidth > 1023 ? 'initial' : 'initialMobile'}
                whileInView={'animated'}
                viewport={{ once: true }}
                transition={{
                  backgroundColor: { duration: 0.8, ease: 'easeIn' },
                  x: { duration: 0.8, ease: 'easeInOut' },
                }}
                className={clsx(
                  'z-0 flex w-full flex-col justify-center gap-[1.25vw] rounded-[16px] bg-[#C7EBFF] p-[1.25vw] text-center',
                  'lg:w-[46vw]'
                )}
              >
                {listItems(item.label)}
              </motion.div>
            ))}
          </div>

          <div
            className={clsx(
              'absolute bottom-10 left-[46px] z-30 flex flex-col items-start justify-center gap-3',
              'md:bottom-[46px]'
            )}
          >
            <SocialTag type="inst" />
            <SocialTag type="wp" />
          </div>
        </div>
      </motion.section>
    );
  }
);

export default AnseAbouts;
