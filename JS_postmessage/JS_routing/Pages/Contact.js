class Contact {
  constructor(root, props){
    this.root = root;
    this.props = props;
    this.render();
  }

  render() {
    this.root.innerHTML = `
      <h1>Contact</h1>
      <p>Contact page</p>
    `;
  }
}

export default Contact;