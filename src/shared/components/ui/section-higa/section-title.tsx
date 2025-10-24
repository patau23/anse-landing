import clsx from 'clsx';
import type { ReactNode } from 'react';

const SectionTitle = (props: { text: string | ReactNode }) => {
  return (
    <h2
      className={clsx(
        'self-stretch text-center text-[28px] leading-[34px] font-[500] tracking-[0.364px] text-white',
        'md:text-[54px] md:leading-[54px] md:font-medium md:tracking-[1px]'
      )}
    >
      {props.text}
    </h2>
  );
};

export default SectionTitle;
