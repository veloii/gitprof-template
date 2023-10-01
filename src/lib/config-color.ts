export function getBgColor(color?: string | null | undefined): string {
  if (color === "accent") return "bg-accent-600 text-white";
  if (color === "primary") return "bg-primary-600 text-white";
  if (color === "neutral") return "bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white";
  if (color === "gradient") return "bg-gradient-to-r from-accent-600 to-primary-600 text-white";

  return "bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white";
}