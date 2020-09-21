import styled, { css } from 'styled-components';

import {
  Chat,
  Favorite,
  Retweet,
  Retweet2,
  ShareAlt,
} from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const Retweeted = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);
`;

export const RetweetIconHeader = styled(Retweet)`
  width: 19px;
  height: 19px;

  margin-left: 35px;
  margin-right: 9px;

  > path {
    fill: var(--gray);
  }
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  /* separando do avatar */
  padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  /* não quebra linhda */
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    /* insere reticencias quando a tela fica pequena demais */
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 2px;
`;

export const ImageContent = styled.div`
  margin-top: 12px;
  width: 100%;
  /* limitando altura e largura da imagem do tweet conforme a pagina é alterada de tamanho */
  height: min(285px, max(175px, 41vw));

  background: var(--outline);
  border-radius: 14px;

  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  /*  permitindo quebra de linha */
  flex-wrap: wrap;
  margin: 11px auto 0;
  width: 100%; /** Mobile */

  /* Não mobile */
  @media (min-width: 500px) {
    width: 83%;
  }

  > div {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Status = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  /* color: var(--gray); */

  > svg {
    margin-right: 5px;
  }

  &:nth-child(1) {
    &,
    > svg path {
      color: var(--gray);
    }
  }

  &:nth-child(2) {
    color: var(--retweet);
    > svg path {
      fill: var(--retweet);
    }
  }

  &:nth-child(3) {
    color: var(--like);
    > svg {
      fill: var(--like);
    }
  }

  &:nth-child(4) {
    > svg path {
      color: var(--gray);
    }
  }
`;

const iconCSS = css`
  width: 19px;
  height: 19px;
`;

export const CommentIcon = styled(Chat)`
  ${iconCSS}
`;

export const RetweetIcon = styled(Retweet2)`
  ${iconCSS}
`;

export const LikeIcon = styled(Favorite)`
  ${iconCSS}
`;

export const ShareIcon = styled(ShareAlt)`
  ${iconCSS}
`;
