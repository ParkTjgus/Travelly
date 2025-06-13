const StepHeadline = (props: { headline: string; body?: string }) => {
  return (
    <section>
      <h1 className="text-[32px] font-bold ">{props.headline}</h1>
      {props.body && (
        <p className="text-[20px] font-normal mt-4">{props.body}</p>
      )}
    </section>
  );
};

export default StepHeadline;
