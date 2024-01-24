import { FC, ButtonHTMLAttributes } from "react";

import "./button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
}

const Button: FC<ButtonProps> = ({ className = "", outlined, ...rest }) => {
  return (
    <button
      className={`custom-button ${outlined ? "outlined" : ""} ${className}`}
      {...rest}
    />
  );
};

export default Button;
