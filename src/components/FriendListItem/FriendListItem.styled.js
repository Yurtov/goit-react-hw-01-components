import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  height: 70px;
  padding-left: 15px;
  background-color: #fff;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
`;

const getIsOnlineColor = ({ $status }) => ($status ? 'green' : 'red');

export const Status = styled.span`
  background-color: ${getIsOnlineColor};
  width: 15px;
  height: 15px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 20px;
`;