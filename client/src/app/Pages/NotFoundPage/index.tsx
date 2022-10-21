import * as React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { P } from './P';
import Meta from 'app/components/Meta';

export default function NotFoundPage() {
  return (
    <>
      <Meta title="Page Not Found" description="Page not found" />
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <P>Page not found.</P>
        <Link to={process.env.PUBLIC_URL + '/'}>Return to Home Page</Link>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: calc(100vh - 2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: #000;
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;
// #1A1540
