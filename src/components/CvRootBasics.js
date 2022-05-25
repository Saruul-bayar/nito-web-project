import Nito from "./ComponentBase.js";

export default class CvRootBasics extends Nito.Component {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    console.log(this.data);
    let docFrag = new DocumentFragment();

    const wrapper = document.createElement("section");
    docFrag.appendChild(wrapper);
    console.log(this.props);
    this.data.map((value) => {
      return (docFrag.firstChild.innerHTML += `
      <h3>МИНИЙ ТУХАЙ</h3>
      <p>${value.more_info}</p>
      <section class="cvMainMediumAdd flexBox">
        <img src="../../img/cv/cv_info_add.png" alt="Add" />
        <a href="/cv/create/basics">
        <button>
        <i class="fa-solid fa-circle-plus"></i> Туршалага нэмэх
        </button>
        </a>
      </section>
      `);
    });
    return docFrag;
  }
}
