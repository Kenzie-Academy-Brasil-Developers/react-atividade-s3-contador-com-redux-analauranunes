import { ButtonComp } from "./style";

export const Button = ({ children, ...rest }) => {
  return <ButtonComp {...rest}>{children}</ButtonComp>;
};
