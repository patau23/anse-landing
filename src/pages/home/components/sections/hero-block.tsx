import { motion, useAnimationControls } from 'framer-motion';
import { forwardRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Calendar from '@/shared/assets/icons/ios/ios-calendar.svg?react';
import Pinpoint from '@/shared/assets/icons/ios/ios-pin-point.svg?react';

import AiHeroIcon from '@/shared/assets/imgs/ai-hero-icon.png';
import InfrontRibbonLines from '@/shared/assets/imgs/first-ribbon-lines-image.png';
import BehindRibbonLines from '@/shared/assets/imgs/second-ribbon-lines-image.png';

import SectionBadge from '@/shared/components/ui/section-higa/section-badge';
import SectionTitle from '@/shared/components/ui/section-higa/section-title';
import SectionHiga from '@/shared/components/ui/section-higa';

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
        <span className="flex aspect-square h-8 w-8 flex-col items-center justify-center gap-2.5 rounded-[.5rem] bg-[var(--Label-Color-Dark-Quaternary,rgba(235,235,245,0.18))] px-4 py-3">
          {icon}
        </span>
        <span className="text-[16px] leading-[21px] font-normal tracking-[-0.32px] text-white">
          {text}
        </span>
      </div>
    );

    return (
      <motion.section
        ref={ref}
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.005 }}
        className="bg-bg-primary relative h-[calc(100vh-64px)] w-full overflow-hidden"
      >
        <motion.div
          variants={{ initial: { opacity: 0 }, animated: { opacity: 1 } }}
          initial={'initial'}
          animate={controlBanner}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{ overflow: 'hidden' }}
          className="absolute top-0 right-0 z-5 flex h-full w-full flex-col items-center self-stretch px-2 py-8 md:top-[34vh] md:w-[60vw] xl:w-[54vw]"
        >
          <div className="z-10 flex flex-col items-center gap-6 self-stretch">
            <SectionHiga
              badgeText={t('hero.title')}
              title={'Искусственный интеллект в судебной экспертизе'}
            />

            <div className="flex flex-col items-center justify-center gap-2">
              {listItem(
                '10–11 октября 2025',
                <Calendar className="min-h-[20px]" />
              )}
              {listItem(
                'Астана, ЕНУ им. Л.Н. Гумилёва',
                <Pinpoint className="min-h-[20px]" />
              )}
            </div>

            <button className="flex items-center justify-center gap-2.5 rounded-[10px] bg-white px-[20px] py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:px-6 md:py-4">
              <span className="text-[1rem] leading-[21px] font-semibold tracking-[-0.32px] text-black [font-style:normal]">
                Зарегистрироваться сейчас
              </span>
            </button>
          </div>

          <img
            src={BehindRibbonLines}
            className="absolute top-[160px] left-[-200px] min-h-[339.579px] min-w-[603.309px] rotate-[35.428deg]"
          />

          <img
            src={AiHeroIcon}
            className="absolute bottom-[-50px] left-[50%] z-10 aspect-[66/65] h-[324px] w-[329px] translate-x-[-50%]"
          />

          <img
            src={InfrontRibbonLines}
            className="absolute top-[370px] left-[40px] z-20 min-h-[245.988px] min-w-[541.127px] rotate-[-55.094deg]"
          />
        </motion.div>
      </motion.section>
    );
  }
);

export default HeroBlock;
