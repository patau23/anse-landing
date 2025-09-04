const SectionBadge = (props: { text: string }) => {
  return (
    <span className="inline-flex items-center justify-center gap-[10px] rounded-[.75rem] border-2 border-[var(--Default-SystemIndigo-Light,#5856D6)] px-[.75rem] py-[.5rem] md:rounded-[1rem] md:px-6 md:py-3">
      <span className="text-center text-[1rem] leading-[21px] font-[600] tracking-[-0.32px] text-[var(--Label-Color-Dark-Primary,#FFF)] uppercase">
        {props.text}
      </span>
    </span>
  );
};

export default SectionBadge;
