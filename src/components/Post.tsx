import { css } from '@emotion/react';
import { PostProps } from '@type/post';
import styles from './Post.module.css';

function Post({ title, body }: Partial<PostProps>) {
  return (
    <li className={styles.list}>
      <h3
        css={css`
          font-size: 1rem;
          font-weight: 600;
          color: red;
        `}
      >
        {title}
      </h3>
      <p>{body}</p>
    </li>
  );
}

export default Post;
