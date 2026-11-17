import { cn } from "../lib/cn.js";

const widths = {
  default: "max-w-7xl",
  wide: "max-w-[92rem]",
  narrow: "max-w-3xl",
  prose: "max-w-2xl",
};

export default function Container({ as: Tag = "div", width = "default", className, children, ...props }) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", widths[width], className)} {...props}>
      {children}
    </Tag>
  );
}
