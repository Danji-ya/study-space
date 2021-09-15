/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import reset from './assets/css/reset';

function App() {
  const testEslint = 5;

  return (
    <div>
      <Global styles={reset} />
      <p>testEmotion</p>
    </div>
  );
}

export default App;
