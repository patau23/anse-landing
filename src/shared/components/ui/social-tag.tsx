import InstIcon from '@/shared/assets/icons/socials/insta-outlined.svg?react';
import TgIcon from '@/shared/assets/icons/socials/telegram-icon.svg?react';
import VkIcon from '@/shared/assets/icons/socials/vk-outlined.svg?react';
import clsx from 'clsx';

const getIcon = (type: 'inst' | 'vk' | 'tg') => {
  switch (type) {
    case 'inst':
      return <InstIcon className="h-6 w-6 md:h-12 md:w-12" />;
    case 'vk':
      return <VkIcon className="h-6 w-6 md:h-12 md:w-12" />;
    case 'tg':
      return <TgIcon className="h-6 w-6 md:h-12 md:w-12" />;
  }
};

const getName = (type: 'inst' | 'vk' | 'tg') => {
  switch (type) {
    case 'inst':
      return 'Instagram';
    case 'vk':
      // return 'anseexpertiza';
      return 'Vkontakte';
    case 'tg':
      return 'Telegram';
  }
};

const SocialTag = ({ type }: { type: 'inst' | 'vk' | 'tg' }) => {
  return (
    <a className="flex items-center justify-center gap-3 py-2" href="#">
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
