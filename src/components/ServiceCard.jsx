import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServiceCard({ title, description, image, href }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card overflow-hidden hover:shadow-lg transition block"
    >
      <Link to={href}>
        <div className="h-40 bg-gray-200">
          {image ? (
            <img
              src={image}
              alt={`${title} image`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full grid place-items-center text-gray-500">
              Image
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <p className="text-sm text-warmGray mt-2">{description}</p>
          <div className="mt-4">
            <span className="btn-primary">Learn More</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
