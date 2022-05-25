import Nito from "./ComponentBase.js";

export default class CvEducationList extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
    // this.data = data;
  }

  render() {
    console.log(this.props);
    let experienceItemsWrapper = document.createElement("section");
    experienceItemsWrapper.id = "educationItems";
    this.props.map((value) => {
      experienceItemsWrapper.innerHTML += `<article>
      <h2>${value.specification_name}</h2>
      <p>Суралцсан он: <span>${value.enrolled_date}-${value.grad_date}</span></p>
    </article>
    <div class="penBtnWrapper">
      <!-- Click хийх үед тухайн мэдээллийг дахин засах / expand хийгдэнэ -->
      <button class="activeButton" type="button" class="primaryButton">
        <p>${value.education_level}</p>
      </button>
      <button class="defualtButton" type="button" class="greyButton">
        <i class="fa-solid fa-pen"></i>
      </button>
    </div>`;
    });
    return experienceItemsWrapper;
  }
}
