import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import MailIcon from '@/shared/assets/icons/ios/ios-envelope.svg?react';
import PhoneIcon from '@/shared/assets/icons/ios/ios-phone.svg?react';
import PinPointIcon from '@/shared/assets/icons/ios/ios-pin-point.svg?react';
import InstIcon from '@/shared/assets/icons/socials/insta-outlined.svg?react';
import TgIcon from '@/shared/assets/icons/socials/telegram-icon.svg?react';
import WhatsAppIcon from '@/shared/assets/icons/socials/whatsapp-outlined.svg?react';
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

  const listItems = (
    icon: string | React.ReactNode,
    text: string,
    link: string
  ) => {
    return (
      <a
        className={clsx('flex items-center gap-3', '')}
        href={link}
        target="_blank"
      >
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
          {listItems(
            <PhoneIcon className={clsx('', 'md:scale-[237.5%]')} />,
            '+7 777 013 77 73',
            'tel:+77770137773'
          )}
          {listItems(
            <MailIcon className={clsx('', 'md:scale-[237.5%]')} />,
            'ansesykz@gmail.com',
            'mailto:ansesykz@gmail.com'
          )}
          {listItems(
            <PinPointIcon className={clsx('', 'md:scale-[237.5%]')} />,
            'Астана, ЕНУ им. Л.Н. Гумилёва',
            'https://go.2gis.com/MZw7B'
          )}
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
          {listItems(
            <InstIcon className={clsx('', 'md:scale-[237.5%]')} />,
            'AnsesyKz@ig',
            'https://www.instagram.com/ansesykz/'
          )}
          {/* {listItems(<VkIcon />, 'info@anse.kz')} */}
          {listItems(
            <TgIcon className={clsx('', 'md:scale-[237.5%]')} />,
            'Telegram',
            'https://t.me/ansesykz'
          )}
          {listItems(
            <WhatsAppIcon className={clsx('', 'md:scale-[237.5%]')} />,
            'WhatsApp',
            'https://api.whatsapp.com/send/?phone=77710333525&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0'
          )}
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
