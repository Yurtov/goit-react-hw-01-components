import { Table, Thead, Th, Tbody, Td, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </Thead>

      <Tbody>
        {items.map(item => (
          <Tr key={item.id}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
