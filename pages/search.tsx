import Head from "next/head";
import Navigation from "../components/Navigation";

const Search = () => {
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