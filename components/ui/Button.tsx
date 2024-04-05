import { cn } from "@/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export const Button = ({
  children,
  className,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, className }))} {...props}>
      {children}
    </button>
  );
};

const buttonVariants = cva("rounded flex items-center font-raleway", {
  variants: {
    variant: {
      primary:
        "bg-brand-red hover:scale-105 px-4 py-1 text-white font-medium gap-2 ",
      secondary:
        "bg-brand-yellow hover:scale-105 px-4 py-2 text-grey-darkest font-bold",
      info: "bg-blue-400 hover:scale-105 px-2 py-1 text-white font-medium",
      link: "underline text-blue-400 hover:text-blue-600",
    },
  },
});
