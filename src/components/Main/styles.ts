import styled from 'styled-components';
import { ArrowLeft } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* valor minimo entre 601px ou 100% da tela */
  /* compara o primeiro e o segundo valor. o valor menor ganha */
  width: min(601px, 100%);

  /* criando a divisão da barra lateral, a patir de 500px */
  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  /* preso na parte de cima da tela */
  z-index: 2;
  position: sticky;

  top: 0;
  background-color: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 8px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      color: var(--twitter-dark-hover);
    }
  }
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div``;
