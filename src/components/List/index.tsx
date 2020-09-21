import React from 'react';

import { Container, Item, Title } from './styles';

// sendo uma lista de elementos react, renderizados na tela
interface Props {
  title: string;
  elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {/* realizando um map no array de elementos, criando outros itens com base nesse elementos */}
      {elements.map((element, index) => (
        <Item key={index}>{element}</Item>
      ))}
    </Container>
  );
};

export default List;
