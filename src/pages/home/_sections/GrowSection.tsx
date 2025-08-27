import {forwardRef} from 'react';
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

import Grow from '@/shared/assets/icons/grow.svg?react'

interface GrowSectionProps {
    onViewportEnter: () => void;
}

const GrowItems = [1, 2, 3].map((i) => ({
    label: {
        title: `grow.cards.card${i}.label.title`,
        text: `grow.cards.card${i}.label.text`,
    },
    value: {
        title: `grow.cards.card${i}.value.title`,
        text: `grow.cards.card${i}.value.text`,
        tip: `grow.cards.card${i}.value.tip`,
    }
}))


const GrowSection = forwardRef<HTMLDivElement, GrowSectionProps>(({onViewportEnter}, ref) => {
    const {t} = useTranslation("homePage");
    console.log('window.innerWidth', window.innerWidth)
    console.log('window.innerHeight', window.innerHeight)

    return (
        <motion.section
            ref={ref}
            className="
            relative bg-body-bg h-[85vh] md:h-[90vh] lg:h-[calc(100vh)] overflow-hidden flex flex-col items-center justify-center
            "
            onViewportEnter={onViewportEnter}
            viewport={{amount: 0.005}}
        >
            <div className="
                absolute top-[10vh] px-4 flex flex-col justify-center mx-auto
                md:px-0 md:top-[20vh]
                lg:w-full
            ">
                <p className="flex justify-center mb-6
                    font-semibold px-9 text-center
                    md:px-0 md:mb-14
                "><span
                    className="
                    font-semibold text-[17px]
                    md:text-3xl
                    ">{t("grow.title")}</span><Grow className="
                     w-12 h-12
                    md:w-12 md:h-12 md:mt-[-15px]
                    "/></p>
                <div className="flex flex-col items-center justify-center gap-6">
                    {GrowItems.map(item => (
                        <div key={item.label.text} className="
                        flex justify-center items-center flex-col w-full
                        lg:flex-row lg:w-auto
                        ">
                            <div
                                className="
                                w-full bg-white p-[1.25vw] rounded-[16px] flex flex-col justify-center text-center gap-[1.25vw] z-1
                                lg:w-[46vw]
                                ">
                                <p className="
                                text-base font-medium
                                md:text-2xl
                                ">{t(item.label.title)}</p>
                                <p className="
                                text-xs font-normal
                                md:text-xl
                                ">{t(item.label.text)}</p>
                            </div>
                            <motion.svg className="
                            mx-[-25px] z-0 rotate-90 lg:rotate-0
                            w-8 h-8
                            lg:w-[70px] lg:h-[70px]
                            " viewBox="0 0 70 70"
                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                        whileInView={{
                                            x: [-100, 30, 0],
                                            zIndex: [0, 0, 1]
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            times: [0, 0.5, 1]
                                        }}
                                        viewport={{once: true}}
                            >
                                <rect width="70" height="70" rx="35" fill="#E6F4FF"/>
                                <path d="M21.584 35H48.4173" stroke="black" strokeWidth="2.5" strokeLinecap="round"
                                      strokeLinejoin="round"/>
                                <path d="M35 21.5834L48.4167 35L35 48.4167" stroke="black" strokeWidth="2.5"
                                      strokeLinecap="round" strokeLinejoin="round"/>
                            </motion.svg>

                            <motion.div
                                className="
                                w-full bg-[#C7EBFF] p-[1.25vw] rounded-[16px] flex flex-col justify-center text-center gap-[1.25vw] z-0
                                lg:w-[46vw]
                                "
                                variants={{
                                    initial: {
                                        x: "-100%",
                                        backgroundColor: "#fff",
                                    },
                                    animated: {
                                        x: 0,
                                        y: 0,
                                        backgroundColor: "#C7EBFF",
                                    },
                                    initialMobile: {
                                        y: "-100%",
                                        backgroundColor: "#fff",
                                    }
                                }}
                                initial={window.innerWidth > 1023 ? "initial" : "initialMobile"}
                                whileInView={"animated"}
                                viewport={{once: true}}
                                transition={{
                                    backgroundColor: {duration: 0.8, ease: "easeIn"},
                                    x: {duration: 0.8, ease: "easeInOut"}
                                }}
                            >
                                <p className="
                                text-base font-medium
                                md:text-[22px]
                                xl:text-2xl
                                ">{t(item.value.title)}
                                    <span className="
                                    text-[11px] ml-2 px-2 py-1 bg-[#C0FE5C] rounded-4xl
                                    md:text-[22px]
                                    ">{t(item.value.tip)}</span>
                                </p>
                                <p className="
                                text-xs font-normal
                                md:text-xl
                                ">{t(item.value.text)}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
});

export default GrowSection;