import {motion} from "framer-motion";
import {forwardRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {Carousel, CarouselContent, CarouselItem} from "@/shared/components/ui/carousel.tsx";

interface TariffSectionProps {
    onViewportEnter: () => void;
}

const Tariffs = [
    {
        name: `tariff.tariff1.name`,
        price: `tariff.tariff1.price`,
        options: Array.from({length: 4}, (_, index) => index + 1),
    },
    {
        name: `tariff.tariff2.name`,
        price: `tariff.tariff2.price`,
        options: Array.from({length: 5}, (_, index) => index + 1),
    },
    {
        name: `tariff.tariff3.name`,
        price: `tariff.tariff3.price`,
        options: Array.from({length: 7}, (_, index) => index + 1),
    },
]


const TariffSection = forwardRef<HTMLDivElement, TariffSectionProps>(({onViewportEnter}, ref) => {
    const {t} = useTranslation("homePage");
    const [isHovered, setIsHovered] = useState<number | null>()
    const renderOptions = (tariffIndex: number) => {
        const unSelectedOptionIndexes = Array.from({length: 7}, (_, index) => index + 1).filter(option => !Tariffs[tariffIndex].options.find(o => o === option))
        return <div className="
        flex flex-col gap-2
        lg:gap-4
        ">
            {Tariffs[tariffIndex].options.map(option => (
                <div key={option} className="flex justify-start gap-2">
                    <svg className="
                    text-primary mt-[-10px] w-7 grow-0 shrink-0
                    md:w-[2.5vw] md:shrink md:grow-0
                    " width="48" height="48" viewBox="0 0 70 70"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="70" height="70" rx="35" fill="currentColor"/>
                        <path d="M50.3332 23.5L29.2498 44.5833L19.6665 35" stroke="#fff"
                              strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="
                    font-medium text-[18px]
                    3xl:text-xl
                    ">{t(`tariff.options.option${option}`)}</p>
                </div>
            ))}
            {unSelectedOptionIndexes.map(option => (
                <div key={option} className="flex justify-start gap-2">
                    <svg className="
                    text-[#E6F4FF] mt-[-10px] min-w-[2.5vw] w-7 grow shrink-0
                    md:w-[2.5vw] md:shrink md:grow-0

                    " width="48" height="48" viewBox="0 0 70 70"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="70" height="70" rx="35" fill="currentColor"/>
                        <path d="M50.3332 23.5L29.2498 44.5833L19.6665 35" stroke="#1677FF"
                              strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p className="font-medium text-xl">{t(`tariff.options.option${option}`)}</p>
                </div>
            ))}
        </div>
    }
    console.log('isHovered', isHovered)
    return (
        <motion.div className="bg-white w-full h-[calc(100vh)] overflow-hidden"
                    onViewportEnter={onViewportEnter}
                    viewport={{amount: 0.05}}
                    ref={ref}
        >
            <div className="
            relative top-[7.5vw] flex flex-col justify-center items-center gap-2
            3xl:gap-14
            ">
                <motion.p className="
                flex gap-2 mb-1
                3xl:gap-4 3xl:mb-8
                "
                          initial={{
                              opacity: 0,
                              y: 20
                          }}
                          whileInView={{
                              opacity: 1,
                              y: 0,
                          }}
                          transition={{
                              duration: 0.5,
                          }}
                          viewport={{once: true}}
                >
                    <span className="
                        font-semibold text-[17px] text-[rgba(0,0,0,0.88)
                        md:text-[30px]
                        lg:text-[34px]
                        ">
                        {t("tariff.title")}
                    </span>
                    <svg className="
                        text-tab-bg mt-[0px] w-7 h-7
                        md:w-17 md:h-17 md:mt-[-10px]
                        "
                         width="70" height="70" viewBox="0 0 70 70"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <rect width="70" height="70" rx="35" fill="currentColor"/>
                        <path d="M50.3332 23.5L29.2498 44.5833L19.6665 35" stroke="#1677FF" strokeWidth="3.5"
                              strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </motion.p>
                <div className="
                flex justify-center gap-3
                3xl:gap-6
                ">
                    {
                        window?.innerWidth > 1023 ? (
                            Tariffs.map((tariff, index) => (
                                <motion.div
                                    key={tariff.name}
                                    className="
                                bg-tab-bg w-[30.5vw] cursor-pointer rounded-3xl px-4 py-2 flex flex-col justify-start gap-3 items-center
                                3xl:gap-6 3xl:p-8
                                "
                                    onHoverStart={() => setIsHovered(index + 1)}
                                    onHoverEnd={() => setIsHovered(null)}
                                    variants={{
                                        initial: {
                                            y: 0,
                                        },
                                        notHovered: {
                                            y: 15,
                                        },
                                        hovered: {
                                            y: -15,
                                            backgroundColor: "#D0EAFF",
                                        },
                                    }}
                                    initial="initial"
                                    animate={isHovered === index + 1 ? "hovered" : isHovered ? "notHovered" : "initial"}
                                    transition={{backgroundColor: {duration: 0.5}, y: {duration: 0.3}}}
                                >
                                    <p className="
                                    grow-0 shrink py-1 px-4 rounded-[32px] bg-white font-medium text-[24px] text-[rgba(0,0,0,0.88) whitespace-nowrap
                                    3xl:text-2xl 3xl:py-3 3xl:px-6
                                ">{t(`tariff.tariff${index + 1}.name`)}</p>
                                    <p className="flex flex-col justify-center items-center">
                                    <span
                                        className="
                                        font-semibold text-3xl
                                        3xl:text-5xl
                                        ">{t(`tariff.tariff${index + 1}.price`)}</span>
                                        <span
                                            className="font-medium text-2xl text-[rgba(0,0,0,0.45)]">{t("tariff.timeline")}</span>
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        {renderOptions(index)}
                                    </div>
                                </motion.div>
                            ))) : (
                            <Carousel className="w-full max-w-sm sm:max-w-xl" opts={{loop: true}}>
                                <CarouselContent className="gap-1 ml-0">
                                    {
                                        Tariffs.map((tariff, index) => (
                                            <CarouselItem key={tariff.name}
                                                          className="min-w-0 shrink-0 grow-0 basis-[85%] md:basis-[70%] lg:basis-[60%]"
                                            >
                                                <motion.div
                                                    key={tariff.name}
                                                    className={`
                                                        w-full cursor-pointer rounded-3xl px-4 py-2 flex flex-col justify-start gap-3 items-center
                                                        3xl:gap-6 3xl:p-8
                                                        `}
                                                    onViewportEnter={() => setIsHovered(index)}
                                                    variants={{
                                                        "initial": {
                                                            backgroundColor: "#F5F5F5",
                                                        },
                                                        "animated": {
                                                            backgroundColor: "#D0EAFF",
                                                        }
                                                    }}
                                                    initial="initial"
                                                    animate={isHovered === index ? "animated" : "initial"}
                                                    transition={{duration: 0.3}}
                                                    viewport={{amount: 0.7}}
                                                >
                                                        <p className="
                                                        grow-0 shrink py-1 px-4 rounded-[32px] bg-white font-medium text-[24px] text-[rgba(0,0,0,0.88) whitespace-nowrap
                                                        3xl:text-2xl 3xl:py-3 3xl:px-6
                                                        ">
                                                            {t(`tariff.tariff${index + 1}.name`)}
                                                        </p>
                                                    <p className="flex flex-col justify-center items-center">
                                                    <span
                                                        className="
                                                        font-semibold text-3xl
                                                        3xl:text-5xl
                                                        ">{t(`tariff.tariff${index + 1}.price`)}</span>
                                                        <span
                                                            className="font-medium text-2xl text-[rgba(0,0,0,0.45)]">{t("tariff.timeline")}</span>
                                                    </p>
                                                    <div className="flex flex-col gap-4">
                                                        {renderOptions(index)}
                                                    </div>
                                                </motion.div>
                                            </CarouselItem>
                                        ))}
                                </CarouselContent>
                            </Carousel>
                        )
                    }
                </div>
            </div>
        </motion.div>
    );
});

export default TariffSection;