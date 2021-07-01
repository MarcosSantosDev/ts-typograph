import React from 'react';

import { Heading } from '../components/typograph';
import { Container } from './styles';

const App: React.FC = () => {
  return (
    <Container>
      <Heading level={1} color="black">Hello</Heading>
      <Heading level={2} fontWeight={100}>Hello</Heading>
      <Heading level={3} color="lightGray" >Hello</Heading>
      <Heading level={4} size="large">Hello</Heading>
      <Heading level={5} lineHeight={4}>Hello</Heading>
      <Heading level={6} >Hello</Heading>
    </Container>
  );
}

export default App;