import InstIcon from '@/shared/assets/icons/socials/insta-outlined.svg?react';
import VkIcon from '@/shared/assets/icons/socials/vk-outlined.svg?react';
import TgIcon from '@/shared/assets/icons/socials/telegram-icon.svg?react';

const getIcon = (type: 'inst' | 'vk' | 'tg') => {
  switch (type) {
    case 'inst':
      return <InstIcon className="h-6 w-6" />;
    case 'vk':
      return <VkIcon className="h-6 w-6" />;
    case 'tg':
      return <TgIcon className="h-6 w-6" />;
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
    <a className="flex items-start gap-3 py-2" href="#">
      {getIcon(type)}
      <span className="text-center text-[17px] leading-[22px] font-semibold tracking-[-0.408px] text-[rgba(235,235,245,0.60)]">
        {getName(type)}
      </span>
    </a>
  );
};
export default SocialTag;
