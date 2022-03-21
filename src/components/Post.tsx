import { PostProps } from '@type/post';
import styles from './Post.module.css';

function Post({ userId, title, body }: Partial<PostProps>) {
  return (
    <li className={styles.list}>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  );
}

export default Post;
