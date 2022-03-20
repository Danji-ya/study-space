import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navigation from '../components/Navigation';

const Home: NextPage = () => {
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
        <Image src='/images/cat.jpg' alt='cat' width={144} height={144} />
      </main>
    </div>
  )
}

export default Home
