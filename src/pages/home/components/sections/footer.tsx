import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import SectionBadge from '@/shared/components/ui/section-higa/section-badge';
import PhoneIcon from '@/shared/assets/icons/ios/ios-phone.svg?react';
import MailIcon from '@/shared/assets/icons/ios/ios-envelope.svg?react';
import PinPointIcon from '@/shared/assets/icons/ios/ios-pin-point.svg?react';
import InstIcon from '@/shared/assets/icons/socials/insta-outlined.svg?react';
import VkIcon from '@/shared/assets/icons/socials/vk-outlined.svg?react';
import TgIcon from '@/shared/assets/icons/socials/telegram-icon.svg?react';

interface Props {
  onViewportEnter: () => void;
}

const Items = [
  { index: 1, label: 'Анализ поддельных документов с AI' },
  { index: 2, label: 'Распознавание объектов на фото' },
  { index: 3, label: 'Автоматическая сверка цифровых доказательств' },
];

const Footer = ({ onViewportEnter }: Props) => {
  const { t } = useTranslation('homePage');

  const listItems = (icon: string | React.ReactNode, text: string) => {
    return (
      <div className="flex items-center gap-3">
        <span className="flex aspect-square h-8 w-8 flex-col items-center justify-center gap-[10px] rounded-lg bg-[var(--Label-Color-Dark-Quaternary,rgba(235,235,245,0.18))] p-[12px_16px]">
          {icon}
        </span>
        <span className="text-[16px] leading-[21px] font-normal tracking-[-0.32px] text-[var(--Label-Color-Dark-Primary,#FFF)]">
          {text}
        </span>
      </div>
    );
  };

  return (
    <motion.section
      onViewportEnter={onViewportEnter}
      viewport={{ amount: 0.005 }}
      className="relative flex h-[calc(80vh)] w-full flex-[1_0_0] flex-col items-center justify-center gap-6 self-stretch overflow-hidden bg-black px-4 py-6"
    >
      <div className="absolute top-0 right-0 z-5 flex h-full w-full flex-col items-center gap-6 self-stretch px-2 py-8 md:top-[34vh] md:w-[60vw] xl:w-[54vw]">
        {/*  */}
        <div className="flex flex-[1_0_0] flex-col items-center justify-center gap-3">
          <SectionBadge text="Контакты" />
          {listItems(<PhoneIcon />, '+7 (XXX) XXX-XX-XX')}
          {listItems(<MailIcon />, 'info@anse.kz')}
          {listItems(<PinPointIcon />, 'Астана, ЕНУ им. Л.Н. Гумилёва')}
        </div>
        {/*  */}
        <div className="h-px w-full self-stretch bg-white" />

        {/*  */}

        <div className="flex flex-[1_0_0] flex-col items-center justify-center gap-3">
          <SectionBadge text="Соцсети" />
          {listItems(<InstIcon />, '+7 (XXX) XXX-XX-XX')}
          {listItems(<VkIcon />, 'info@anse.kz')}
          {listItems(<TgIcon />, 'Астана, ЕНУ им. Л.Н. Гумилёва')}
        </div>

        {/*  */}

        <div className="height: 1px; align-self: stretch;" />

        {/*  */}

        <p className="font-sans text-[11px] leading-[13px] font-normal tracking-[0.066px] text-white">
          © 2025 АНСЭ. Все права защищены.
        </p>

        {/*  */}
      </div>
    </motion.section>
  );
};

export default Footer;
