import Nito from "./ComponentBase.js";

export default class CvRootEducation extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
  }

  render() {
    console.log(this.props);
    let docFrag = new DocumentFragment();
    const wrapper = document.createElement("section");
    docFrag.appendChild(wrapper);
    docFrag.firstChild.innerHTML += `
      <section id="educationInfo" class="cvMainInfoItem flexBox">
      <h3>БОЛОВСРОЛ</h3>
      <section class="cvMainBigAdd flexBox">
        <img src="../../img/cv/cv_info_add.png" alt="add" />
        ${this.props.map((value) => {
          return `
          <h2>${value.enrolled_date} - ${value.grad_date}</h2>
          <h4>${value.school_name}</h4>
          <h4>${value.education_level}</h4>
          <h4>${value.more_about_work}</h4>
          `;
        })}
        <a href="/cv/create/education">
        <button>
        <i class="fa-solid fa-circle-plus"></i> Болвсрол нэмэх
        </button>
        </a>
      </section>
    </section>
      `;
    return docFrag;
  }
}
