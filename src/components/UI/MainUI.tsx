import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 33px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    font-size: 23px;
    text-align: center;

    margin: 15px 0 15px 0;
  }
`;

export const TableTitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f8f8f8;
  padding: 10px 5px;
`;

export const TableItem = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  flex: 4;
  text-align: right;

  @media (max-width: 460px) {
    font-size: 12px;
  }
  :nth-child(1) {
    flex: 2;
    text-align: left;
  }
  :nth-child(2) {
    flex: 6;
    text-align: left;
  }
  :nth-child(3) {
    flex: 3;
    margin-right: 5px;
  }
  :nth-child(4) {
    flex: 3;
    @media (max-width: 1150px) {
      display: none;
    }
  }
  :nth-child(5) {
    @media (max-width: 1150px) {
      display: none;
    }
  }
  :nth-child(6) {
    flex: 3;
    margin-right: 9px;
  }
  :nth-child(7) {
    @media (max-width: 850px) {
      display: none;
    }
  }
  :nth-child(8) {
    @media (max-width: 625px) {
      font-size: 10px;
    }
    @media (max-width: 365px) {
      display: none;
    }
  }
`;

export const TableItemsBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
