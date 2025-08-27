import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import Question from '@/shared/assets/icons/questionMark.svg?react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/shared/components/ui/accordion.tsx';

interface FaqSectionProps {
  onViewportEnter: () => void;
}

const questions = Array.from({ length: 5 }, (_, index) => index + 1).map(
  (index) => ({
    question: `faq.question${index}.question`,
    answer: `faq.question${index}.answer`,
  })
);

const FaqSection = forwardRef<HTMLDivElement, FaqSectionProps>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation();
    const [currentQuestion, setCurrentQuestion] = useState<string | undefined>(
      undefined
    );

    return (
      <motion.div
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.05 }}
        ref={ref}
        className="
          flex flex-col overflow-x-hidden overflow-y-scroll
          h-[80vh] w-full
          p-5
          bg-tab-bg
          items-center
          md:h-[100vh]
        "
      >
        <div
          className="
            flex flex-col
            w-[94.16vw]
            3xl:top-[7vw] relative top-[11.55vh] items-center justify-center
            md:top-[20vh]
          "
        >
          <p
            className="
              flex
              mb-3
              gap-4
            "
          >
            <span
              className="
                text-center text-[17px] font-semibold
                md:text-[34px]
              "
            >
              {t('faq.title')}
            </span>
            <Question
              className="
                w-7
                mt-[-0px] mb-8
                md:w-[3.65vw] md:mt-[-10px] md:mb-0
              "
            />
          </p>
          <div
            className="
              flex flex-col
              w-full
              justify-start
            "
          >
            <Accordion
              type="single"
              collapsible
              value={currentQuestion}
              onValueChange={setCurrentQuestion}
            >
              {questions.map((q) => (
                <motion.div
                  key={q.question}
                  variants={{
                    initial: {
                      backgroundColor: '#EBE6FF',
                    },
                    rotated: {
                      backgroundColor: '#fff',
                    },
                  }}
                  initial={'initial'}
                  animate={
                    currentQuestion === q.question ? 'rotated' : 'initial'
                  }
                  className="
                    mb-6 px-8 py-2
                    rounded-[64px]
                    cursor-pointer
                    3xl:p-6
                    md:px-8 md:py-1
                  "
                >
                  <AccordionItem key={q.question} value={q.question}>
                    <AccordionTrigger
                      className="
                        flex
                        p-0 pb-2
                        text-gray text-xl font-medium
                        items-center
                      "
                    >
                      <p
                        className="
                          p-0 pb-2
                          text-gray text-base font-medium
                          md:text-xl
                        "
                      >
                        {t(q.question)}
                      </p>
                      <motion.svg
                        viewBox="0 0 70 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        variants={{
                          initial: {
                            transform: 'rotate(0deg)',
                          },
                          rotated: {
                            transform: 'rotate(-45deg)',
                          },
                        }}
                        initial={'initial'}
                        animate={
                          currentQuestion === q.question ? 'rotated' : 'initial'
                        }
                        className="
                          w-8
                          shrink
                          md:w-[3.645vw] md:shrink md:grow-0
                        "
                      >
                        <rect width="70" height="70" rx="35" fill="#F5F5F5" />
                        <path
                          d="M21.5833 35H48.4166"
                          stroke="black"
                          strokeWidth="2.5"
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M35 21.584V48.4173"
                          stroke="black"
                          strokeWidth="2.5"
                          stroke-linecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </AccordionTrigger>
                    <AccordionContent
                      className="
                        text-[13px]
                        md:text-2xl
                      "
                    >
                      {t(q.answer)}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </motion.div>
    );
  }
);

export default FaqSection;
