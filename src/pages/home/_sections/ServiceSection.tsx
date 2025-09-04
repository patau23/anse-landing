import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import Guard from '@/shared/assets/icons/guard.svg?react';
import Kaspi from '@/shared/assets/icons/kaspi.svg?react';
import HalykBank from '@/shared/assets/icons/halykBank.svg?react';
import AppStore from '@/shared/assets/icons/appStore.svg?react';
import GooglePlay from '@/shared/assets/icons/googlePlay.svg?react';
import Egov from '@/shared/assets/icons/egov.svg?react';
import C1 from '@/shared/assets/icons/1c.svg?react';

import Tower from '@/shared/assets/icons/tower.svg?react';
import Time from '@/shared/assets/icons/time.svg?react';
import Web from '@/shared/assets/icons/web.svg?react';
import Document from '@/shared/assets/icons/document.svg?react';
// import Calendar from '@/shared/assets/icons/calendar.svg?react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/shared/components/ui/carousel.tsx';

interface ServiceSectionProps {
  onViewportEnter: () => void;
}

const Services = [
  {
    title: 'Kaspi',
    logo: <Kaspi />,
  },
  {
    title: 'HalykBank',
    logo: <HalykBank />,
  },
  {
    title: 'AppStore',
    logo: <AppStore />,
  },
  {
    title: 'GooglePlay',
    logo: <GooglePlay />,
  },
  {
    title: 'C1',
    logo: <C1 />,
  },
  {
    title: 'Egov',
    logo: <Egov />,
  },
];

const ServiceSection = forwardRef<HTMLDivElement, ServiceSectionProps>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');
    return (
      <motion.div
        className="bg-tab-bg relative h-[80vh] w-full md:h-[100vh]"
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.05 }}
        ref={ref}
      >
        <div className="absolute top-[0.13vh] flex w-full flex-col items-center justify-center md:top-[12.13vh]">
          <p className="flex w-[80%] items-start justify-center gap-4 text-center lg:w-auto lg:items-center lg:text-left">
            <span className="text-[17px] font-semibold text-black md:text-[25px] lg:text-[34px]">
              {t('service.title')}
            </span>
            <Guard className="h-7 w-13 md:h-17 md:w-17" />
          </p>
          <div className="my-6 mb-4 w-full md:mt-2 md:grid md:grid-cols-6 md:justify-items-center">
            {window?.innerWidth > 767 ? (
              Services.map((s) => (
                <div
                  key={s.title}
                  className="flex w-full justify-center rounded-[130px] bg-white px-3 py-6"
                >
                  {s.logo}
                </div>
              ))
            ) : (
              <Carousel
                className="max-w-2xl"
                opts={{ loop: true, slidesToScroll: 2 }}
              >
                <CarouselContent>
                  {Services.map((s) => (
                    <CarouselItem
                      key={s.title}
                      className="basis-[25%] md:basis-[12.5%]"
                    >
                      <div
                        key={s.title}
                        className="flex w-full justify-center rounded-[130px] bg-white px-4 py-2"
                      >
                        {s.logo}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            )}
          </div>
          <div className="relative h-[103.8vw] w-[91.8vw] overflow-hidden rounded-[20px] bg-[#BAC4FF] md:h-[31.25vw] md:w-[94.16vw]">
            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                  y: 20,
                },
                animated: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial={'initial'}
              whileInView={'animated'}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="relative top-[39%] left-[1.88%] z-1 inline-flex flex-col gap-[0.442%] rounded-[16px] bg-white px-[3.35%] py-[2%] md:top-[27.67%] md:left-[1.88%] md:px-[1.77%] md:py-[0.85%]"
            >
              <p className="text-[3.34vw] font-medium md:text-[1.46vw]">
                {t('service.pros.pro1.text')}
              </p>
              <Tower className="absolute top-[-100%] right-0 w-[8.2vw] md:top-[-57%] md:w-[2.92vw]" />
            </motion.div>
            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                  y: 20,
                },
                animated: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial={'initial'}
              whileInView={'animated'}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
              className="absolute top-[87.16%] left-[8.37%] z-1 inline-flex flex-col gap-[0.442%] rounded-[16px] bg-white px-[3.35%] py-[2%] md:top-[55.83%] md:left-[3.32%] md:px-[1.77%] md:py-[0.85%]"
            >
              <p className="text-[3.34vw] font-medium md:text-[1.46vw]">
                {t('service.pros.pro2.text')}
              </p>
              <Tower className="absolute top-[-100%] right-0 w-[8.2vw] md:w-[2.92vw]" />
            </motion.div>
            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                  y: 20,
                },
                animated: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial={'initial'}
              whileInView={'animated'}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute top-[5.43%] left-[5.02%] z-1 inline-flex flex-col gap-[0.442%] rounded-[16px] bg-white px-[3.35%] py-[2%] md:top-[27.83%] md:left-[34.07%] md:px-3 md:py-2 lg:px-6 lg:py-4"
            >
              <p className="text-gray text-[3.07vw] font-normal md:text-[1.04vw]">
                {t('service.pros.pro3.title')}
              </p>
              <p className="text-[3.34vw] font-medium md:text-[1.46vw]">
                {t('service.pros.pro3.text')}
              </p>
              <Time className="absolute top-[-37%] right-0 w-[8.2vw] md:w-[2.92vw]" />
            </motion.div>
            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                  y: 20,
                },
                animated: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial={'initial'}
              whileInView={'animated'}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute top-[21%] left-[50.83%] z-1 inline-flex flex-col gap-[0.442%] rounded-[16px] bg-white px-[3.35%] py-[2%] md:top-[48.5%] md:left-[52.32%] md:px-3 md:py-2 lg:px-6 lg:py-4"
            >
              <p className="text-gray text-[3.07vw] font-normal md:text-[1.04vw]">
                {t('service.pros.pro4.title')}
              </p>
              <p className="text-[3.34vw] font-medium md:text-[1.46vw]">
                {t('service.pros.pro4.text')}
              </p>
              <Web className="absolute top-[-70%] right-0 w-[8.2vw] md:top-[-37%] md:w-[2.92vw]" />
            </motion.div>
            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                  y: 20,
                },
                animated: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial={'initial'}
              whileInView={'animated'}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute top-[53.08%] left-[17.04%] z-1 inline-flex flex-col gap-[0.442%] rounded-[16px] bg-white px-[3.35%] py-[2%] md:top-[25.83%] md:left-[62.22%] md:px-3 md:py-2 lg:px-6 lg:py-4"
            >
              <p className="text-[3.34vw] font-medium md:text-[1.46vw]">
                {t('service.pros.pro5.text')}
              </p>
              <Document className="absolute top-[-100%] right-0 w-[8.2vw] md:top-[-57%] md:w-[2.92vw]" />
            </motion.div>
            <motion.div
              variants={{
                initial: {
                  opacity: 0,
                  y: 20,
                },
                animated: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial={'initial'}
              whileInView={'animated'}
              transition={{ duration: 0.3, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute top-[68%] left-[4.47%] z-1 inline-flex flex-col gap-[0.442%] rounded-[16px] bg-white px-[3.35%] py-[2%] md:top-[55.67%] md:left-[73.23%] md:px-3 md:py-2 lg:px-6 lg:py-4"
            >
              <p className="text-gray text-[3.07vw] font-normal md:text-[1.04vw]">
                {t('service.pros.pro6.title')}
              </p>
              <p className="text-[3.34vw] font-medium md:text-[1.46vw]">
                {t('service.pros.pro6.text')}
              </p>
              {/* <Calendar className="absolute top-[-70%] right-0 w-[8.2vw] md:top-[-37%] md:w-[2.92vw]" /> */}
            </motion.div>
            <div className="absolute right-[-65.6vw] bottom-[10.4%] flex h-[91.54vw] w-[216.7vw] justify-end md:right-[-2.6vw] md:bottom-[3vw] md:h-auto md:w-full">
              <svg
                className="w-full md:w-[85%]"
                viewBox="0 0 1505 532"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M151.999 149.5C174.833 125.5 231.099 87.2511 344.999 67.4997C587 25.5346 475.686 156.689 448.499 106C423 58.4552 608 -81.0001 700.5 68.9998C776.314 191.942 428 299 403.499 318C364.999 343.5 384 406 438.499 389C493.441 371.862 454.499 233.5 172.499 241C-109.501 248.5 -82.5 531 553.999 531C825 531 826.5 389 772 389C717.5 389 733.5 462 869.5 496.5C1005.5 531 1507 488 1507 308.5C1507 129 1096.04 88.2008 1071.5 240C1034 472 1236 412 1264 355.5C1292 299 1221.5 137.5 936.5 223C907.5 230.833 846.4 256.3 834 295.5"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray="4 8"
                  variants={{
                    initial: { strokeDashoffset: 100 },
                    animated: { strokeDashoffset: 0 },
                  }}
                  initial={'initial'}
                  whileInView={'animated'}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
);

export default ServiceSection;
