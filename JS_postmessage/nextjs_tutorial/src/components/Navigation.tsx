/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  height: 80px;
  background-color: black;
  justify-content: space-between;
  align-items: center;

  color: white;
  padding: 0 25px;
`;

const Nav = styled.ul`
  display: flex;
`;

const List = styled.li`
  margin: 5px;

  a {
    color: white;
    padding: 5px 10px;
    text-decoration: none;

    &:hover {
      background-color: rgba(155, 155, 155, 0.5);
    }
  }
`;

function Navigation() {
  return (
    <Header>
      <h1>Test</h1>
      <Nav>
        <List>
          <Link href="/">
            <a>Main</a>
          </Link>
        </List>
        <List>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </List>
      </Nav>
    </Header>
  );
}

export default Navigation;
