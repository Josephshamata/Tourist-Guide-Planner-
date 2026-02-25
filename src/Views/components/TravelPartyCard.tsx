type TravelPartyCardProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
  showCheck?: boolean;
};

export default function TravelPartyCard({
  title,
  subtitle,
  imageUrl,
  value,
  selected,
  onSelect,
  showCheck,
}: TravelPartyCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={[
        "cursor-pointer aspect-[4/5] w-full overflow-hidden rounded-2xl transition-all text-left",
        selected
            ? "border-4 border-primary shadow-xl ring-4 ring-primary/10"
            : "border-4 border-transparent hover:border-primary/30",
        ].join(" ")}
    >
      {/* No absolute positioning: background image + overlay + content are all in normal flow */}
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="h-full w-full bg-gradient-to-b from-black/0 via-black/10 to-black/85 flex flex-col justify-between p-6">
          <div className="flex items-start justify-end">
            {selected && showCheck ? (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                <span className="material-symbols-outlined text-sm">check</span>
              </div>
            ) : (
              <div className="h-8 w-8" />
            )}
          </div>

          <div className="text-white">
            <p className="text-xl font-bold">{title}</p>
            <p className="text-sm opacity-80">{subtitle}</p>
          </div>
        </div>
      </div>
    </button>
  );
}