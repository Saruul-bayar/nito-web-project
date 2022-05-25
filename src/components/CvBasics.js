import Nito from "./ComponentBase.js";

export default class CvBasics extends Nito.Component {
  constructor(data) {
    super();
    this.data = data;
  }

  render() {
    console.log(this.data);
    let docFrag = new DocumentFragment();

    const wrapper = document.createElement("section");
    docFrag.appendChild(wrapper);

    this.data.map((value) => {
      return (docFrag.firstChild.innerHTML += `
      <form class="inputForm" action="/cv/create/basics/${value.id}" method="POST">
      <section class="nameInput input">
        <p>Нэр</p>
        <input
          id="cvFirstNameInput"
          type="text"
          name="first_name"
          placeholder="Нэр"
          value="${value.first_name}"
        />
      </section>
      <section class="nameInput input">
        <p>Овог</p>
        <input
          id="cvLastnameInput"
          type="text"
          name="last_name"
          placeholder="Овог"
          value="${value.last_name}"/>
      </section>
      <section class="nameInput input">
        <p>Имэйл</p>
        <input
          id="cvEmailInput"
          type="email"
          name="email"
          placeholder="Имэйл"
          value="${value.email}"
          />
      </section>
      <section class="nameInput input">
        <p>Утасны дугаар</p>
        <input
          id="cvPhoneNumber"
          type="text"
          name="phone_number"
          placeholder="Утасны дугаар"
          value="${value.phone_number}"
        />
      </section>
      <section class="textAreaInput">
        <p>Миний тухай</p>
        <textarea id="morePersonalInfo" cols="75" rows="8" name="more_info">
Internship, Software / Hardware  - чиглэлээр ажиллах сонирхолтой ба 1,000,000₮ цалин хүлээж байгаа.</textarea
        >
      </section>
      <button id="inputBtn">Хадгалах</button>
    </form>
      `);
    });
    return docFrag;
  }
}
