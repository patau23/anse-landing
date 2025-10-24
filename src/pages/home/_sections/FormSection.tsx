import { motion } from 'framer-motion';
import { forwardRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm, type SubmitHandler } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Rocket from '@/shared/assets/icons/rocket.svg?react';
import Whatsapp from '@/shared/assets/icons/whatsapp.svg?react';
import Instagram from '@/shared/assets/icons/instagram.svg?react';
import Linkedin from '@/shared/assets/icons/linkedin.svg?react';

interface FaqSectionProps {
  onViewportEnter: () => void;
}

interface IFormInput {
  name: string;
  orgName: string;
  email: string;
  phone: string;
}

// +1 234 567 8901
const schema = yup
  .object({
    name: yup.string().required('form.requiredFieldError').max(128).min(2),
    orgName: yup.string().required('form.requiredFieldError').max(128).min(2),
    email: yup.string().required('form.requiredFieldError').max(128).min(2),
    phone: yup.string().required('form.requiredFieldError').max(128).min(2),
  })
  .required();

const FormSection = forwardRef<HTMLDivElement, FaqSectionProps>(
  ({ onViewportEnter }, ref) => {
    const { t } = useTranslation('homePage');
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
      try {
        // TODO: url into env vars
        setIsLoading(true);
        const url = import.meta.env.VITE_FORM_URL;
        await fetch(url, {
          method: 'POST',
          body: new URLSearchParams({
            Email: data.email,
            Phone: data.phone,
            Name: data.name,
            Organization: data.orgName,
          }),
        });
        alert('Запрос успешно отправлен');
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    };
    return (
      <motion.section
        className="bg-tab-bg relative flex h-[calc(100vh)] w-full items-center justify-center"
        onViewportEnter={onViewportEnter}
        viewport={{ amount: 0.05 }}
        ref={ref}
      >
        <div className="relative grid h-full w-[94.16vw] grid-cols-none grid-rows-2 items-center justify-center justify-items-center gap-1 lg:top-[5vh] lg:h-auto lg:grid-cols-2 lg:grid-rows-none lg:gap-6">
          <div className="flex w-[80%] flex-col gap-4 lg:w-full">
            <h3 className="flex justify-center gap-4">
              <span className="text-center text-[17px] font-semibold lg:text-left lg:text-[34px]">
                {t('form.title')}
              </span>
              <Rocket className="h-7 w-7 lg:mt-[-10px] lg:h-[3.65vw] lg:w-[3.65vw]" />
            </h3>
            <p className="flex text-center text-xs font-medium lg:text-left lg:text-xl">
              {t('form.subtitle')}
            </p>
            <div className="mt-5 flex items-end justify-center gap-3 lg:mt-26 lg:justify-start">
              <Whatsapp className="h-9lg:w-14 w-9 cursor-pointer lg:h-14" />
              <Linkedin className="h-9lg:w-14 w-9 cursor-pointer lg:h-14" />
              <Instagram className="h-9lg:w-14 w-9 cursor-pointer lg:h-14" />
            </div>
          </div>
          <svg
            className="absolute top-[15.75vh] left-[-15.38vw] w-[47.18vw] scale-x-[-1] rotate-[-150deg] lg:top-[-1vw] lg:left-[34.56vw] lg:w-[25.46vw] lg:scale-x-[1] lg:rotate-0"
            width="497"
            height="209"
            viewBox="0 0 497 209"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M213.172 54.218L211.589 57.8914L213.172 54.218ZM177.26 97.9845L174.062 100.387L177.26 97.9845ZM493.079 83.8733C495.288 83.8297 497.043 82.0037 496.999 79.795L496.288 43.8021C496.244 41.5934 494.418 39.8383 492.209 39.8819C490.001 39.9256 488.245 41.7515 488.289 43.9602L488.922 75.954L456.928 76.5866C454.719 76.6302 452.964 78.4562 453.008 80.6649C453.051 82.8736 454.877 84.6287 457.086 84.585L493.079 83.8733ZM4 206L7.35724 208.175C23.7421 182.879 60.3838 138.585 100.546 103.97C120.627 86.6624 141.406 71.9359 160.816 63.1764C180.318 54.3757 197.716 51.9132 211.589 57.8914L213.172 54.218L214.755 50.5445C197.83 43.2513 177.832 46.7208 157.526 55.8845C137.128 65.0893 115.686 80.3596 95.3232 97.9102C54.5957 133.012 17.4486 177.88 0.642764 203.825L4 206ZM213.172 54.218L211.589 57.8914C224.54 63.4726 229.859 70.8182 231.13 77.5077C232.426 84.3316 229.74 91.6283 224.334 97.4797C218.937 103.322 211.205 107.279 203.303 107.583C195.579 107.881 187.319 104.714 180.458 95.5819L177.26 97.9845L174.062 100.387C182.427 111.521 193.147 115.981 203.611 115.578C213.895 115.181 223.557 110.11 230.21 102.908C236.855 95.7161 240.877 85.9537 238.989 76.0149C237.076 65.9417 229.32 56.821 214.755 50.5445L213.172 54.218ZM177.26 97.9845L180.458 95.5819C176.044 89.706 174.817 83.0903 176.364 76.0165C177.939 68.8134 182.44 61.0022 189.751 53.2392C204.372 37.7162 229.511 23.172 261.1 14.943C324.108 -1.47056 411.907 7.47381 490.228 82.7579L493 79.8741L495.772 76.9903C415.291 -0.369976 324.569 -9.85773 259.083 7.20135C226.426 15.7087 199.824 30.877 183.928 47.7542C175.981 56.1913 170.529 65.2522 168.549 74.307C166.54 83.4912 168.152 92.5193 174.062 100.387L177.26 97.9845Z"
              fill="#C0FE5C"
              variants={{
                initial: { pathLength: 0.001 },
                animated: { pathLength: 1 },
              }}
              initial={'initial'}
              whileInView={'animated'}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
            />
          </svg>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-20 flex w-full flex-col gap-6 rounded-2xl bg-white p-3 lg:mb-0 lg:w-full lg:rounded-4xl lg:p-14"
          >
            <div className="z-3 flex flex-col gap-2">
              <label
                className="text-xs font-medium text-[#00000040] lg:text-xl"
                htmlFor="name"
              >
                {t('form.labels.name')}
              </label>
              <input
                id="name"
                className="bg-tab-bg rounded-[64px] px-4 py-3 text-base leading-[120%] lg:px-6 lg:py-4 lg:text-[22px]"
                {...register('name')}
              />
              {errors?.name && <span>{t(errors.name.message!)}</span>}
            </div>
            <div className="z-3 flex flex-col gap-2">
              <label
                className="text-xs font-medium text-[#00000040] lg:text-xl"
                htmlFor="orgName"
              >
                {t('form.labels.orgName')}
              </label>
              <input
                id="orgName"
                className="bg-tab-bg rounded-[64px] px-4 py-3 text-base leading-[120%] lg:px-6 lg:py-4 lg:text-[22px]"
                {...register('orgName')}
              />
              {errors?.orgName && <span>{t(errors.orgName.message!)}</span>}
            </div>
            <div className="z-3 flex flex-col gap-2">
              <label
                className="text-xs font-medium text-[#00000040] lg:text-xl"
                htmlFor="email"
              >
                {t('form.labels.email')}
              </label>
              <input
                id="email"
                className="bg-tab-bg rounded-[64px] px-4 py-3 text-base leading-[120%] lg:px-6 lg:py-4 lg:text-[22px]"
                {...register('email')}
              />
              {errors?.email && <span>{t(errors.email.message!)}</span>}
            </div>
            <div className="z-3 flex flex-col gap-2">
              <label
                className="text-xs font-medium text-[#00000040] lg:text-xl"
                htmlFor="phone"
              >
                {t('form.labels.phone')}
              </label>
              <input
                id="phone"
                className="bg-tab-bg rounded-[64px] px-4 py-3 text-base leading-[120%] lg:px-6 lg:py-4 lg:text-[22px]"
                {...register('phone')}
              />
              {errors?.phone && <span>{t(errors.phone.message!)}</span>}
            </div>
            <button
              type="submit"
              className={`${isLoading ? 'bg-blue-300' : 'bg-primary'} w-full rounded-4xl py-3 text-base text-white transition-all lg:py-4 lg:text-[17px]`}
            >
              {isLoading ? (
                <>{t('form.demoButtonLoading')}</>
              ) : (
                <>{t('form.demoButton')}</>
              )}
            </button>
          </form>
        </div>
      </motion.section>
    );
  }
);

export default FormSection;
