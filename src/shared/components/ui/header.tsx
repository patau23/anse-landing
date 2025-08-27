import { motion } from 'framer-motion';
import i18next from 'i18next';
import { type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Burger from '@/shared/assets/icons/burger.svg?react';
import Close from '@/shared/assets/icons/close.svg?react';
import Down from '@/shared/assets/icons/down.svg?react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/components/animate-ui/radix/dropdown-menu.tsx';
import {
  TabsList,
  TabsTrigger,
  TabsWrapper,
} from '@/shared/components/ui/tabsWrapper.tsx';
import { LanguageFlagMap } from '@/shared/constants/i18n/LanguageFlagMap.ts';
import { Sections } from '@/shared/constants/navigation.ts';
import { useStore } from '@/store';
import { AnimatePresence } from 'motion/react';

interface HeaderProps {
  handleTabClick: (tabValue: string) => void;
}

const Header: FC<HeaderProps> = ({ handleTabClick }) => {
  const { t, i18n } = useTranslation('homePage');
  const section = useStore((state) => state.section);
  const [hidden, setHidden] = useState<boolean>(
    window?.innerWidth < 768 || false
  );

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // ! ||--------------------------------------------------------------------------------||
  // ! ||                                     render                                     ||
  // ! ||--------------------------------------------------------------------------------||

  const langPicker = (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="
          flex
          my-4 mt-auto mr-4 p-4 py-4
          bg-tab-bg
          rounded-full
          md:my-0 md:mt-0 md:py-0 md:bg-white
        "
      >
        <img
          src={LanguageFlagMap[i18next.language]}
          alt={i18next.language}
          className="
            h-5 w-8
          "
        />
        <span
          className="
            flex
            mr-1 ml-2
            items-center justify-center
          "
        >
          {i18next.language.toUpperCase()}
        </span>
        <Down />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.keys(LanguageFlagMap).map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
          >
            {lang.toUpperCase()}
            <img
              src={LanguageFlagMap[lang]}
              alt={lang}
              className="
                w-8
              "
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const logo = (
    <div
      className="
        flex
        bg-white
        rounded-4xl
        items-center justify-center
      "
    >
      <span
        className="
          text-system-bg-light-primary text-[22px] leading-[28px] font-bold tracking-[0.35px]
        "
      >
        Логотип
      </span>
    </div>
  );

  const deskTopHeader = (
    <AnimatePresence>
      {!hidden && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setHidden(true)}
            className="
              z-20
              bg-black
              fixed inset-0
              md:hidden
            "
          />
          <motion.div
            variants={{
              hidden: {
                x: 400,
                opacity: 0,
              },
              visible: {
                x: 0,
                opacity: 1,
              },
            }}
            initial={window?.innerWidth < 768 ? 'hidden' : 'visible'}
            animate={hidden ? 'hidden' : 'visible'}
            exit={'hidden'}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="
              z-[25] flex flex-col
              h-[100dvh] w-[220px]
              bg-white
              rounded-none
              fixed top-0 right-[0] items-center justify-start gap-4
              md:flex-row md:h-22 md:w-full md:bg-tab-bg md:rounded-full md:sticky md:top-0 md:right-auto md:justify-between md:gap-0
            "
          >
            <div
              onClick={() => setHidden(true)}
              className="
                flex
                w-full
                p-4
                justify-end
                md:hidden
              "
            >
              <Close />
            </div>
            {/* Logo */}
            {logo}
            <TabsWrapper
              value={section}
              className="
                w-full
                mt-2
                items-center
                md:w-auto md:mt-0
              "
            >
              <TabsList
                defaultValue={section}
                className="
                  flex-col
                  h-11 w-full
                  p-0
                  bg-white
                  md:flex-row md:p-1
                "
              >
                {Sections.map((tab: string) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    onClick={() => {
                      handleTabClick(tab);
                      if (window.innerWidth < 767) {
                        setHidden(true);
                      }
                    }}
                    className="
                      w-full
                      text-lg text-black
                      data-[state=active]:text-primary
                      md:w-auto
                    "
                  >
                    {t(`header.${tab}`)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </TabsWrapper>

            {/* Language Picker */}
            {langPicker}

            <button
              className="
                px-4 py-3
                font-semibold text-black
                bg-white
                rounded-[32px]
                transition-all
                duration-300 ease-in-out hover:scale-105 hover:bg-blue-400 hover:shadow-lg
                md:px-6 md:py-4
              "
            >
              {/* {t('hero.demo')} */}
              Регистрация
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  const mobileHeader = (
    <div
      className="
        flex
        px-4 py-3
        bg-background
        sticky top-0 justify-between
        md:hidden
      "
    >
      {/* Logo */}
      {logo}

      <motion.div>
        <Burger
          onClick={() => setHidden(false)}
          className="
            h-10 w-10
            p-2
            bg-tab-bg
            rounded-3xl
          "
        />
      </motion.div>
    </div>
  );

  return (
    <header
      className="
        z-[25]
        sticky top-0
      "
    >
      {deskTopHeader}
      {mobileHeader}
    </header>
  );
};

export default Header;
