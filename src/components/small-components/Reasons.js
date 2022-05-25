import Nito from "../ComponentBase.js";

export default class Reasons extends Nito.Component {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    console.log(this.data);
    let docFrag = new DocumentFragment();
    const wrapper = document.createElement("section");
    wrapper.className = "reasonItems";
    docFrag.appendChild(wrapper);

    this.data.map((value, key) => {
      console.log(key + 2);
      return (docFrag.firstChild.innerHTML += `
      <section class="iconBox${key + 1} showOnScroll">
      <img src="${value.img}" alt="icon6" />
      <h3>${value.title}</h3>
      <p>${value.description}</p>
    </section>
      `);
    });

    return docFrag;
  }
}
