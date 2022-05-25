import Nito from "./ComponentBase.js";

export default class CvSocialLinksForm extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
    // this.data = data;
  }

  render() {
    console.log(this.props);
    let experienceItemsWrapper = document.createElement("section");
    experienceItemsWrapper.id = "educationInputs";
    experienceItemsWrapper.innerHTML += `  <!-- Social link нэмэх / мэдээлэл оруулах -->
    <form id="socialLinkInput" class="selectionWrapper" method="POST" action="/cv/create/social_links-add/${this.props}">
      <section id="socialForm">
        <section>
          <label for="linkType">Төрөл</label>
          <select id="linkType" name="link_title">
            <option value="" disabled selected>Cонгох</option>
            <option value="Portfolio">Portfolio</option>
            <option value="Linkedin">Linkedin</option>
            <option value="Facebook">Facebook</option>
            <option value="Website">Website</option>
            <option value="Git">Git</option>
            <option value="OtherLink">Other Link</option>
          </select>
        </section>
        <section>
          <p>Линк</p>
          <input id="socialLinkURL" type="text" name="link_url" placeholder="URL Paste хийнэ" value="https://"/>
        </section>
      </section>

      <!-- Хадгалах товч -->
      <button class="activeButton" type="submit" class="saveButton primaryButton" >
        <i class="fa-solid fa-check"><span class="saveButtonText">Хадгалах</span></i>
      </button>
    </form>`;

    return experienceItemsWrapper;
  }
}
