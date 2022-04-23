class Content {
  constructor(root, props){
    this.root = root;
    this.props = props;
    this.render();
  }

  render() {
    this.root.innerHTML = `
      <h3>${this.props.name}</h3>
      <p>${this.props.name} page</p>
    `;
  }
}

export default Content;