import { motion } from "framer-motion";
import ImageWithSkeleton from "./ImageWithSkeleton";

const MotionDiv = motion.div;

export default function ProjectGallery({ images = [] }) {
  const items = images.length
    ? images
    : Array.from({ length: 8 }, (_, i) => ({
        id: i,
        src: "",
        alt: `Project ${i + 1}`,
      }));
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((img) => (
        <MotionDiv
          key={img.id}
          whileHover={{ scale: 1.03 }}
          className="overflow-hidden rounded-lg shadow"
        >
          {img.src ? (
            <ImageWithSkeleton
              src={img.src}
              alt={img.alt}
              containerClassName="h-32 md:h-40"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="w-full h-32 md:h-40 bg-gray-200 grid place-items-center text-gray-500">
              Image
            </div>
          )}
        </MotionDiv>
      ))}
    </div>
  );
}
