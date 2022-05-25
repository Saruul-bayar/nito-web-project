import Nito from "./ComponentBase.js";

export default class CvRootSkill extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
  }

  render() {
    let docFrag = new DocumentFragment();

    const wrapper = document.createElement("section");
    docFrag.appendChild(wrapper);
    console.log(this.props);
    docFrag.firstChild.innerHTML += `
      <h3>МИНИЙ ТУХАЙ</h3>
      <section class="cvMainMediumAdd flexBox">
        <img src="../../img/cv/cv_info_add.png" alt="Add" />
        ${this.props.map((value) => {
          return `<h1>${value.sk_title}</h1>`;
        })}
        <a href="/cv/create/skill">
        <button>
        <i class="fa-solid fa-circle-plus"></i> Туршалага нэмэх
        </button>
        </a>
      </section>
      `;
    return docFrag;
  }
}
