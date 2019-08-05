import React, { HTMLAttributes, useState } from "react";
import styled from "styled-components";
import Button from "../shared/Button";
import Icon from "../shared/Icon";
import Input, { Textarea } from "../shared/Input";

export type OrderItemValue = {
  name: string;
  price: number;
  notes?: string;
};
type OrderItemProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "onChange" | "defaultValue"
> & {
  loading?: boolean;
  defaultValue?: OrderItemValue;
  defaultEditing?: boolean;
  onSave?: (value: OrderItemValue) => void;
  onDelete?: () => void;
  onClone?: () => void;
};
const StyledOrderItem = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0.25rem;
  padding: 1.5rem 1rem;
`;
const StyledDeleteIcon = styled(Icon)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.2);
  :hover {
    color: rgba(255, 0, 0, 0.6);
  }
`;
const StyledActionIcon = styled(Icon)`
  cursor: pointer;
  color: rgba(0, 0, 0, 0.4);
  :hover {
    color: rgba(0, 0, 0, 0.8);
  }
`;
const StyledOrderItemNotes = styled.p`
  color: #675c5c;
  white-space: pre-wrap;
`;
const initialValue: OrderItemValue = { name: "", price: 0 };
const OrderItem: React.FC<OrderItemProps> = ({
  loading,
  onClone,
  onDelete,
  onSave,
  defaultValue,
  defaultEditing,
  ...divProps
}) => {
  const [value, setValue] = useState(defaultValue || initialValue);
  const [editing, setEditing] = useState(defaultEditing);
  if (loading) {
    return <StyledOrderItem {...divProps}>Loading...</StyledOrderItem>;
  }
  if (editing) {
    return (
      <StyledOrderItem {...divProps}>
        <div className="d-flex">
          <Input
            className="mb-3 mr-2"
            placeholder="Name"
            value={value.name}
            onChange={e => setValue({ ...value, name: e.currentTarget.value })}
          />
          <Input
            className="mb-3"
            type="number"
            placeholder="Price"
            value={
              // NOTICE: it should format to string
              value.price.toString()
            }
            onChange={e =>
              setValue({
                ...value,
                price: parseInt(e.currentTarget.value, 10) || 0
              })
            }
          />
        </div>
        <Textarea
          className="mb-3"
          placeholder="Notes. Buyer name, ice, sugar, etc..."
          value={value.notes}
          onChange={e => setValue({ ...value, notes: e.currentTarget.value })}
        />
        <div className="d-flex justify-content-end">
          <Button
            className="mr-2"
            onClick={() => {
              setValue(defaultValue || initialValue);
              setEditing(false);
            }}
          >
            Cancel
          </Button>
          <Button
            intent="secondary"
            onClick={() => {
              onSave && onSave(value);
              setEditing(false);
            }}
          >
            Save
          </Button>
        </div>
      </StyledOrderItem>
    );
  }
  return (
    <StyledOrderItem {...divProps}>
      <div className="d-flex align-items-start">
        <StyledDeleteIcon
          className="mr-3"
          name="times-solid"
          onClick={() => onDelete && onDelete()}
        />
        <div className="d-flex flex-grow-1 flex-column">
          <div>
            <span className="mr-3">${value.price}</span>
            <span className="mr-3">{value.name}</span>
          </div>
          <StyledOrderItemNotes>{value.notes}</StyledOrderItemNotes>
        </div>
        <div className="d-flex align-items-center">
          <StyledActionIcon
            name="clone-solid"
            className="mr-3"
            onClick={() => onClone && onClone()}
          />
          <StyledActionIcon
            name="pencil-alt-solid"
            onClick={() => setEditing(true)}
          />
        </div>
      </div>
    </StyledOrderItem>
  );
};

export default OrderItem;
