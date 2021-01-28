class Page {
  template = ``;

  constructor(title) {
    this.template = `
      <div>
        <h1>${title}</h1>
      </div>
    `;
  }

  render() {
    return this.template;
  }
}
