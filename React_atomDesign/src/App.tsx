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
            <span>서브</span>
          </Button>
          <Button
            size="md"
            color="secondary"
            onClick={(event) => console.log(event.target)}
          >
            <span>메인</span>
          </Button>
        </section>
      </main>
    </>
  );
}

export default App;
