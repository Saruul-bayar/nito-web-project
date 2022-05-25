// <course-card></course-card>
import { html } from "./utils.js";

export default class SingUp extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.

    //shadowroot
    this.MyShadowRoot = this.attachShadow({ mode: "open" });

    //properties
    this.sureName = this.getAttribute("sureName");
    this.name = this.getAttribute("name");
    this.email = this.getAttribute("email");
    this.password = this.getAttribute("password");

    //this.classes = this.getAttribute("classes");
    console.log(this.sureName);
    console.log(this.name);
    this.MyShadowRoot.innerHTML = html`
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

        :root {
          --textColor: #edf0f1;
          --greyBg: #24252a;
          --blueColor: #0088a9;
          --orangeColor: rgb(255, 166, 0);
          --glassDark: rgba(0, 0, 0, 0.623);
          --signGlass: rgba(0, 0, 0, 0.6);
          --signInBg: grey;
          --whiteBg: white;
        }
        .signInContainer {
          width: 100%;
          height: 800px;
          background-image: url("../../img/Home/skyBuilding.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .darkGlassSignUp {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 800px;
          background-color: var(--glassDark);
        }
        .signInPage {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          text-align: center;
          font-family: "Montserrat", sans-serif;
          background-color: var(--signGlass);
          color: var(--textColor);
          width: 450px;
          height: 600px;
          border-radius: 30px;
          padding: 20px 30px;
          margin: 0 10px;
        }
        .signInPage input {
          background-color: rgba(255, 255, 255, 0.75);
        }
        .signInPage .chooseWhich {
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .signInPage h1 {
          font-size: 24px;
        }
        .signInPage a {
          color: var(--orangeColor);
          margin: 0 5px;
        }
        .chooseWhich li {
          list-style: none;
        }
        .signInPage a:hover {
          color: var(--blueColor);
        }
        .activeLink a {
          color: var(--blueColor);
        }
        input {
          width: 100%;
          padding: 10px;
          border-radius: 5px;
          border: 1px solid rgb(195, 195, 195);
        }
        .inputForm {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;
          height: 50%;
        }
        .orSection {
          display: flex;
          flex-direction: row;
          justify-content: center;
          width: 100%;
          border-top: 1px dashed var(--whiteBg);
          border-bottom: 1px dashed var(--whiteBg);
        }

        .zuraas1 {
          width: 11vw;
          border: 1px solid black;
          border-top: none;
          border-right: none;
          border-left: none;
        }
        .zuraas2 {
          width: 11vw;
          border: 1px solid black;
          padding: 0%;
          border-top: none;
          border-right: none;
          border-left: none;
        }

        @media only screen and (max-width: 600px) {
          .signInPage p,
          a {
            font-size: 12px;
          }
          .signInPage h1 {
            font-size: 16px;
          }
          button {
            font-size: 12px;
          }
        }
      </style>
      <section class="signInContainer">
        <section class="darkGlassSignUp">
          <section class="signInPage">
            <h1>Бүртгүүлэх</h1>
            <p>
              Нитод бүртгүүлээд технологи инновацийн тэргүүлэгчдээс ажлын санал
              хүлээн ав
            </p>
            <section class="chooseWhich">
              <section class="activeLink">
                <a href="signUp.html">Мэргэжилтнээр</a>
              </section>
              <section>
                <a href="signUpCompany.html">Компаниар</a>
              </section>
            </section>
            <button><i class="fa-brands fa-google"></i> Google</button>
            <section class="orSection">
              <p>эсвэл</p>
            </section>
            <form class="inputForm" action="/user/create" method="POST">
              <p>Нэр</p>
              <input
                type="text"
                name="first_name"
                placeholder="Нэр"
                value="${this.name}"
              />
              <p>Овог</p>
              <input
                type="text"
                name="last_name"
                placeholder="Овог"
                value="${this.sureName}"
              />
              <p>Имэйл</p>
              <input
                type="email"
                name="email"
                placeholder="Имэйл"
                value="${this.email}"
              />
              <p>Нууц үг</p>
              <input
                type="password"
                name="password"
                placeholder="8-аас цөөнгүй"
                value="${this.password}"
              />
              <button>Бүртгүүлэх</button>
            </form>
            <section class="chooseWhich">
              <p>Бүртгэлтэй юу?</p>
              <a href="signIn.html">Нэвтрэх</a>
            </section>
          </section>
        </section>
      </section>
    `;

    this.addEventListener(
      "click",
      //   e => {
      //       alert(`${this.courseId} - ${this.courseName}`);
      //       this.classList.add("clicked");
      //   }
      this.ShowCourseName
    );
  }
  check(value) {
    console.log("hi");
  }
  //   ShowCourseName(e) {
  //   alert(`${this.sureName} - ${this.name}`);

  //   this.classList.add("clicked");
  // }
  //   connectedCallback() {
  //     //   this.shadowRoot.querySelector(".courseId").addEventListener("click",
  //     //       e => {
  //     //           alert(this.courseId);
  //     //       })
  //   }

  //   disconnectedCallback() {}

  //   attributeChangedCallback(attrName, oldVal, newVal) {}
}

window.customElements.define("sing-up", SingUp);
