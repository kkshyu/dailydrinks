import React, { HTMLAttributes } from "react";
import ReactSVG from "react-svg";

type IconProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  size?: "default" | "small" | "large";
};
const Icon: React.FC<IconProps> = ({ name, size, ...divProps }) => {
  let src;
  try {
    src = require(`../../images/icons/${name}.svg`);
  } catch {
    src = null;
  }
  return (
    <ReactSVG
      {...divProps}
      src={src}
      style={{
        width: size === "small" ? ".5rem" : size === "large" ? "2rem" : "1rem",
        lineHeight: "100%",
        ...divProps.style
      }}
      //   beforeInjection={svg =>
      //     color &&
      //     svg
      //       .querySelectorAll("path")
      //       .forEach(el => el && el.setAttribute("color", color))
      //   }
    />
  );
};

export default Icon;
