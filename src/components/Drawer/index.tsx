import { useEffect, useRef } from "react";
import { DrawerWrapper } from "./styles";

export interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
  toggleDrawer: () => void;
}

const Drawer = ({ isOpen, toggleDrawer, children }: IProps) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        drawerRef.current &&
        !(drawerRef.current as any).contains(event.target)
      ) {
        toggleDrawer();
      }
    };

    document.addEventListener("click", handleOutsideClick);

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
