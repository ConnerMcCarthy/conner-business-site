"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ImageWithFallbackProps = ImageProps & {
  fallbackClassName?: string;
};

export default function ImageWithFallback({
  alt,
  fallbackClassName = "",
  className,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-full w-full overflow-hidden">
      {!hasError ? (
        <Image
          {...props}
          alt={alt}
          className={className}
          onError={() => setHasError(true)}
        />
      ) : (
        <div
          aria-label={alt}
          role="img"
          className={`h-full w-full bg-gradient-to-br from-slate-300 via-slate-200 to-slate-100 ${fallbackClassName}`}
        />
      )}
    </div>
  );
}
