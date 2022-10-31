import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import { HtmlImage } from "../image";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  height?: "large";
  withIcon?: boolean;
  children?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  // **Props
  const { fullWidth, height, withIcon, className, children, ...rest } = props;

  const getClasses = () => {
    let classes = className ? `${className} button` : "button";

    switch (height) {
      case "large": {
        classes += " height-large";
        break;
      }
      default: {
        break;
      }
    }

    if (fullWidth) {
      classes += " full";
    }

    return classes;
  };

  return (
    <button className={getClasses()} {...rest}>
      {withIcon && (
        <HtmlImage
          src="/media/icons/click.svg"
          width={22}
          height={22}
          alt=""
          aria-hidden={true}
        />
      )}
      {children}
    </button>
  );
};
