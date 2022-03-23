import Head from 'next/head';
import Image from 'next/image';
import { PostProps } from '@type/post';
import { JSONPLACEHOLDER_URL } from 'src/constants/api';
import Navigation from '../components/Navigation';
import Post from '../components/Post';

export type PostsProps = {
  posts?: PostProps[];
};

function Home({ posts }: PostsProps) {
  return (
    <div>
      <Head>
        <title>타이틀 지정</title>
        <meta name="description" content="nextjs tutorial" />
      </Head>
      <Navigation />
      <main>
        <p>hello world</p>
        {/* <img src='/images/cat.jpg' alt='cat' width={144} height={144} /> */}
        <Image src="/images/cat.jpg" alt="cat" width={144} height={144} />
        <section>
          <h2>Blog</h2>
          <ul>
            {posts &&
              posts.map(({ id, userId, title, body }) => (
                <Post key={id} userId={userId} title={title} body={body} />
              ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const res = await fetch(`${JSONPLACEHOLDER_URL}/posts`);
  const allPostsData = await res.json();

  return {
    props: {
      posts: allPostsData,
    },
  };
}
