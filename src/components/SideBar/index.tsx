import React from 'react';

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
        <p>
          {
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus illo maxime est delectus, neque commodi quae reiciendis, autem praesentium atque perferendis consequatur fuga dolores recusandae odit dolorum saepe consequuntur a.'
          }
        </p>
      </Body>
    </Container>
  );
};

export default SideBar;
