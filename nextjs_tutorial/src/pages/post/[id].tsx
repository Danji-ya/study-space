import { PostProps } from '@type/post';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Post from 'src/components/Post';
import { JSONPLACEHOLDER_URL, STATUS_CODES } from 'src/constants/api';

interface Props {
  postData: PostProps;
}

function PostDetail({ postData }: Props) {
  // const { isFallback } = useRouter();

  // // If the page is not yet generated, this will be displayed
  // // initially until getStaticProps() finishes running
  // if (isFallback) {
  //   return <div>Loading...</div>;
  // }

  const { userId, title, body } = postData;

  return (
    <ul>
      <Post userId={userId} title={title} body={body} />
    </ul>
  );
}

export default PostDetail;

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.query;
//   const res = await fetch(`${JSONPLACEHOLDER_URL}/posts/${id}`);
//   const postData = await res.json();

//   if (res.status === STATUS_CODES.NOT_FOUND) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: '/',
//       },
//     };
//   }

//   return {
//     props: {
//       postData,
//     },
//   };
// };

export async function getStaticPaths() {
  const res = await fetch(`${JSONPLACEHOLDER_URL}/posts`);
  const allPostsData = await res.json();

  const paths = allPostsData.map((post: PostProps) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }: any) {
  const res = await fetch(`${JSONPLACEHOLDER_URL}/posts/${params.id}`);
  const postData = await res.json();

  return {
    props: {
      postData,
    },
  };
}
