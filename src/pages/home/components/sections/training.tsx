import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import TraingingImgLg from '@/shared/assets/imgs/ai-training-icon-lg.png';
import TraingingImg from '@/shared/assets/imgs/ai-training-icon.png';
import SectionHiga from '@/shared/components/ui/section-higa';
import clsx from 'clsx';

interface Props {
  onViewportEnter: () => void;
}

const Items = [
  {
    index: 1,
    label:
      'Автоматизированный комплекс для начинающих и практикующих судебных экспертов с использованием технологий искусственного интеллекта',
  },
  // {
  //   index: 2,
  //   label: 'Консультационные зоны “Ask the Expert”',
  // },
  {
    index: 3,
    label:
      'Выставочные зоны (научные и испытательные лаборатории, поставщикисовременного специализированного оборудования, а также новые технологические решения с использованиемискусственного интеллекта, открытые для сотрудничества и обменаопытом).',
  },
];

const Training = forwardRef<HTMLDivElement, Props>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');
    const isDesktop = window.innerWidth >= 768;

    const listItems = (text: string, index: number) => {
      return (
        <div
          key={index + 'training'}
          className={clsx(
            'flex items-center justify-between gap-3 self-stretch px-3 py-3',
            ''
          )}
        >
          <span
            className={clsx(
              'flex-[1_0_0] text-left text-[16px] leading-[21px] font-normal tracking-[-0.32px] text-white not-italic',
              'md:text-[22px] md:leading-[1.34] md:tracking-[0.36px]'
            )}
          >
            {text}
          </span>
        </div>
      );
    };

    const ButtonRegister = (
      <button
        className={clsx(
          'text-primary z-20 flex items-center justify-center gap-2 rounded-[12px] bg-white px-5 py-3 font-medium',
          {
            'md:self-start': isDesktop,
          }
        )}
      >
        Записаться на тренинг
      </button>
    );

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
            'absolute top-0 right-0 z-5 flex h-full w-full flex-col items-center gap-6 self-stretch px-2 py-8',
            'md:mt-[100px] md:gap-[50px]'
          )}
        >
          <SectionHiga
            badgeText="Анонс"
            title="Презентация зарегистрированной автоматизированной программы"
          />

          {!isDesktop && (
            <img
              src={TraingingImgLg}
              alt=""
              className={clsx(
                'absolute right-[-24px] bottom-[-28px] aspect-[91/72] h-[163px] w-[206px]',
                'md:right-auto md:bottom-[150px] md:left-0 md:aspect-auto md:h-auto md:w-auto'
              )}
            />
          )}

          <div
            className={clsx(
              'relative z-10 flex flex-col items-start gap-3 self-stretch',
              'md:w-[50%] md:items-end md:gap-[24px] md:self-end'
            )}
          >
            {isDesktop && (
              <img
                src={isDesktop ? TraingingImgLg : TraingingImg}
                alt=""
                className={clsx(
                  'absolute top-[-2vw] left-[-3vw] mr-[10%] translate-x-[-100%]'
                )}
              />
            )}

            {Items.map((item) => (
              <motion.div
                key={item.index}
                variants={{
                  initial: { x: '-100%', backgroundColor: '#4136C3' },
                  animated: { x: 0, y: 0, backgroundColor: '#544BC8' },
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
                  'md:self-start md:rounded-[20px] md:px-6 md:py-3 lg:w-[46vw]'
                )}
              >
                {listItems(item.label, item.index)}
              </motion.div>
            ))}

            {/* {isDesktop && ButtonRegister} */}
          </div>

          {/* {!isDesktop && ButtonRegister} */}
          {/*  */}
        </div>
      </motion.section>
    );
  }
);

export default Training;
