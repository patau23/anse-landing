import {type FC, useState, memo} from 'react';
import {motion} from "framer-motion";
import type {InfiniteCardItem} from "@/shared/components/ui/infinite-moving-cards.tsx";
import {useTranslation} from "react-i18next";
import {AnimatePresence} from "motion/react";

interface InfiniteMovingCardProps {
    item: InfiniteCardItem
    className?: boolean
}

const InfiniteMovingServiceCard: FC<InfiniteMovingCardProps> = ({item, className = ""}) => {
    const [isHovered, setIsHovered] = useState(false);
    const {t} = useTranslation()


    return (
        <motion.li
            className={`
            relative max-w-full h-[40.72vw] bg-white shrink-0 rounded-2xl border border-b-0 border-zinc-200 p-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]
            lg:h-[45vw]
            xl:h-[35.72vw]
            3xl:h-[30.72vw]
            list-none    
            ${className}
            `}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            variants={{
                "collapsed": {
                    width: "17.6vw"
                },
                "revealed": {
                    width: "46.45vw"
                },
            }}
            initial={"collapsed"}
            animate={isHovered ? "revealed" : "collapsed"}
        >
            <div className="flex flex-col justify-start h-full">
                <div
                    aria-hidden="true"
                    className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <motion.div
                    className="flex"
                    variants={{
                        collapsed: {
                            flexDirection: "column"
                        },
                        revealed: {
                            flexDirection: "row"
                        },
                    }}
                    initial={"collapsed"}
                    animate={isHovered ? "revealed" : "collapsed"}
                >
                  <span
                      className="relative grow-0 inline-block bg-tab-bg z-20 text-xl leading-[100%] font-medium text-black px-6 py-3 rounded-[32px] dark:text-gray-100 mr-2 mb-2">
                  {item.city}
                  </span>
                    <span
                        className="relative grow-0 inline-block bg-tab-bg z-20 text-xl leading-[100%] font-medium text-success px-6 py-3 rounded-[32px] dark:text-gray-100">
                  {item.boost}
                  </span>
                </motion.div>
                <motion.hr
                    className="h-1 my-8"
                    variants={{
                        hidden: {width: 0},
                        visible: {width: "100%"},
                    }}
                    initial="hidden"
                    animate={isHovered ? "visible" : "hidden"}
                    transition={{duration: 0.3}}
                />
                <AnimatePresence>
                    {
                        isHovered && (
                            <motion.div
                                variants={{
                                    collapsed: {
                                        visibility: 0,
                                        y: 20,
                                    },
                                    revealed: {
                                        visibility: 1,
                                        y: 0,
                                    },
                                }}
                                initial="collapsed"
                                animate={isHovered ? "revealed" : "collapsed"}
                                transition={{delay: 0.1}}
                            >
                                <p className="
                                text-[rgba(0,0,0,0.45)] font-medium text-[16px]
                                lg:text-[18px]
                                xl:text-[20px]
                                ">{t("clinics.card.before")}</p>
                                <p className="
                                text-[22px] font-medium
                                lg:text-[22px]
                                xl:text-[24px]
                                2xl:text-2xl
                                ">{item.before}</p>
                                <p className="
                                text-[rgba(0,0,0,0.45)] font-medium text-[16px]
                                lg:text-[18px]
                                xl:text-[20px]
                                ">{t("clinics.card.after")}</p>
                                <p className="
                                text-[22px] font-medium
                                lg:text-[22px]
                                xl:text-[24px]
                                2xl:text-2xl
                                ">{item.after}</p>
                            </motion.div>
                        )
                    }
                </AnimatePresence>

                <div className="relative z-20 mt-auto flex flex-col items-center">
                    <motion.hr
                        className="h-1 my-4"
                        variants={{
                            hidden: {width: 0},
                            visible: {width: "100%"},
                        }}
                        initial="hidden"
                        animate={isHovered ? "visible" : "hidden"}
                        transition={{duration: 0.3}}
                    />
                    <motion.img src={item.icon}
                                alt=""
                                variants={{
                                    collapsed: {
                                        width: "65%",
                                    },
                                    revealed: {
                                        width: "50%",
                                    },
                                }}
                                initial="collapsed"
                                animate={isHovered ? "revealed" : "collapsed"}
                    />
                </div>
            </div>
        </motion.li>
    );
};

export default memo(InfiniteMovingServiceCard);