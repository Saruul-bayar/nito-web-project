import Nito from "./ComponentBase.js";

export default class CvExperienceDuration extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
    // this.data = data;
  }

  render() {
    // console.log();
    let experienceItemsWrapper = document.createElement("section");
    experienceItemsWrapper.classList.add("experienceItems");
    this.props.jobsData.map((value) => {
      // console.log(typeof );
      return (experienceItemsWrapper.innerHTML += `      
      <section class="experienceItem" onclick="changeChecked(${value.job_id})">
      <section class="top">
        <img src="../../img/cv/${value.img}" alt="${value.job_title}"/>
        <section>
          <article class="experienceTitle">
          <h2>${value.job_title}</h2>
        </article>
        <p>${value.short_info}</p>
      </section>
      <section class="questionIcon">?</section>
      </section>
      <section class="expHiddenContent">
        <p>${value.description}</p>
        <form class="inputForm" action="/cv/create/experience-add/${value.job_title}" method="POST">
            <input type="text" name="job_title" value="${value.job_title}"></input>
            <button>HADGALAH</button>
        </form>
      </section>
    </section>
      `);
    });
    return experienceItemsWrapper;
  }
}
