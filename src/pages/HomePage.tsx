import React, { useCallback, useState } from "react";
import styled from "styled-components";
import uuid from "uuid";
import OrderItem from "../components/order/OrderItem";
import OrderItemAddButton from "../components/order/OrderItemAddButton";
import OrderStatistics from "../components/order/OrderStatistics";
import Typography from "../components/shared/Typography";
import BackgroundImage from "../images/bg.png";
import { createOrderItem } from "../utils";

const BackgroundSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(35, 35, 35);
  background-size: cover;
  background-position: center;
  padding: 4rem 0px;
  overflow: auto;
`;
const HomePage = () => {
  const [orderItems, setOrderItems] = useState([createOrderItem()]);
  const handleOrderItemAdd = useCallback(() => {
    setOrderItems([createOrderItem(), ...orderItems]);
  }, [orderItems]);
  return (
    // NOTICE: there is a bug in styled-component
    // the background image will be re-render even if there is nothing changes
    <BackgroundSection style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="container">
        <div className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center justify-content-lg-start">
            <Typography.H1>Daily Drinks</Typography.H1>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4 order-lg-2">
              <OrderStatistics
                count={orderItems.length}
                amount={orderItems
                  .map(item => item.value.price)
                  .reduce((a, b) => a + b, 0)}
                className="mb-3"
              />
              <OrderItemAddButton onClick={handleOrderItemAdd} />
            </div>
            <div className="col-12 col-lg-8 order-lg-1">
              {orderItems.map((orderItem, idx) => (
                <OrderItem
                  key={orderItem.id}
                  className="mb-2"
                  defaultValue={orderItem.value}
                  defaultEditing={orderItem.defaultEditing}
                  onSave={value =>
                    setOrderItems([
                      ...orderItems.slice(0, idx),
                      { ...orderItem, value },
                      ...orderItems.slice(idx + 1)
                    ])
                  }
                  onDelete={() =>
                    setOrderItems([
                      ...orderItems.slice(0, idx),
                      ...orderItems.slice(idx + 1)
                    ])
                  }
                  onClone={() =>
                    setOrderItems([
                      ...orderItems.slice(0, idx + 1),
                      { ...orderItem, id: uuid.v4() },
                      ...orderItems.slice(idx + 1)
                    ])
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </BackgroundSection>
  );
};

export default HomePage;
