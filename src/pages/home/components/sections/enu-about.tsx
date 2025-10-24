import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import EnuPic from '@/shared/assets/imgs/enu-image.png';

import SectionHiga from '@/shared/components/ui/section-higa';
import SocialTag from '@/shared/components/ui/social-tag';

interface Props {
  onViewportEnter: () => void;
}

const EnuAbout = forwardRef<HTMLDivElement, Props>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');

    return (
      <motion.section
        ref={ref}
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.005 }}
        className="bg-bg-primary relative h-[calc(80vh)] w-full overflow-hidden md:h-[100vh]"
      >
        <div className="absolute top-0 right-0 z-5 flex h-full w-full flex-col items-center gap-8 self-stretch px-0 py-8 md:top-[34vh] md:w-[60vw] xl:w-[54vw]">
          <SectionHiga
            badgeText="ЕНУ"
            title="Евразийский Национальный Университет им. Л.Н. Гумилёва"
            description="Один из ведущих университетов Центральной Азии, входящий в топ-500 мировых вузов. Обладает современными лабораториями по машинному обучению, Big Data и цифровым технологиям."
          />

          <div className="flex flex-col items-center gap-2 self-stretch bg-white p-[12px_0_24px_0] md:top-[34vh] md:w-[60vw] xl:w-[54vw]">
            <img src={EnuPic} className="aspect-[263/96] h-[96px] w-[263px]" />
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
