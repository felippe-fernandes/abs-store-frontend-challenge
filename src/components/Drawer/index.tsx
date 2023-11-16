import { DrawerWrapper } from "./styles";

export interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Drawer = ({ isOpen, children }: IProps) => {
  return <DrawerWrapper isOpen={isOpen}>{children}</DrawerWrapper>;
};

export default Drawer;
