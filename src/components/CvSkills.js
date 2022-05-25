import Nito from "./ComponentBase.js";

export default class CvSkills extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
  }

  render() {
    let experienceItemsWrapper = document.createElement("section");
    experienceItemsWrapper.id = "skillItems";
    this.props.map((value, key) => {
      return (experienceItemsWrapper.innerHTML += `      
      <div class="skillInputItem inputButton">
      <button
        class="defualtButton"
        type="button"
        onclick="setActivated(${key})"
      >
        <span class="selectionButtonText">${value.skill_title}</span>
        <i class="fa-solid fa-circle-plus"></i>
      </button>
    </div>
      `);
    });
    return experienceItemsWrapper;
  }
}
