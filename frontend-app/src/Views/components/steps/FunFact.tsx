type FunFactProps = {
  title?: string;
  description: string;
  linkText?: string;
  linkHref?: string;
};

export default function FunFact({
  title = "Did You Know?",
  description,
  linkText,
  linkHref = "#",
}: FunFactProps) {
  return (
    <div className="bg-primary/5 rounded-xl border border-primary/10 p-6 mb-24">
      <div className="flex items-start gap-4">
        
        {/* ICON */}
        <div className="bg-primary/10 p-3 rounded-full flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">
            lightbulb
          </span>
        </div>

        {/* CONTENT */}
        <div>
          <h4 className="text-primary font-bold text-lg mb-1">
            {title}
          </h4>

          <p className="text-primary/80 leading-relaxed max-w-2xl">
            {description}
          </p>

          {linkText && (
            <a
              href={linkHref}
              className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-primary border-b border-primary/30 hover:border-primary transition-colors"
            >
              {linkText}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}