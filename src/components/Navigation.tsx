import Link from 'next/link';

function Navigation() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">
            <a>Main</a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a>Search</a>
          </Link>
        </li>
        <li>
          <Link href="/post/1">
            <a>First Post</a>
          </Link>
        </li>
        <li>
          <Link href="/post/2">
            <a>Second Post</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Navigation;
