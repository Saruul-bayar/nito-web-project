import Nito from "./ComponentBase.js";

export default class CvExperience extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
    // this.data = data;
  }

  render() {
    let experienceItemsWrapper = document.createElement("section");
    experienceItemsWrapper.classList.add("experienceItems");
    this.props.jobsData.map((value) => {
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
        <form id="profession" class="inputForm" action="/cv/create/experience-add/profession/${
          value.job_title
        }/${this.props.userId}/${value.job_id}" method="POST">
          <section id="specializationSelect" class="longInput">
          <label for="levels">Зэрэг</label>
          <select id="specificationSelect" name="experience_specialization">
            <option value="" disabled selected>
              Сонгох
            </option>
            ${this.props.jobTitlesData.map((title) => {
              if (value.job_id == title.job_id)
                return `
                <option value="${title.specification_title}">${title.specification_title}</option>`;
            })}
          </select>
          <section id="durationSelect" class="longInput">
          <label for="levels">Зэрэг</label>
          <select id="levels" name="experience_duration">
            <option value="" disabled selected>Сонгох</option>
            <option value="Оюутан">Оюутан</option>
            <option value="Төгсөх курс">Төгсөх курс</option>
            <option value="1 жил">1 жил</option>
            <option value="2 жил">2 жил</option>
            <option value="3 жил">3 жил</option>
            <option value="4 жил">4 жил</option>
            <option value="5 жил">5 жил</option>
            <option value="6 жил">6 жил</option>
            <option value="7 жил">7 жил</option>
            <option value="8 жил">8 жил</option>
            <option value="9 жил">9 жил</option>
            <option value="10+ жил">10+ жил</option>
          </select>
        </section>
        </section>
        <button type="submit">HADGALAH</button>
        </form>
      </section>
    </section>
      `);
    });
    return experienceItemsWrapper;
  }
}
