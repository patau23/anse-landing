import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import MailIcon from '@/shared/assets/icons/ios/ios-envelope.svg?react';
import PhoneIcon from '@/shared/assets/icons/ios/ios-phone.svg?react';
import PinPointIcon from '@/shared/assets/icons/ios/ios-pin-point.svg?react';
import InstIcon from '@/shared/assets/icons/socials/insta-outlined.svg?react';
import TgIcon from '@/shared/assets/icons/socials/telegram-icon.svg?react';
import SectionBadge from '@/shared/components/ui/section-higa/section-badge';
import clsx from 'clsx';

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
  const isDesktop = window.innerWidth >= 768;

  const listItems = (icon: string | React.ReactNode, text: string) => {
    return (
      <a className={clsx('flex items-center gap-3', '')}>
        <span
          className={clsx(
            'flex aspect-square h-8 w-8 flex-col items-center justify-center gap-[10px] rounded-lg bg-[var(--Label-Color-Dark-Quaternary,rgba(235,235,245,0.18))] p-[12px_16px]',
            ''
          )}
        >
          {icon}
        </span>
        <span
          className={clsx(
            'text-[16px] leading-[21px] font-normal tracking-[-0.32px] text-[var(--Label-Color-Dark-Primary,#FFF)]',
            ''
          )}
        >
          {text}
        </span>
      </a>
    );
  };

  return (
    <motion.section
      onViewportEnter={onViewportEnter}
      viewport={{ amount: 0.005 }}
      className={clsx(
        'relative flex h-[calc(80vh)] w-full flex-[1_0_0] flex-col items-center justify-center gap-6 self-stretch overflow-hidden bg-black px-4 py-6',
        'md:h-auto'
      )}
    >
      <div
        className={clsx(
          'absolute top-0 right-0 z-5 flex h-full w-full flex-col flex-wrap items-center gap-6 self-stretch px-2 py-8',
          'md:relative md:flex-row md:gap-0'
        )}
      >
        <div
          className={clsx(
            'flex flex-[1_0_0] flex-col items-center justify-center gap-3',
            'md:flex-[50%-1px]'
          )}
        >
          <SectionBadge text="Контакты" />
          {listItems(<PhoneIcon />, '+7 777 013 77 73')}
          {listItems(<MailIcon />, 'ansesykz@gmail.com')}
          {listItems(<PinPointIcon />, 'Астана, ЕНУ им. Л.Н. Гумилёва')}
        </div>

        <div
          className={clsx(
            'h-px w-full self-stretch bg-[#7268E7]',
            'md:h-[160px] md:w-px md:basis-[1px] md:translate-y-[10px]'
          )}
        />

        <div
          className={clsx(
            'flex flex-[1_0_0] flex-col items-center justify-center gap-3',
            'md:flex-[50%-1px]'
          )}
        >
          <SectionBadge text="Соцсети" />
          {listItems(<InstIcon />, 'https://www.instagram.com/ansesykz/')}
          {/* {listItems(<VkIcon />, 'info@anse.kz')} */}
          {listItems(<TgIcon />, 'Telegram')}
          {listItems(<TgIcon />, 'WhatsApp')}
        </div>

        <div
          className={clsx(
            '',
            'md:mt-[32px] md:basis-[100%] md:pt-[32px] md:[border-top:1px_solid_#7268E7]'
          )}
        >
          <p
            className={clsx(
              'text-center font-sans text-[11px] leading-[13px] font-normal tracking-[0.066px] text-white',
              ''
            )}
          >
            © 2025 АНСЭ. Все права защищены.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer;
