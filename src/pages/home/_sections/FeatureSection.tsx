import {forwardRef} from 'react';
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";
import Pc from "@/shared/assets/icons/pc.svg?react";
import {Carousel, CarouselContent, CarouselItem} from "@/shared/components/ui/carousel.tsx";

interface FeatureSectionProps {
    onViewportEnter: () => void;
}

const FeatureItems = [1, 2, 3, 4, 5, 6].map((i) => ({
    title: `feature.panels.panel${i}.title`,
    text: `feature.panels.panel${i}.text`,
}))

const FeatureSection = forwardRef<HTMLDivElement, FeatureSectionProps>(({onViewportEnter}, ref) => {
    const {t} = useTranslation("homePage");


    return (
        <motion.div className="bg-tab-bg relative w-full h-[70vh] md:h-[100vh]"
                    onViewportEnter={onViewportEnter}
                    viewport={{amount: 0.05}}
                    ref={ref}
        >
            <div className="
            absolute top-[8vh] w-full flex flex-col justify-center items-center
            lg:top-[20vh]
            xl:top-[11vh]
            2xl:top-[12vh]
            ">
                <p className="
                flex gap-0 justify-center items-start px-4 text-center mb-10
                lg:gap-4 lg:px-0 xl:mb-4
                ">
                    <span className="
                    text-[17px] font-semibold w-[75%]
                    md:text-[34px] md:w-auto
                    ">{t("feature.title")}</span>
                    <Pc className="
                    mt-[0px] w-8 h-7
                    md:w-[70px] md:h-[70px] md:mt-[-10px]
                    "/>
                </p>
                <div className="
                flex flex-col justify-center gap-4
                xl:gap-2
                ">
                    {
                        window?.innerWidth >= 1024 ? (
                            FeatureItems.map((item, index) => (
                                <motion.div key={item.text} className="
                                flex justify-start items-center gap-2 p-2
                                xl:gap-2 xl:p-2
                                3xl:gap-4 3xl:p-4
                                "
                                            variants={{
                                                "initial": {
                                                    opacity: 0
                                                },
                                                "animated": {
                                                    opacity: 1
                                                }
                                            }}
                                            initial={"initial"}
                                            whileInView={"animated"}
                                            transition={{delay: (index + 1) / 15, duration: 0.3}}
                                            viewport={{once: true}}
                                >
                                    <p className="
                                    text-center leading-6 py-3 px-2 bg-[#C0FE5C] rounded-4xl text-[22px] font-medium mr-2 whitespace-nowrap
                                    xl:py-5 xl:px-4
                                    ">
                                        0{index + 1} /
                                    </p>
                                    <p className="
                                    leading-6 text-[24px] font-medium shrink-0 text-left
                                    xl:text-2xl
                                    ">{t(item.title)}</p>
                                    <p className="
                                    text-center leading-6 text-[16px] text-[rgba(0,0,0,0.45)] grow-0
                                    xl:text-xl
                                    ">{t(item.text)}</p>
                                    <button
                                        className="
                                        ml-auto px-3 py-2 bg-primary text-white rounded-4xl cursor-not-allowed shrink-0
                                        xl:px-6 xl:py-4
                                        "
                                        title="В данный момент недоступно">{t("feature.video")}</button>
                                </motion.div>
                            ))

                        ) : (
                            <Carousel className="w-full max-w-sm sm:max-w-3xl" opts={{loop: true}}>
                                <CarouselContent>
                                    {
                                        FeatureItems.map((item, index) => (
                                            <CarouselItem key={index}>
                                                <div key={item.text} className="bg-white flex flex-col justify-center items-center gap-4 px-2 py-6 rounded-[12px]"                                            >
                                                    <p className="text-center leading-6 py-3 px-2 bg-[#C0FE5C] rounded-4xl text-[17px] font-medium mr-2">0{index + 1} /</p>
                                                    <p className="text-center leading-6 text-[16px] font-medium">{t(item.title)}</p>
                                                    <p className="text-center leading-6 text-xs text-[rgba(0,0,0,0.45)]">{t(item.text)}</p>
                                                    <button
                                                        className="text-base px-4 py-3 bg-primary text-white rounded-4xl cursor-not-allowed"
                                                        title="В данный момент недоступно">{t("feature.video")}</button>
                                                </div>
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

export default FeatureSection;