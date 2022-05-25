import Nito from "./ComponentBase.js";

export default class WorkChoices extends Nito.Component {
  constructor(data) {
    super();
    this.data = data;
    this.inputData = [];
  }
  toggleInput(value) {
    this.inputData.push(value);
    // console.log(this.inputData);

    let btn = getElementById(`${value._id}`);
    console.log(btn);
    // btn.addEventListener("click", () => {
    //   console.log("hihihi");
    // });
  }
  render() {
    let docFrag = new DocumentFragment();
    const wrapper = document.createElement("section");
    wrapper.className = "blogChatBox";
    docFrag.appendChild(wrapper);

    this.data.map((value) => {
      return (docFrag.firstChild.innerHTML += `
        <div id="asd" class="workInputItem inputButton activeItem">
        <button id="${value._id}"  type="button" onclick="${this.toggleInput(
        value._id
      )}">
          <span class="selectionButtonText">${value.title}</span>
          <i class="fa-solid fa-circle-plus"></i>
        </button>
      </div>
      `);
    });

    return docFrag;
  }
}
