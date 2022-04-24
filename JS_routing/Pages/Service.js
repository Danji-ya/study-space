class Service {
  constructor(root, props){
    this.root = root;
    this.props = props;
    this.render();
  }

  render() {
    this.root.innerHTML = `
      <h1>Service</h1>
      <p>Service page</p>
    `;
  }
}

export default Service;