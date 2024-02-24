class Home {
  constructor(root, props){
    this.root = root;
    this.props = props;
    this.render();
  }

  render() {
    this.root.innerHTML = `
      <h1>Home</h1>
      <p>Home page</p>
    `;
  }
}

export default Home;