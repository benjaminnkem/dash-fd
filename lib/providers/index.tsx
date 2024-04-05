"use client";
import { ToastOptions, Toaster } from "react-hot-toast";
import { ModalProvider } from "./modal-provider";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const toastOptions: ToastOptions = {
    duration: 4000,

    position: "top-center",
    ariaProps: {
      "aria-live": "polite",
      role: "alert",
    },
  };

  return (
    <>
      <Toaster {...toastOptions} />
      <ModalProvider>{children}</ModalProvider>
    </>
  );
};

export default Providers;
