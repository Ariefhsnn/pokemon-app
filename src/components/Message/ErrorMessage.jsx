import { MdOutlineWarning } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

function ErrorMessage({ message, testId }) {
  return (
    <AnimatePresence>
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, y: 0 }}
      >
        <MdOutlineWarning className="h-4 w-4 text-red-500" />
        <p
          className="text-red-500 capitalize font-semibold text-xs"
          data-testid={testId}
        >
          {message}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

export default ErrorMessage;
