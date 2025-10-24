import { motion } from 'framer-motion';
import { forwardRef, type ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import AiAboutIcon from '@/shared/assets/imgs/ai-about-icon.png';
import SectionHiga from '@/shared/components/ui/section-higa';
import SocialTag from '@/shared/components/ui/social-tag';

interface Props {
  onViewportEnter: () => void;
}

const Items = [
  { index: 1, label: 'Признаны судами и следственными органами' },
  { index: 2, label: 'Работаем по всей стране' },
  { index: 3, label: ' Признаны судами и следственными органами' },
];

const AnseAbouts = forwardRef<HTMLDivElement, Props>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');

    const listItems = (text: string | ReactNode) => {
      return (
        <div className="flex flex-col items-start justify-center gap-6 self-stretch rounded-xl bg-[#C85E4B] p-3.5">
          <p className="self-stretch text-center text-[16px] leading-[21px] font-normal tracking-[-0.32px] text-white">
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
        className="bg-bg-primary relative h-[calc(80vh)] w-full overflow-hidden"
      >
        <div className="absolute top-0 right-0 z-5 flex h-full w-full flex-col items-center gap-6 self-stretch px-2 py-8 md:top-[34vh] md:w-[60vw] xl:w-[54vw]">
          <SectionHiga
            badgeText="Об АНСЭ"
            title={
              <>
                Альянс Независимой <br /> Судебной Экспертизы
              </>
            }
            description="Более 10 лет опыта, 5000+ проведённых экспертиз, работа по всей территории Казахстана. Мы внедряем AI в экспертную практику, чтобы обеспечить максимальную точность и скорость исследований."
          />

          <img
            src={AiAboutIcon}
            className="absolute right-[-30px] bottom-0 aspect-[245/244] h-[244px] w-[245px]"
          />

          <div className="z-10 flex flex-col items-start gap-3 self-stretch">
            {Items.map((item) => (
              <motion.div
                variants={{
                  initial: { x: '-100%', backgroundColor: '#4136C3' },
                  animated: { x: 0, y: 0, backgroundColor: '#C85E4B' },
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
                {listItems(item.label)}
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-0 left-4 flex flex-col items-start justify-center gap-3">
            <SocialTag type="inst" />
            <SocialTag type="vk" />
          </div>
          {/*  */}
        </div>
      </motion.section>
    );
  }
);

export default AnseAbouts;
