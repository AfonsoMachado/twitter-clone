import styled, { css } from 'styled-components';

import {
  Home,
  Notifications,
  Email,
  FavoriteBorder,
  Person,
  ExitToApp,
  Twitter,
} from '../../styles/Icons';

export const Container = styled.div`
  display: none;

  /* Aparece somente a partir de 400px  */
  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* SEE */
    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    /* barra fixada na tela */
    /* SEE */
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const Topside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled(Twitter)`
  width: 41px;
  height: 41px;

  > path {
    fill: var(--twitter);
  }

  margin-bottom: 20px;
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  /* os textos só aparecem em telas grandes */
  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 19px;
    }
  }
`;

const iconCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
  color: var(--white);
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const BellIcon = styled(Notifications)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;

export const FavoriteIcon = styled(FavoriteBorder)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Person)`
  ${iconCSS}
`;
