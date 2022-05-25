import Nito from "../ComponentBase.js";

export default class Offers extends Nito.Component {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    console.log(this.data);
    let docFrag = new DocumentFragment();
    const wrapper = document.createElement("section");
    wrapper.className = "offerItems";
    docFrag.appendChild(wrapper);

    this.data.map((value, key) => {
      console.log(key + 2);
      return (docFrag.firstChild.innerHTML += `
      <section class="suggestBox${key + 1}  showOnScroll">
          <img src="${value.img}" alt="${value.title}" />
          <h3>${value.title}</h3>
          <p>${value.description}</p>
        </section>
      `);
    });

    return docFrag;
  }
}
