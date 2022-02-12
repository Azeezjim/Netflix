import styled from 'styled-components';
// import styles from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 70px 50px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
  text-align: center;

  @media (max-width) {
    padding: 70px 30px;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: space-around;
  /* flex-direction: column; */
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-full, minmax(230px ifr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(150px ifr);
  }
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
