type NavbarProps = {
  onSave?: () => void;
  onClose?: () => void;
};

export default function Navbar({ onSave, onClose }: NavbarProps) {
  return (
    <header className="w-full px-6 py-5 lg:px-12 2xl:px-20 flex items-center justify-between border-b border-stone-200/60 dark:border-slate-800/60 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-primary">
        </div>
        <span className="text-2xl font-bold tracking-tight text-primary">
          961.
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onSave}
          className="rounded-full border border-primary px-6 py-2 font-medium text-primary transition-all hover:bg-primary hover:text-white cursor-pointer"
        >
          Save Progress
        </button>

        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 dark:bg-slate-100 cursor-pointer"
          aria-label="Close"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </header>
  );
}