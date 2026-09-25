import { cn } from "@/lib/utils";

type StudioLogoProps = {
  className?: string;
  alt?: string;
};

export function StudioLogo({ className, alt = "Habibi Studios" }: StudioLogoProps) {
  return (
    <img
      src="/brand/logo.jpg"
      alt={alt}
      className={cn("size-9 rounded-md object-cover", className)}
    />
  );
}
