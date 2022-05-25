import Nito from "./ComponentBase.js";

export default class CvExperienceList extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
    // this.data = data;
  }

  render() {
    console.log(this.props);
    let experienceItemsWrapper = document.createElement("section");
    experienceItemsWrapper.classList.add("experienceItems");
    this.props.map((value) => {
      return (experienceItemsWrapper.innerHTML += `
      <article>
            <h2>${value.exp_profession}</h2>
            <p>Нийт туршлага: <span>${value.exp_duration}</span></p>
          </article>
          <div class="penBtnWrapper">
            <!-- Click хийх үед тухайн мэдээллийг дахин засах / expand хийгдэнэ -->
            <button type="button" class="primaryButton">
              <p>
                ${value.exp_specialization}
                <span><i class="fa-solid fa-circle-plus"></i></span>
              </p>
            </button>
            <button type="button" class="greyButton">
              <i class="fa-solid fa-pen"></i>
            </button>
          </div>
    `);
    });
    return experienceItemsWrapper;
  }
}
