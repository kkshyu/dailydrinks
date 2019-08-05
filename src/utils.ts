import uuid from "uuid";

export const createOrderItem = () => {
  return {
    id: uuid.v4(),
    defaultEditing: true,
    value: { name: "", price: 0 }
  };
};
