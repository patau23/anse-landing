import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import AboutRibbonLines from '@/shared/assets/imgs/about-ribbon-lines.png';
import SectionHiga from '@/shared/components/ui/section-higa';
import clsx from 'clsx';

interface Props {
  onViewportEnter: () => void;
}

const Items = [
  { index: 1, label: 'Актуальные исследования' },
  { index: 2, label: 'Право и технологии' },
  { index: 3, label: 'Реальные кейсы' },
  { index: 4, label: 'Нетворкинг' },
];

const ForumAbout = forwardRef<HTMLDivElement, Props>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');

    const listItems = (text: string, index: number) => {
      return (
        <div
          className={clsx(
            // base
            'flex items-center justify-between gap-3 self-stretch px-3 py-3',
            // responsive
            'md:flex-col md:items-start md:justify-center'
          )}
        >
          <span
            className={clsx(
              // base
              'flex-[1_0_0] text-left text-[16px] leading-[21px] font-normal tracking-[-0.32px] text-white not-italic',
              // responsive
              'md:min-h-[68px] md:text-[28px] md:leading-[1.34] md:tracking-[0.36px]'
            )}
          >
            {text}
          </span>
          <span
            className={clsx(
              // base
              'text-[32px] leading-[100%] font-semibold tracking-[0.374px] text-transparent not-italic',
              // responsive
              'md:w-full md:self-stretch md:text-end md:text-[240px] md:font-bold md:tracking-[0.37px]'
            )}
            style={{ WebkitTextStroke: '2px #7268E7' }}
          >
            {index}
          </span>
        </div>
      );
    };

    return (
      <motion.section
        ref={ref}
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.005 }}
        className={clsx(
          // base
          'bg-bg-primary relative h-[calc(80vh)] w-full overflow-hidden',
          // responsive
          'md:h-[100vh]'
        )}
      >
        <div
          className={clsx(
            // base
            'absolute top-0 right-0 z-5 flex h-full w-full flex-col items-center gap-6 self-stretch px-2 py-8',
            // responsive
            'md:top-[150px]'
          )}
        >
          <SectionHiga
            badgeText="О Форуме"
            title="Место, где встречаются наука, право и технологии"
            description="Форум соберёт ведущих экспертов, практиков и исследователей, чтобы обсудить будущее судебной экспертизы в эпоху искусственного интеллекта."
          />

          <img
            src={AboutRibbonLines}
            alt=""
            className={clsx(
              // base
              'absolute bottom-[0px] left-[0px] min-h-[350.164px] min-w-[446px] rotate-[35.428deg]',
              // responsive
              ''
            )}
          />

          <div
            className={clsx(
              // base
              'z-10 flex flex-col items-start gap-3 self-stretch',
              // responsive
              'md:flex-row md:gap-4'
            )}
          >
            {Items.map((item) => (
              <motion.div
                key={item.index}
                variants={{
                  initial: { x: '-100%', backgroundColor: '#4136C3' },
                  animated: { x: 0, y: 0, backgroundColor: '#544BC8' },
                  initialMobile: { y: '-100%', backgroundColor: '#4136C3' },
                }}
                initial={window.innerWidth > 1023 ? 'initial' : 'initialMobile'}
                whileInView="animated"
                viewport={{ once: true }}
                transition={{
                  backgroundColor: { duration: 0.8, ease: 'easeIn' },
                  x: { duration: 0.8, ease: 'easeInOut' },
                }}
                className={clsx(
                  // base
                  'z-0 flex w-full flex-col justify-center gap-[1.25vw] rounded-[16px] bg-[#C7EBFF] p-[1.25vw] text-center',
                  // responsive
                  'md:h-[360px] md:rounded-[20px]',
                  'lg:w-[46vw]'
                )}
              >
                {listItems(item.label, item.index)}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }
);

export default ForumAbout;
