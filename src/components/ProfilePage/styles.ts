import styled, { css } from 'styled-components';

import { LocationOn, Cake } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  /* firefox */
  scrollbar-width: none;
  /* chrome */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  /* não diminui o tamanho / nao encolhe */
  flex-shrink: 0;

  width: 100%;
  /* tamanho dinamico do banner */
  height: min(33vw, 199px);

  background: var(--twitter);
  position: relative;
`;

export const Avatar = styled.div``;

export const Profiledata = styled.div``;

const iconCSS = css`
  width: 20px;
  height: 20px;

  color: var(--grey);
`;

export const LocationIcon = styled(LocationOn)`
  ${iconCSS}
`;

export const CakeIcon = styled(Cake)`
  ${iconCSS}
`;

export const Followage = styled.div``;
