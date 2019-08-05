import styled from "styled-components";

const Input = styled.input`
  height: 3rem;
  width: 100%;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  padding: 1rem;
  :focus {
    outline-color: #37302e;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  padding: 1rem;
  :focus {
    outline-color: #37302e;
  }
`;

export default Input;
