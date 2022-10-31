import { ElementType, FC, ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "body";
  color?: "text" | "main" | "error";
  weight?: "400" | "500";
  upperCase?: boolean;
  center?: boolean;
  asGradient?: boolean;
  className?: string;
  tag?: ElementType;
}

export const Typography: FC<TypographyProps> = (props) => {
  // **Props
  const {
    variant,
    weight,
    upperCase,
    center,
    asGradient,
    tag: Tag = "div",
    color,
    className,
    children
  } = props;

  const getClasses = () => {
    let classes = className ? `${className} typography` : "typography";

    switch (variant) {
      case "h1": {
        classes += " h1";
        break;
      }
      case "h2": {
        classes += " h2";
        break;
      }
      case "h3": {
        classes += " h3";
        break;
      }
      case "h4": {
        classes += " h4";
        break;
      }
      default: {
        classes += " body";
        break;
      }
    }

    switch (weight) {
      case "500": {
        classes += " w-500";
        break;
      }
      default: {
        break;
      }
    }

    switch (color) {
      case "text": {
        classes += " text";
        break;
      }
      case "main": {
        classes += " main";
        break;
      }
      case "error": {
        classes += " error";
        break;
      }
      default: {
        break;
      }
    }

    if (upperCase) {
      classes += " uppercase";
    }

    if (center) {
      classes += " center";
    }

    if (asGradient) {
      classes += " gradient";
    }

    return classes;
  };

  return <Tag className={getClasses()}>{children}</Tag>;
};
