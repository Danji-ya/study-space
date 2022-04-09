import Head from 'next/head';
import { useState } from 'react';
import Navigation from '../components/Navigation';

function Search() {
  const [test, setTest] = useState(null);

  return (
    <div>
      <Head>
        <title>검색 페이지</title>
        <meta name="description" content="nextjs tutorial" />
      </Head>
      <Navigation />
      <p>Search</p>
    </div>
  );
}

export default Search;
