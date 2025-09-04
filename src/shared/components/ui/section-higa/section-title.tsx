import type { ReactNode } from 'react';

const SectionTitle = (props: { text: string | ReactNode }) => {
  return (
    <h2 className="self-stretch text-center text-[28px] leading-[34px] font-[500] tracking-[0.364px] text-white">
      {props.text}
    </h2>
  );
};

export default SectionTitle;
