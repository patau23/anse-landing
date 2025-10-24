import clsx from 'clsx';

const SectionDescription = (props: { text: string }) => {
  return (
    <p
      className={clsx(
        'self-stretch text-center text-[13px] leading-[18px] font-normal tracking-[-0.078px] text-white [font-style:normal]',
        'md:mt-6 md:text-[22px] md:leading-[1.28] md:tracking-[0.35px]'
      )}
    >
      {props.text}
    </p>
  );
};

export default SectionDescription;
