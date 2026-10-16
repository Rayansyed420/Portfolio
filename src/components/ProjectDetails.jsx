import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 bg-black/60 backdrop-blur-sm"
      onClick={closeModal} // Closes modal when clicking backdrop outside
    >
      <motion.div
        className="relative w-full max-w-2xl border shadow-xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the modal
      >
        {/* Cross Close Button */}
        <button
          onClick={closeModal}
          type="button"
          aria-label="Close modal"
          className="absolute z-20 p-2 text-white/80 rounded-full top-4 right-4 bg-midnight/80 hover:bg-neutral-800 hover:text-white transition-all cursor-pointer border border-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Image */}
        <img src={image} alt={title} className="w-full h-64 object-cover" />

        {/* Modal Content */}
        <div className="p-6">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-4 font-normal text-neutral-300">{description}</p>

          <div className="space-y-2 mb-6">
            {subDescription.map((subDesc, index) => (
              <p key={index} className="font-normal text-sm text-neutral-400">
                • {subDesc}
              </p>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="rounded-lg size-9 hover-animation"
                />
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium cursor-pointer hover-animation text-white"
            >
              View Project
              <img src="assets/arrow-up.svg" className="size-4" alt="arrow" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;