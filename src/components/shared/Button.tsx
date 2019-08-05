import { HTMLAttributes } from "react";
import styled from "styled-components";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  block?: boolean;
  intent?: "default" | "primary" | "secondary";
  size?: "default" | "small" | "large";
};
const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ block }) => block && "100%"};
  padding: ${({ size }) =>
    size === "small" ? "0.25rem 1rem" : size === "large" ? "1rem 3rem" : "0.5rem 2rem"};
  border: none;
  border-radius: 0.25rem;
  background-color: ${({ intent }) =>
    intent === "primary"
      ? "#E9E0D1"
      : intent === "secondary"
      ? "#675C5C"
      : "#FAFAFA"};
  color: ${({ intent }) =>
    intent === "primary"
      ? "#37302E"
      : intent === "secondary"
      ? "#FAFAFA"
      : "#37302E"};
  /* remove blue outline */
  :focus {
    outline: 0;
  }
  :hover {
    background-color: ${({ intent }) =>
      intent === "primary"
        ? "#675C5C"
        : intent === "secondary"
        ? "#FAFAFA"
        : "#37302E"};
    color: ${({ intent }) =>
      intent === "primary"
        ? "#FAFAFA"
        : intent === "secondary"
        ? "#37302E"
        : "#E9E0D1"};
  }
`;

export default Button;
