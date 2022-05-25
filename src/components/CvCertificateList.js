import Nito from "./ComponentBase.js";

export default class CvCertificateList extends Nito.Component {
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
      <h2>Сургууль: <span>${value.cer_school_name}</span></h2>
      <p>Суралцсан он: <span>${value.cer_enroll_date}-${value.cer_grad_date}</span></p>
    </article>
    <div class="penBtnWrapper">
      <!-- Click хийх үед тухайн мэдээллийг дахин засах / expand хийгдэнэ -->
      <button class="activeButton" type="button" class="primaryButton">
        <p>${value.cer_title}</p>
      </button>
      <button class="defualtButton" type="button" class="greyButton">
        <i class="fa-solid fa-pen"></i>
      </button>
    </div>`;
    });
    return experienceItemsWrapper;
  }
}
