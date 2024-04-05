"use client";

import Modal from "@/components/Common/Modal";
import { useModal } from "@/lib/providers/modal-provider";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import FirstSlide from "./first-slide";

export type SlideProps = { handlePrevious(): void; handleNext(): void };

const ReviewModal = () => {
  const { showModal, hideModal } = useModal();
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => (prev > 4 ? prev : prev + 1));
  const handlePrevious = () => setStep((prev) => (prev < 2 ? 1 : prev - 1));

  const renderModalContent = () => {
    switch (step) {
      case 1:
        return <FirstSlide handleNext={handleNext} handlePrevious={handlePrevious} key={"init"} />;
      // case 2:
      //   return <FirstSlide handleNext={handleNext} handlePrevious={handlePrevious} key={"init"} />;
      default:
        return null;
    }
  };

  return (
    <Modal onClose={hideModal} isOpen={true} isAutomatic={false}>
      <AnimatePresence mode="wait">{renderModalContent()}</AnimatePresence>
    </Modal>
  );
};

export default ReviewModal;
