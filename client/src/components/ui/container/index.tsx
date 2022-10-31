import { FC, HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = (props) => {
  // **Props
  const { className, children, ...rest } = props;

  return (
    <div
      className={className ? `${className} container` : "container"}
      {...rest}
    >
      {children}
    </div>
  );
};
