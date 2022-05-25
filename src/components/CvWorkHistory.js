import Nito from "./ComponentBase.js";

export default class CvExperience extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
  }

  render() {
    let experienceItemsWrapper = document.createElement("section");
    experienceItemsWrapper.classList.add("workHistoryItems");
    this.props.map((value) => {
      // console.log(typeof );
      return (experienceItemsWrapper.innerHTML += `  
      <section class="workHistoryItem">
      <article>
      <h2>${value.work_position}</h2>
      <p>Компани: <span>${value.work_company}</span></p>
      </article>
      <button type="button"><i class="fa-solid fa-pen"></i> Edit</button>
      </section>    
      `);
    });
    return experienceItemsWrapper;
  }
}
