import { motion, useAnimationControls } from 'framer-motion';
import { forwardRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PhoneImg from '@/shared/assets/imgs/phone.webp';
import LaptopImg from '@/shared/assets/imgs/laptop.webp';
import Logo from '@/shared/assets/icons/logo.svg?react';

interface HeroSectionProps {
  onViewportEnter: () => void;
  handleTabClick: (tabValue: string) => void;
}

const HeroSection = forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ onViewportEnter }, ref) => {
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

    return (
      <motion.div
        ref={ref}
        className="relative h-[calc(100vh)] w-full overflow-hidden bg-[#C7DDFF]"
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.005 }}
      >
        <svg
          className="relative top-[21vh] left-[45.12vw] z-[2] w-[47.95vw] md:top-0 md:left-[30vw] md:w-[25.73vw]"
          width="494"
          height="320"
          viewBox="0 0 494 425"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_6235_811"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="-195"
            width="494"
            height="620"
          >
            <path
              d="M203.192 425H62.0404C27.8752 425 0.178711 395.318 0.178711 358.703V-128.703C0.178711 -165.318 27.8752 -195 62.0403 -195H207.288C266.768 -195 317.863 -182.588 360.572 -157.764C403.476 -133.141 436.434 -97.7213 459.446 -51.5039C482.458 -5.28644 493.964 50.013 493.964 114.395C493.964 178.978 482.361 234.479 459.154 280.898C436.142 327.318 402.891 362.939 359.402 387.764C316.108 412.588 264.038 425 203.192 425Z"
              fill="black"
            />
          </mask>

          <g mask="url(#mask0_6235_811)">
            <motion.rect
              x="0.178711"
              y="-192.95"
              width="494.434"
              height="630.655"
              fill="#C0FE5C"
              variants={{
                initial: {
                  opacity: 0,
                  y: -20,
                },
                animated: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial={'initial'}
              animate={controlPhoneBackground}
              transition={{ duration: 0.5 }}
            />

            <mask
              id="mask1_6235_811"
              style={{ maskType: 'luminance' }}
              maskUnits="userSpaceOnUse"
              x="30"
              y="-585"
              width="470"
              height="952"
            >
              <path
                d="M161.083 -584.723C153.673 -584.497 146.695 -583.776 141.466 -582.697C126.158 -579.536 114.282 -570.498 108.083 -557.29C105.229 -551.21 103.731 -545.298 102.634 -535.798C102.219 -532.207 102.175 -500.268 102.085 -134.669C102.015 148.12 102.072 264.218 102.285 268.326C102.956 281.296 104.979 290.395 108.808 297.665C116.427 312.13 129.51 320.402 148.416 322.707C156.116 323.646 156.405 323.649 304.966 323.754C454.175 323.861 465.597 323.793 474.046 322.864C488.85 321.217 498.422 317.081 506.837 308.693C515.118 300.438 519.293 290.838 520.981 276.166C521.217 274.109 521.534 269.213 521.68 265.289C522.046 255.574 522.049 -516.598 521.683 -526.31C521.396 -533.889 520.928 -538.88 520.047 -543.744C516.272 -564.592 502.467 -578.675 481.756 -582.814C472.655 -584.633 464.245 -584.963 429.848 -584.853L403.412 -584.768L402.264 -584.155C401.634 -583.817 400.857 -583.174 400.538 -582.725C399.342 -581.048 399.119 -580.011 398.841 -574.896C398.549 -569.506 398.109 -566.825 397.046 -563.994C394.518 -557.263 388.217 -551.572 381.19 -549.67C380.083 -549.372 377.896 -548.999 376.328 -548.842C372.21 -548.43 251.178 -548.449 247.355 -548.863C238.898 -549.777 232.511 -553.742 228.43 -560.611C226.207 -564.352 225.274 -568.316 224.978 -575.268C224.731 -581.057 224.055 -582.736 221.39 -584.174L220.289 -584.768L191.925 -584.783C176.325 -584.792 162.447 -584.765 161.083 -584.723Z"
                fill="white"
              />
            </mask>

            <g mask="url(#mask1_6235_811)">
              <motion.image
                href={PhoneImg}
                xlinkHref={PhoneImg}
                x="100"
                y="-620"
                width="430"
                height="1000"
                preserveAspectRatio="xMidYMid meet"
                variants={{
                  initial: {
                    opacity: 0,
                    y: -300,
                  },
                  animated: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial={'initial'}
                animate={controlPhone}
                transition={{ duration: 0.6 }}
              />
            </g>
          </g>
        </svg>
        <svg
          className="relative bottom-[14.64vh] left-[6.67vw] z-[1] w-[65.64vw] overflow-hidden md:bottom-[20vh] md:left-[1.8vw] md:w-[40vw]"
          viewBox="0 0 768 980"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <mask
            id="mask0_6235_801"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="768"
            height="965"
          >
            <path
              d="M315.754 964.318H96.2156C43.0774 964.318 0.000244141 918.153 0.000244141 861.204V103.127C0.000244141 46.1788 43.0774 0.0133667 96.2155 0.0133667H322.123C414.635 0.0133667 494.105 19.3184 560.531 57.9282C627.261 96.2241 678.522 151.314 714.313 223.197C750.104 295.081 768 381.09 768 481.224C768 581.672 749.953 667.995 713.858 740.193C678.067 812.39 626.351 867.794 558.711 906.403C491.375 945.013 410.389 964.318 315.754 964.318Z"
              fill="black"
            />
          </mask>
          <g mask="url(#mask0_6235_801)">
            <motion.rect
              x="0.000244141"
              y="0"
              width="769.008"
              height="980.877"
              fill="#1677FF"
              variants={{
                initial: {
                  opacity: 0,
                  y: -100,
                },
                animated: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial={'initial'}
              animate={controlPhoneBackground}
              transition={{ duration: 0.3, delay: 0.3 }}
            />
            <g style={{ mixBlendMode: 'multiply' }}>
              <rect x="-182" y="0.018" width="1232.97" height="587.981" />
            </g>
          </g>
          <motion.image
            id="image1_6235_801"
            width="839"
            height="805"
            x="-85"
            y="80"
            preserveAspectRatio="none"
            xlinkHref={LaptopImg}
            variants={{
              initial: {
                opacity: 0,
                x: 300,
                y: 200,
              },
              animated: {
                opacity: 1,
                x: 0,
                y: 0,
              },
            }}
            initial={'initial'}
            animate={controlPhone}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <defs>
            <pattern
              id="pattern1_6235_801"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image1_6235_801"
                transform="scale(0.0012 0.00115)"
              />
            </pattern>
          </defs>
        </svg>
        <svg
          width="1345"
          height="431"
          className="absolute right-[-1vw] bottom-[5vh] z-1 h-[79vh] w-[165vw] md:right-[2vw] md:bottom-[-5vh] md:z-0 md:h-[48.51vh] md:w-[120vw] xl:right-[0] xl:bottom-[-5vh] xl:h-[48.51vh] xl:w-[70vw]"
          viewBox="0 0 1345 431"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M4.21158 2.52057C53.77 111.509 209.609 321.355 436.495 288.831C720.103 248.176 620.427 18.0052 489.216 67.0679C320.223 130.259 553.867 490.111 707.617 568.554C977.075 710.078 1204.64 554.898 1284.73 459.618C1364.83 364.337 1350.5 367 1350.5 367"
            stroke="#C0FE5C"
            strokeWidth="8"
            variants={{
              initial: { pathLength: 0.001 },
              animated: { pathLength: 1 },
            }}
            initial={'initial'}
            animate={controlLines}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </svg>
        <svg
          width="1345"
          height="431"
          className="absolute right-[-60vw] bottom-[20vh] z-2 h-[79.51vh] w-[165vw] md:right-[-5vw] md:bottom-[35vh] md:z-0 md:h-[70.51vh] md:w-[70vw]"
          viewBox="0 0 1345 431"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M1292.8 343.632C1257.84 229.124 1130.62 0.791724 901.43 3.52941C614.944 6.95152 683.836 248.131 820.313 216.551C996.09 175.877 811.235 -211.307 668.993 -309.081C420.232 -484.45 174.421 -360.187 82.6099 -276.133C-9.20084 -192.08 5.35595 -192.856 5.35595 -192.856"
            stroke="#C0FE5C"
            strokeWidth="8"
            variants={{
              initial: { pathLength: 0.001 },
              animated: { pathLength: 1 },
            }}
            initial={'initial'}
            animate={controlLines}
            transition={{ duration: 1, ease: 'easeInOut', delay: 1 }}
          />
        </svg>
        <div className="absolute top-6 right-0 z-5 h-full w-full overflow-hidden md:top-[34vh] md:w-[60vw] xl:w-[54vw]">
          <motion.div
            className="flex h-full w-full flex-col justify-start px-1"
            variants={{
              initial: { opacity: 0 },
              animated: { opacity: 1 },
            }}
            initial={'initial'}
            animate={controlBanner}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <h1 className="text-center">
              <span className="text-[17px] font-semibold md:text-[24px] lg:text-[27px] xl:text-[34px]">
                {t('hero.title')}
              </span>
              <br />
              <span className="border-primary rounded-4xl border-4 px-4 pb-[4px] text-[20px] leading-[10px] font-semibold md:text-3xl lg:text-4xl xl:text-5xl">
                {t('hero.subtitle.start')}
              </span>
              <span className="text-[20px] font-semibold md:text-3xl lg:text-4xl xl:text-5xl">
                {t('hero.subtitle.middle')}
              </span>
              <Logo className="mt-[-5px] ml-2 inline-flex h-7 w-7 md:mt-[-10px] md:h-12 md:w-12 lg:mt-[-15px] lg:h-14 lg:w-14 xl:mt-[-20px] xl:h-17 xl:w-17" />
              <br />
              <span className="text-[17px] leading-[20px] font-semibold md:text-[24px] lg:text-[34px]">
                {t('hero.subtitle.end')}
              </span>
            </h1>
            <p className="mt-3 text-center text-xs md:mt-6 md:text-[18px] lg:mt-12 lg:text-[22px]">
              {t('hero.subtitle.schedule')}
            </p>
            <div className="relative bottom-28 mt-auto flex justify-center gap-2 md:bottom-0 md:mt-14 md:mb-4">
              <button className="bg-primary rounded-[32px] px-4 py-3 font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-400 hover:shadow-lg md:px-6 md:py-4">
                {t('hero.demo')}
              </button>
              <button className="text-primary rounded-[32px] bg-white px-4 py-3 font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:px-6 md:py-4">
                {t('hero.video')}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

export default HeroSection;
