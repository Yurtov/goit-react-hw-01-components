import styled from 'styled-components';

export const Stats = styled.ul`
  display: flex;
  border-top: 1px solid rgb(6, 76, 189, 0.5);
  :not(:last-child) {
    border-right: 1px solid rgb(6, 76, 189, 0.5);
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  background-color: #a9c6f1;
  width: calc(340px / 3);
  height: 100px;
`;

export const Label = styled.span`
  margin-bottom: 5px;
  opacity: 50%;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 16px;
`;
