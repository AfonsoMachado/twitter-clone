import React from 'react';

import { Container } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <RetweetIcon />
      <Retweeted>Você retweetou</Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>20 de set</time>
          </Header>

          <Description>Foguete não tem ré 🚀</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              38
            </Status>
            <Status>
              <LikeIcon />
              125
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
