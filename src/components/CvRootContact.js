import Nito from "./ComponentBase.js";

export default class CvRootBasics extends Nito.Component {
  constructor(data) {
    super();
    this.props = data;
  }

  render() {
    console.log(this.props.userData);
    let docFrag = new DocumentFragment();

    const wrapper = document.createElement("section");
    docFrag.appendChild(wrapper);
    console.log(this.props);
    this.props.userData.map((value) => {
      return (docFrag.firstChild.innerHTML += `<h3>КОНТАКТ</h3>
      <section id="contactInfoList">
        <p>
          <i class="fa-regular fa-envelope"></i
          >${value.email}
        </p>
        <p><i class="fa-regular fa-phone"></i>+976 - ${value.phone_number}</p>  
      </section>
      <section class="cvMainSmallAdd flexBox">
        <img src="../../img/cv/cv_info_add.png" alt="add" />
        <a href="/cv/create/social_links">
        <button>
        <i class="fa-solid fa-circle-plus"></i>Холбоос нэмэх
        </button>
        </a>
      </section>
      `);
    });
    // this.props.socialLinksListData.map((link) => {
    //   return (docFrag.firstChild.innerHTML += `
    //   <section id="contactInfoList">
    //   <p>
    //     <i class="fa-regular fa-envelope"></i
    //     >${link.link_title}
    //   </p>
    //   <p><i class="fa-regular fa-phone"></i>+976 - ${link.link_url}</p>
    // </section>
    // <section class="cvMainSmallAdd flexBox">
    //   <img src="../img/cv/cv_info_add.png" alt="add" />
    //   <button>
    //     <i class="fa-solid fa-circle-plus"></i>Холбоос нэмэх
    //   </button>
    // </section>
    //   `);
    // });
    return docFrag;
  }
}
