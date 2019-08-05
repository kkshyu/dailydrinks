import React, { HTMLAttributes } from "react";
import styled from "styled-components";

type OrderStatisticsProps = HTMLAttributes<HTMLDivElement> & {
  count: number;
  amount: number;
};
const StyledOrderStatistics = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 0.25rem;
  padding: 3rem 1.5rem;
`;
const OrderCount = styled.span`
  font-size: 1.25rem;
`;
const OrderAmount = styled.span`
  font-size: 3rem;
`;
const OrderStatistics: React.FC<OrderStatisticsProps> = ({
  count,
  amount,
  ...divProps
}) => {
  return (
    <StyledOrderStatistics {...divProps}>
      <OrderAmount className="mr-2">${amount}</OrderAmount>
      <OrderCount>{count} pcs</OrderCount>
    </StyledOrderStatistics>
  );
};

export default OrderStatistics;
