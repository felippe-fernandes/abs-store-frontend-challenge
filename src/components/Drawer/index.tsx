import { useEffect, useRef } from "react";
import { DrawerWrapper } from "./styles";
import { useDrawerStore } from "@/stores/drawerStores";

export interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
  toggleDrawer: () => void;
}

const Drawer = ({ isOpen, toggleDrawer, children }: IProps) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Close the drawer if it's open and the click is outside of the drawer
      if (
        isOpen &&
        drawerRef.current &&
        !(drawerRef.current as any).contains(event.target)
      ) {
        toggleDrawer();
      }
    };

    // Attach the event listener to the document
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, toggleDrawer]);

  return (
    <DrawerWrapper open={isOpen} ref={drawerRef}>
      {children}
    </DrawerWrapper>
  );
};

export default Drawer;
