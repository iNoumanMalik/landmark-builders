import { useState } from "react";

export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  containerClassName = "",
  loading = "lazy",
}) {
  const [imageState, setImageState] = useState({
    src,
    loaded: false,
    failed: false,
  });
  const isLoaded = imageState.src === src && imageState.loaded;
  const hasFailed = imageState.src === src && imageState.failed;

  return (
    <div
      className={`relative overflow-hidden bg-gray-200 ${containerClassName}`}
    >
      {!isLoaded && !hasFailed && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-gray-200"
        />
      )}
      {hasFailed && (
        <div
          role="img"
          aria-label={alt ? `${alt} unavailable` : "Image unavailable"}
          className="absolute inset-0 grid place-items-center text-sm text-gray-500"
        >
          Image unavailable
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setImageState({ src, loaded: true, failed: false })}
        onError={() => setImageState({ src, loaded: false, failed: true })}
        className={`${className} transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
