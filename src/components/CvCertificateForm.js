import Nito from "./ComponentBase.js";

export default class CvCertificateForm extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
    // this.data = data;
  }

  render() {
    console.log(this.props);
    let experienceItemsWrapper = document.createElement("section");
    experienceItemsWrapper.id = "educationInputs";
    experienceItemsWrapper.innerHTML += `  <!-- Сертификат нэмэх / мэдээлэл оруулах -->
    <form id="certificationInput" action="/cv/create/certificate-add/${this.props}" method="POST">
      <section id="courseName" class="longInput">
        <p>Сертификат / Курсын Нэр</p>
        <input type="text" name="certificate_name" placeholder="Сертификат / Курсын нэр" />
      </section>
      <section id="courseProvider" class="longInput">
        <p>Сургууль/ Олгосон газар</p>
        <input type="text" name="school_name" placeholder="Сургууль/ Олгосон газарын нэр" />
      </section>

      <!-- Сертификат авсан он -->
      <div id="certificateDateInfo" class="selectionWrapper">
        <section>
          <label for="enrollmentDate">Элссэн</label>
          <select id="enrollmentDate" name="enrolled_date">
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
          <label for="graduateDate">Төгссөн</label>
          <select id="graduateDate" name="graduate_date">
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

        <!-- Хадгалах товч -->
        <button class="activeButton type="button" class="saveButton primaryButton" onclick="dissapearFrom()">
          <i class="fa-solid fa-check"><span class="saveButtonText">Хадгалах</span></i>
        </button>
      </div>
    </form>`;

    return experienceItemsWrapper;
  }
}
