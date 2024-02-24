class NotFound {
  constructor(root, props){
    this.root = root;
    this.props = props;
    this.render();
  }

  render() {
    this.root.innerHTML = `
      <h1>Not Found</h1>
      <p>Not Found page</p>
    `;
  }
}

export default NotFound;