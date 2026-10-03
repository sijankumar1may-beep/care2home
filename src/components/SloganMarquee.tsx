const PHRASE = "Your Journey, Our Care";
const REPEAT = 6;

function SloganCopy({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0" aria-hidden={hidden ? true : undefined}>
      {Array.from({ length: REPEAT }).map((_, index) => (
        <span
          key={index}
          className="px-6 py-2 text-sm font-bold tracking-wide whitespace-nowrap md:text-base"
        >
          {PHRASE}
          <span className="mx-6 font-normal opacity-70">•</span>
        </span>
      ))}
    </div>
  );
}

export default function SloganMarquee() {
  return (
    <div
      className="overflow-hidden border-t border-blue-700 bg-blue-900 text-white"
      role="region"
      aria-label="Care2Home slogan"
    >
      <p className="sr-only">{PHRASE}</p>
      <p className="hidden py-2 text-center text-sm font-bold tracking-wide motion-reduce:block md:text-base">
        {PHRASE}
      </p>
      <div className="motion-reduce:hidden" aria-hidden="true">
        <div className="slogan-track flex w-max">
          <SloganCopy />
          <SloganCopy hidden />
        </div>
      </div>
    </div>
  );
}
