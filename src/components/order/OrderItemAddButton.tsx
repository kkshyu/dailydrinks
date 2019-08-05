import React from "react";
import Button, { ButtonProps } from "../shared/Button";
import Icon from "../shared/Icon";

const OrderItemAddButton: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <Button
      block
      size="large"
      intent="primary"
      className="mb-3"
      onClick={onClick}
    >
      <Icon name="plus-solid" />
      <span className="ml-1">New Item</span>
    </Button>
  );
};

export default OrderItemAddButton;
