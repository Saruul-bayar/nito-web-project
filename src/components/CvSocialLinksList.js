import Nito from "./ComponentBase.js";

export default class CvSocialLinksList extends Nito.Component {
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
      <h2>${value.link_title}</h2>
      <a href="${value.link_url}"
        >${value.link_url}</a
      >
    </article>
    <button type="button" class="greyButton">
      <i class="fa-solid fa-pen"></i>
    </button>`;
    });
    return experienceItemsWrapper;
  }
}
