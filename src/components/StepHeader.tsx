type StepHeaderProps = {
  stepLabel: string;
  title: string;
  progressPercent: number; // 0..100
};

export default function StepHeader({
  stepLabel,
  title,
  progressPercent,
}: StepHeaderProps) {
  return (
    <div className="px-6 py-6 sm:px-8 border-b border-stone-200 dark:border-slate-800">
      <div className="flex items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            {stepLabel}
          </span>
          <h1 className="mt-2 font-display text-4xl sm:text-5xl text-black">
            {title}
          </h1>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">
            {progressPercent}%
          </span>
        </div>
      </div>

      <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-stone-200 dark:bg-slate-200">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
    </div>
  );
}