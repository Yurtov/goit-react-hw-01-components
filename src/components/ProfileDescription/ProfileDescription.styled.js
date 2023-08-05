import styled from 'styled-components';

export const Card = styled.div`
  margin: 0 auto;
`;

export const Frame = styled.div`
  margin: 50px 0;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  width: 160px;
  height: 160px;
`;

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  text-align: center;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 25px;
`;

export const Location = styled.p`
  opacity: 50%;
`;

export const Tag = styled.p`
  opacity: 50%;
  margin: 5px;
`;
