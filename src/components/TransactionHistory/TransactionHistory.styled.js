import styled from 'styled-components';

export const Table = styled.table`
  margin: 60px auto;
  width: 650px;
`;

export const Thead = styled.thead`
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border: none;
  background: #1dc3e0;
  color: #fff;
  font-size: 16px;
`;

export const Th = styled.th`
  height: 40px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  :first-child {
    border-left: none;
  }
  :last-child {
    border-right: none;
  }
`;

export const Tbody = styled.tbody`
  text-align: center;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  font-size: 14px;
  background: #fff;
  /* :nth-child(odd) {
    background: #f3f3f3;
  } */
  /* :nth-child(even) {
    background: #cee7eb;
  } */

 
`;

export const Tr = styled.tr`
  :nth-child(even) {
    background: #cee7eb;
  }
`;

export const Td = styled.td`
  height: 40px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  :first-child {
    border-left: none;
  }
  :last-child {
    border-right: none;
  }
`;
