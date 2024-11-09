import Globe from "@/components/ui/globe";
import { cn } from "@/lib/utils";

export function GlobeDemo({className}: {className?: string}) {
  return (
    <div className={cn("relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-orange-800 px-40 pb-40 pt-8 md:pb-60 md:shadow-xl z-0", className)}>
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        jhhhh
      </span>
      <Globe className="top-28 w-full" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}