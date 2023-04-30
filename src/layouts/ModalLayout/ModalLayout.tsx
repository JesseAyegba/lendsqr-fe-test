import MobileSidebar from "@/components/shared/MobileSidebar/MobileSidebar";
import { useAppSelector } from "@/hooks/useAppSelector";
import { AnimatePresence } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const ModalLayout: React.FC<Props> = ({ children }) => {
  const mobileSidebar = useAppSelector((state) => state.mobileSidebar.show);
  return (
    <div>
      <div>
        <AnimatePresence>{mobileSidebar && <MobileSidebar />}</AnimatePresence>
      </div>
      {children}
    </div>
  );
};

export default ModalLayout;
