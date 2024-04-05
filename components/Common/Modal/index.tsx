import { opacityVar } from "@/lib/utils/variants";
import { motion } from "framer-motion";
import { FC, useEffect, useRef } from "react";

const variant = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: { ease: "easeOut", type: "spring", damping: 15 } },
  exit: { opacity: 0, scale: 0 },
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  isAutomatic?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Modal: FC<ModalProps> = ({ children, isOpen, onClose, isAutomatic = true }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose;
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
      document.body.style.overflowY = "hidden";
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 min-w-full min-h-full flex justify-center items-center z-[3000] overflow-hidden">
          {/* background */}
          <motion.div
            {...opacityVar}
            className="fixed top-0 left-0 min-w-full min-h-full bg-[#213449]/95 backdrop-blur flex items-center justify-center"
            onClick={isAutomatic ? onClose : () => {}}
          ></motion.div>

          {/* modal */}
          <motion.div {...variant} className="md:max-w-[36rem] mx-auto w-[90%] relative z-[300]">
            <div ref={ref}>{children}</div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
