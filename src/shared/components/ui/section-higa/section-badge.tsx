import clsx from 'clsx';

const SectionBadge = (props: { text: string }) => {
  return (
    <span
      className={clsx(
        'inline-flex items-center justify-center gap-[10px] rounded-[.75rem] border-2 border-[var(--Default-SystemIndigo-Light,#5856D6)] px-[.75rem] py-[.5rem]',
        'md:rounded-[1rem] md:px-6 md:py-3'
      )}
    >
      <span
        className={clsx(
          'text-center text-[1rem] leading-[21px] font-[600] tracking-[-0.32px] text-[var(--Label-Color-Dark-Primary,#FFF)] uppercase',
          'md:text-[1rem] md:leading-[22px] md:font-semibold'
        )}
      >
        {props.text}
      </span>
    </span>
  );
};

export default SectionBadge;
