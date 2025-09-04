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
      <DropdownMenuTrigger className="bg-tab-bg my-4 mt-auto mr-4 flex rounded-[1.25rem] p-4 py-4 md:my-0 md:mt-0 md:bg-white md:py-0">
        <img
          src={LanguageFlagMap[i18next.language]}
          alt={i18next.language}
          className="h-5 w-8"
        />
        <span className="mr-1 ml-2 flex items-center justify-center">
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
            <img src={LanguageFlagMap[lang]} alt={lang} className="w-8" />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const logo = (
    <div className="flex items-center justify-center rounded-4xl">
      <span className="text-system-bg-light-primary text-[22px] leading-[28px] font-bold tracking-[0.35px] text-white">
        Логотип
      </span>
    </div>
  );

  const desktopHeader = (
    <AnimatePresence>
      {!hidden && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={() => setHidden(true)}
            className="fixed inset-0 z-20 bg-black md:hidden"
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
            className="md:bg-tab-bg bg-tab-bg fixed top-0 right-[0] z-[25] flex h-[100dvh] w-[220px] flex-col items-center justify-start gap-4 rounded-none md:sticky md:top-0 md:right-auto md:h-22 md:w-full md:flex-row md:justify-between md:gap-0 md:rounded-full"
          >
            <div
              onClick={() => setHidden(true)}
              className="flex w-full justify-end p-4 md:hidden"
            >
              <Close />
            </div>

            {/* Logo */}
            {logo}

            <TabsWrapper
              value={section}
              className="mt-2 w-full items-center md:mt-0 md:w-auto"
            >
              <TabsList
                defaultValue={section}
                className="bg-bg-body h-11 w-full flex-col p-0 md:flex-row md:p-1"
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
                    className="data-[state=active]:text-primary w-full border-t border-r-0 border-b border-l-0 border-[#D9D9D9] text-lg font-normal text-white data-[state=active]:bg-white md:w-auto"
                  >
                    {t(`header.${tab}`)}
                  </TabsTrigger>
                ))}
              </TabsList>
            </TabsWrapper>

            {/* Language Picker */}
            {langPicker}

            <button className="rounded-[32px] bg-white px-4 py-3 font-semibold text-black transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-400 hover:shadow-lg md:px-6 md:py-4">
              {/* {t('hero.demo')} */}
              Регистрация
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  const mobileHeader = (
    <div className="bg-background sticky top-0 flex justify-between px-4 py-3 md:hidden">
      {/* Logo */}
      {logo}

      <motion.div>
        <Burger
          onClick={() => setHidden(false)}
          className="text-primary h-10 w-10 rounded-[12px] bg-white p-2"
        />
      </motion.div>
    </div>
  );

  return (
    <header className="sticky top-0 z-[25]">
      {desktopHeader}
      {mobileHeader}
    </header>
  );
};

export default Header;
