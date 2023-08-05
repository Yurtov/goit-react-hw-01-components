import styled from 'styled-components';

export const StatisticsSection = styled.section`
  margin: 60px auto;
  width: 450px;
  height: 200px;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
  padding: 35px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const getBackgroundColor = ({ color }) => {
  if (color <= 10) {
    return 'red';
  }
  if (color <= 20) {
    return 'green';
  }
  if (color <= 30) {
    return 'blue';
  }
  if (color <= 50) {
    return 'black';
  }
};

export const Item = styled.li`
  width: calc(450px / 5);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${getBackgroundColor};
`;

export const Label = styled.span`
  margin-bottom: 10px;
  color: #fff;
`;

export const Percentage = styled.span`
  font-size: 20px;
  color: #fff;
`;
