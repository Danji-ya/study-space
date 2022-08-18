import { AiFillApple } from 'react-icons/ai';
import Button from './components/Button';

function App() {
  return (
    <>
      <header>
        <h1>Danjiya</h1>
      </header>

      <main>
        <section>
          <h2>Button</h2>

          <Button size="sm" onClick={(event) => console.log(event.target)}>
            서브
          </Button>
          <Button
            size="sm"
            color="secondary"
            leftIcon={<AiFillApple />}
            rightIcon={<AiFillApple />}
            onClick={(event) => console.log(event.target)}
          >
            icons
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
