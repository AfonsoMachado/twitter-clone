import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="GitHub" nickname="@github" />,
            <FollowSuggestion name="Google" nickname="@Google" />,
            <FollowSuggestion name="Rocketseat" nickname="@rocketseat" />,
          ]}
        />

        <List
          title="Talvez você curta"
          elements={[<h1>Teste</h1>, <h1>Teste</h1>, <h1>Teste</h1>]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
