import Nito from "./ComponentBase.js";

export default class WorkChoices extends Nito.Component {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    let docFrag = new DocumentFragment();
    const wrapper = document.createElement("section");
    wrapper.className = "blogChatBox";
    docFrag.appendChild(wrapper);

    this.data.map((value) => {
      return (docFrag.firstChild.innerHTML += `
        <div class="workInputItem inputButton activeItem">
        <button type="button">
          <span class="selectionButtonText">${value.title}</span>
          <i class="fa-solid fa-circle-plus"></i>
        </button>
      </div>
      `);
    });

    return docFrag;
  }
}
