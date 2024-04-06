"use client";
import { ToastOptions, Toaster } from "react-hot-toast";
import { ModalProvider } from "./modal-provider";
import { useEffect } from "react";
import useStore from "../store/global.store";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { updateData } = useStore();

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    updateData("isDarkMode", darkModeMediaQuery.matches);

    const darkModeListener = (event: MediaQueryListEvent) => {
      updateData("isDarkMode", event.matches);
    };

    darkModeMediaQuery.addEventListener("change", darkModeListener);

    return () => {
      darkModeMediaQuery.removeEventListener("change", darkModeListener);
    };
  }, []);

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
