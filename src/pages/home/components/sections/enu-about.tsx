import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import EnuPicLg from '@/shared/assets/imgs/enu-image-lg.png';
import EnuPic from '@/shared/assets/imgs/enu-image.png';
import SectionHiga from '@/shared/components/ui/section-higa';
import SocialTag from '@/shared/components/ui/social-tag';
import clsx from 'clsx';

interface Props {
  onViewportEnter: () => void;
}

const EnuAbout = forwardRef<HTMLDivElement, Props>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');
    const isDesktop = window.innerWidth >= 768;

    return (
      <motion.section
        ref={ref}
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.005 }}
        className={clsx(
          
          'bg-bg-primary relative h-[calc(80vh)] w-full overflow-hidden',
          // md+
          'md:h-[100vh]'
        )}
      >
        <div
          className={clsx(
            
            'absolute top-0 right-0 z-5 flex h-full w-full flex-col items-center gap-8 self-stretch px-0 py-8',
            // md+
            'md:top-[150px]'
          )}
        >
          <SectionHiga
            badgeText="ЕНУ"
            title="Евразийский Национальный Университет им. Л.Н. Гумилёва"
            description="Один из ведущих университетов Центральной Азии, входящий в топ-500 мировых вузов. Обладает современными лабораториями по машинному обучению, Big Data и цифровым технологиям."
          />

          <div
            className={clsx(
              
              'flex flex-col items-center gap-2 self-stretch bg-white p-[12px_0_24px_0]',
              // md+
              'md:top-[150px]'
            )}
          >
            <img
              src={isDesktop ? EnuPicLg : EnuPic}
              alt=""
              className="aspect-[263/96] h-[96px] w-[263px] md:aspect-auto md:h-auto md:w-auto"
            />
          </div>

          <div className="flex items-center gap-4">
            <SocialTag type="inst" />
            <SocialTag type="vk" />
          </div>
          {/*  */}
        </div>
      </motion.section>
    );
  }
);

export default EnuAbout;
