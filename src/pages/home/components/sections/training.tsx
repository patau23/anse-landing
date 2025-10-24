import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import TraingingImg from '@/shared/assets/imgs/ai-training-icon.png';

import SectionHiga from '@/shared/components/ui/section-higa';

interface Props {
  onViewportEnter: () => void;
}

const Items = [
  { index: 1, label: 'Анализ поддельных документов с AI' },
  { index: 2, label: 'Распознавание объектов на фото' },
  { index: 3, label: 'Автоматическая сверка цифровых доказательств' },
];

const Training = forwardRef<HTMLDivElement, Props>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');

    const listItems = (text: string, index: number) => {
      return (
        <div className="flex items-center justify-between gap-3 self-stretch px-3 py-3">
          <span className="flex-[1_0_0] text-left text-[16px] leading-[21px] font-normal tracking-[-0.32px] text-white not-italic">
            {text}
          </span>
        </div>
      );
    };

    return (
      <motion.section
        ref={ref}
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.005 }}
        className="bg-bg-primary relative h-[calc(80vh)] w-full overflow-hidden"
      >
        <div className="absolute top-0 right-0 z-5 flex h-full w-full flex-col items-center gap-6 self-stretch px-2 py-8 md:top-[34vh] md:w-[60vw] xl:w-[54vw]">
          <SectionHiga
            badgeText="Тренинг"
            title="Практический мастер-класс"
            description="4 часа интенсивной работы с реальными кейсами и современными AI-инструментами.
Малые группы по 15–20 человек, персональная работа с тренерами."
          />

          <img
            src={TraingingImg}
            className="absolute right-[-24px] bottom-[-28px] aspect-[91/72] h-[163px] w-[206px]"
          />

          <div className="z-10 flex flex-col items-start gap-3 self-stretch">
            {Items.map((item) => (
              <motion.div
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
                className="z-0 flex w-full flex-col justify-center gap-[1.25vw] rounded-[16px] bg-[#C7EBFF] p-[1.25vw] text-center lg:w-[46vw]"
              >
                {listItems(item.label, item.index)}
              </motion.div>
            ))}
          </div>

          <button className="text-primary z-20 flex items-center justify-center gap-2 rounded-[12px] bg-white px-5 py-3 font-medium">
            Записаться на тренинг
          </button>
          {/*  */}
        </div>
      </motion.section>
    );
  }
);

export default Training;
