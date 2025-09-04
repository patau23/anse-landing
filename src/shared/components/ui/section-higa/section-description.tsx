const SectionDescription = (props: { text: string }) => {
  return (
    <p className="self-stretch text-center text-[13px] leading-[18px] font-normal tracking-[-0.078px] text-white [font-style:normal]">
      {props.text}
    </p>
  );
};

export default SectionDescription;
