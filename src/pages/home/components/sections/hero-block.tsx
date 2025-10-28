import { motion, useAnimationControls } from 'framer-motion';
import { forwardRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Calendar from '@/shared/assets/icons/ios/ios-calendar.svg?react';
import Pinpoint from '@/shared/assets/icons/ios/ios-pin-point.svg?react';
import CreditCard from '@/shared/assets/icons/ios/ios-credit-card.svg?react';

import AiHeroIconLg from '@/shared/assets/imgs/ai-hero-icon-lg.png';
import AiHeroIcon from '@/shared/assets/imgs/ai-hero-icon.png';
import InfrontRibbonLinesLg from '@/shared/assets/imgs/first-ribbon-lines-image-lg.png';
import InfrontRibbonLines from '@/shared/assets/imgs/first-ribbon-lines-image.png';
import BehindRibbonLinesLg from '@/shared/assets/imgs/second-ribbon-lines-image-lg.png';
import BehindRibbonLines from '@/shared/assets/imgs/second-ribbon-lines-image.png';

import SectionHiga from '@/shared/components/ui/section-higa';
import clsx from 'clsx';

interface HeroBlockProps {
  onViewportEnter: () => void;
  handleTabClick: (tabValue: string) => void;
}

const HeroBlock = forwardRef<HTMLDivElement, HeroBlockProps>(
  (props: HeroBlockProps, ref) => {
    const { onViewportEnter } = props;
    const { t } = useTranslation('homePage');
    const controlPhoneBackground = useAnimationControls();
    const controlPhone = useAnimationControls();
    const controlLines = useAnimationControls();
    const controlBanner = useAnimationControls();
    const isDesktop = window.innerWidth >= 768;

    const firstStage = useCallback(async () => {
      await controlPhoneBackground.start('animated');
    }, [controlPhoneBackground]);

    const secondStage = useCallback(async () => {
      return new Promise<void>((resolve) => {
        controlLines.start('animated');
        controlPhone.start('animated');
        resolve();
      });
    }, [controlLines, controlPhone]);

    const thirdStage = useCallback(async () => {
      await controlBanner.start('animated');
    }, [controlBanner]);

    const startAnimation = useCallback(async () => {
      await firstStage();
      await secondStage();
      await thirdStage();
    }, [firstStage, secondStage, thirdStage]);

    useEffect(() => {
      startAnimation();
    }, [startAnimation]);

    // ! ||--------------------------------------------------------------------------------||
    // ! ||                                     render                                     ||
    // ! ||--------------------------------------------------------------------------------||

    const listItem = (text: string, icon: React.ReactNode) => (
      <div className="flex items-center gap-3">
        <span
          className={clsx(
            'flex aspect-square h-8 w-8 flex-col items-center justify-center gap-2.5 rounded-[.5rem] bg-[var(--Label-Color-Dark-Quaternary,rgba(235,235,245,0.18))] px-4 py-3',
            'md:h-16 md:w-16 md:rounded-2xl'
          )}
        >
          {icon}
        </span>
        <span className="text-[16px] leading-[21px] font-normal tracking-[-0.32px] text-white md:text-[20px] md:tracking-[0.38px]">
          {text}
        </span>
      </div>
    );

    return (
      <motion.section
        ref={ref}
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.005 }}
        className={clsx(
          'bg-bg-primary relative h-[calc(100vh-64px)] w-full overflow-hidden',
          'md:h-[calc(100vh+88px)] md:min-h-[800px]'
        )}
      >
        <motion.div
          variants={{ initial: { opacity: 0 }, animated: { opacity: 1 } }}
          initial={'initial'}
          animate={controlBanner}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{ overflow: 'hidden' }}
          className="absolute top-0 right-0 z-5 flex h-full w-full flex-col items-center self-stretch px-2 py-8"
        >
          <div className="z-30 flex flex-col items-center gap-6 self-stretch md:mt-[100px]">
            <SectionHiga
              badgeText={t('hero.title')}
              title={'Будущее судебной экспертизы в эпоху ИИ'}
            />

            <div
              className={clsx(
                'flex flex-col items-center justify-center gap-2',
                'md:flex-row md:gap-[46px]'
              )}
            >
              {listItem(
                '20 ноября 2025',
                <Calendar className="min-h-[20px] md:min-h-[38px] md:min-w-[32px]" />
              )}
              {listItem(
                'Астана, ЕНУ им. Л.Н. Гумилёва',
                <Pinpoint className="min-h-[20px] md:min-h-[38px] md:min-w-[32px]" />
              )}
              {listItem(
                'Входной билет: 5000 ₸ (оплата наличными или по QR)',
                <CreditCard className="min-h-[20px] md:min-h-[38px] md:min-w-[32px]" />
              )}
            </div>

            {/* <button
              className={clsx(
                'flex items-center justify-center gap-2.5 rounded-[10px] bg-white px-[20px] py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:px-6 md:py-4',
                'md:max-h-[54px]'
              )}
            >
              <span className="text-[1rem] leading-[21px] font-semibold tracking-[-0.32px] text-black [font-style:normal] md:text-[17px]">
                Зарегистрироваться сейчас
              </span>
            </button> */}
          </div>

          <img
            src={isDesktop ? BehindRibbonLinesLg : BehindRibbonLines}
            className={clsx(
              'absolute top-[160px] left-[-200px] min-h-[339.579px] min-w-[603.309px] rotate-[35.428deg]',
              'md:top-[0px] md:left-0 md:rotate-0'
            )}
          />

          <img
            src={isDesktop ? AiHeroIconLg : AiHeroIcon}
            className={clsx(
              'absolute bottom-[-50px] left-[50%] z-10 aspect-[66/65] h-[324px] w-[329px] translate-x-[-50%]',
              'md:bottom-[-200px] md:h-[782px] md:w-[796px]'
            )}
          />

          <img
            src={isDesktop ? InfrontRibbonLinesLg : InfrontRibbonLines}
            className={clsx(
              'absolute top-[370px] left-[40px] z-20 min-h-[245.988px] min-w-[541.127px] rotate-[-55.094deg]',
              'md:top-[0px] md:right-0 md:left-auto md:h-auto md:min-h-auto md:w-auto md:min-w-auto md:rotate-0'
            )}
          />
        </motion.div>
      </motion.section>
    );
  }
);

export default HeroBlock;
