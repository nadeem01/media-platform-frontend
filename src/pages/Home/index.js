import React, { useState } from 'react';
import { Container } from 'reactstrap';
import UserMedia from '../../components/UserMedia';
import Media from '../Media';
export const Home = () => {
  const [toggleMedia, setToggleMedia] = useState(false);
  return (
    <Container>
      <UserMedia toggleMedia={toggleMedia} setToggleMedia={setToggleMedia} />
      {toggleMedia && <Media />}
    </Container>
  );
};
