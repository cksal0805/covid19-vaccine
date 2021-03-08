import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background-color: #333640;
  color: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  @media only screen and (min-width: 600px) {
    border-radius: 20px;
    width: 400px;
    height: 700px;
  }
`;

function AppLayout({ children }) {
  return (
    <Layout>
      {children}
    </Layout>
  )
}

export default AppLayout;
