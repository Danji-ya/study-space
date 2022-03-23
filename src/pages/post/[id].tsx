import { PostProps } from '@type/post';
import { GetServerSideProps } from 'next';
import Post from 'src/components/Post';
import { JSONPLACEHOLDER_URL, STATUS_CODES } from 'src/constants/api';

interface Props {
  postData: PostProps;
}

function PostDetail({ postData }: Props) {
  const { userId, title, body } = postData;

  return (
    <ul>
      <Post userId={userId} title={title} body={body} />
    </ul>
  );
}

export default PostDetail;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${JSONPLACEHOLDER_URL}/posts/${id}`);
  const postData = await res.json();

  if (res.status === STATUS_CODES.NOT_FOUND) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: {
      postData,
    },
  };
};
