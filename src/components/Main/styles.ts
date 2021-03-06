import styled from 'styled-components';
import { ArrowLeft } from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  //* Nota1
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  //* Nota 2
  position: sticky;
  z-index: 2;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  //* cima, dir, bai, esq
  padding: 8px 0 9px 13px;

  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;

//* Quando for ícone usar a função styled
export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;
  //* Nota 3
  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;
