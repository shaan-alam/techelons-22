import { motion } from "framer-motion";
import React from "react";
import ButtonStyles from "./Button.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text?: string;
  className?: string;
}

const Button = React.forwardRef(
  ({ className, children }: Props, ref: React.LegacyRef<HTMLButtonElement>) => (
    <button className={`${ButtonStyles.primary} ${className}`} ref={ref}>
      {children}
    </button>
  )
);

export default motion(Button);
