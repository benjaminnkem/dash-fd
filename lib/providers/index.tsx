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
    // style: {
    //   backgroundColor: "#27292f",
    //   color: "white",
    //   fontSize: "14px",
    // },
    position: "top-right",
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
