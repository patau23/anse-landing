import InstIcon from '@/shared/assets/icons/socials/insta-outlined.svg?react';
import TgIcon from '@/shared/assets/icons/socials/telegram-icon.svg?react';
import WhatsAppIcon from '@/shared/assets/icons/socials/whatsapp-outlined.svg?react';
import clsx from 'clsx';

const getIcon = (type: 'inst' | 'wp' | 'tg') => {
  switch (type) {
    case 'inst':
      return <InstIcon className="h-6 w-6 md:h-12 md:w-12" />;
    case 'wp':
      return <WhatsAppIcon className="h-6 w-6 md:h-12 md:w-12" />;
    case 'tg':
      return <TgIcon className="h-6 w-6 md:h-12 md:w-12" />;
  }
};

const getName = (type: 'inst' | 'wp' | 'tg') => {
  switch (type) {
    case 'inst':
      return 'Instagram';
    case 'wp':
      return 'WhatsApp';
    case 'tg':
      return 'Telegram';
  }
};

const getLink = (type: 'inst' | 'wp' | 'tg') => {
  switch (type) {
    case 'inst':
      return 'https://www.instagram.com/ansesykz/';
    case 'wp':
      return 'https://api.whatsapp.com/send/?phone=77710333525&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0';
    case 'tg':
      return 'https://t.me/ansesykz';
  }
};

const SocialTag = ({ type }: { type: 'inst' | 'tg' | 'wp' }) => {
  return (
    <a
      className="flex items-center justify-center gap-3 py-2"
      href={getLink(type)}
      target="_blank"
      rel="noreferrer"
    >
      {getIcon(type)}
      <span
        className={clsx(
          'text-center text-[17px] leading-[22px] font-semibold tracking-[-0.408px] text-[rgba(235,235,245,0.60)]',
          'md:text-[22px] md:leading-[1.28] md:tracking-[0.35px]'
        )}
      >
        {getName(type)}
      </span>
    </a>
  );
};
export default SocialTag;
