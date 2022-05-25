import Nito from "./ComponentBase.js";

export default class CvEducation extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
    // this.data = data;
  }

  render() {
    let experienceItemsWrapper = document.createElement("section");
    experienceItemsWrapper.id = "educationInputs";
    experienceItemsWrapper.innerHTML += `  <form id="educationForm" method="POST" action="/cv/create/education-add/${this.props}">
    <section id="proffesion" class="longInput">
      <p>Мэргэжил</p>
      <input type="text" placeholder="Мэргжилийн нэр" name="specification_name" />
    </section>
    <section id="school" class="longInput">
      <p>Сургууль</p>
      <input type="text" placeholder="Сургуулийн нэр" name="school_name"/>
    </section>
    <section id="educationLevel" class="longInput">
      <label for="levels">Зэрэг</label>
      <select id="levels" name="education_level">
        <option value="" disabled selected>Сонгох</option>
        <option value="Complete secondary">Complete secondary</option>
        <option value="Associate">Associate</option>
        <option value="Bachelor">Bachelor</option>
        <option value="Master">Master</option>
        <option value="Doctor">Doctor</option>
      </select>
    </section>
    <!-- Одоо сурч байгаа эсэх checkbox -->
    <div id="currentEducationState" class="checkboxInput">
      <input type="checkbox" id="educationState" name="current_state" />
      <label for="educationState">Сурч байгаа</label><br />
    </div>
    <!-- Ажилд орсон, гарсан он -->
    <div id="educationDateInfo" class="selectionWrapper">
      <section>
        <label for="enrolledDate">Элссэн</label>
        <select id="enrolledDate" name="enrolled_date" >
          <option value="" disabled selected>Он сонгох</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
        </select>
      </section>
      <section>
        <label for="gradDate">Төгссөн</label>
        <select id="gradDate" name="grad_date">
          <option value="" disabled selected>Он сонгох</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
        </select>
      </section>
      <!-- Сургуулийн талаар дэлэгрэнгүй -->
      <section id="moreAboutSchool">
        <p>Дэлгэрэнгүй ( Заавал биш )</p>
        <textarea
          name="more_about_work"
          id="moreAboutWork"
          cols="50"
          rows="20"
          placeholder="Суралцаж байх хугацаандаа гаргасан амжилт сайн дурын ажил зэргийн талаар дэлгэрэнгүй бичээрэй. "
        ></textarea>
      </section>
      <!-- Хадгалах товч -->
      <button class="activeButton" type="submit" onclick="dissapearFrom()">
        <i class="fa-solid fa-check"><span class="saveButtonText">Хадгалах</span></i>
      </button>
    </div>
  </form>`;

    return experienceItemsWrapper;
  }
}
