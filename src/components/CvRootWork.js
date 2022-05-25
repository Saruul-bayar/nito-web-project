import Nito from "./ComponentBase.js";

export default class CvRootWork extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
  }

  render() {
    let docFrag = new DocumentFragment();
    console.log(this.props);
    const wrapper = document.createElement("section");
    docFrag.appendChild(wrapper);
    console.log(this.props);
    this.props.map((value) => {
      return (docFrag.firstChild.innerHTML += `
      <section id="ajliinChiglel">
        <section class="cvIntendedJob">
          <img src="../../img/cv/${value.img}" alt="laptop" />
          <h1>${value.job_title}</h1>
        </section>
      </section>
        `);
    });
    return docFrag;
  }
}
