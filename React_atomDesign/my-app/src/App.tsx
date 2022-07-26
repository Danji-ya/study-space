import Button from "./components/Button";

function App() {
  return (
    <>
      <header>
        <h1>Buttons</h1>
      </header>
      
      <main>
        <Button size="sm" onClick={(event) => console.log(event.target)}>
          <span>서브</span>
        </Button>
        <Button size='md' color="secondary" onClick={(event) => console.log(event.target)}>
          <span>메인</span>
        </Button>
      </main>
    </>
  );
}

export default App;
