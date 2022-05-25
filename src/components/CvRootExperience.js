import Nito from "./ComponentBase.js";

export default class CvRootExperience extends Nito.Component {
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
      <section id="experienceInfo" class="cvMainInfoItem flexBox">
      <h3>АЖЛЫН ТУРШЛАГА</h3>
      ${this.props.map((value) => {
        return `
        <h1>${value.emp_date} - ${value.unemp_date}</h1>
        <h2>${value.work_company}</h2>
        <h2>${value.work_position}</h2>
        <p>
        ${value.more_info_work}
        </p>
          
        `;
      })}
      <section class="cvMainMediumAdd flexBox">
        <img src="../../img/cv/cv_info_add.png" alt="add" />
        <a href="/cv/create/experience">
        <button><i class="fa-solid fa-circle-plus"></i> Ажил нэмэх</button>
        </a>
      </section>
    </section>
      `;

    return docFrag;
  }
}
