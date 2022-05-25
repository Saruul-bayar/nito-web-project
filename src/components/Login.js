import { html } from "./utils.js";

export default class Login extends HTMLElement {
  constructor() {
    super();
    //shadowroot
    this.MyShadowRoot = this.attachShadow({ mode: "open" });
    //properties

    this.email = this.getAttribute("email");
    this.password = this.getAttribute("password");
    //this.classes = this.getAttribute("classes");

    this.MyShadowRoot.innerHTML = html`
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
        li,
        a,
        button {
          font-family: "Montserrat", sans-serif;
          font-weight: 500px;
          font-size: 16px;
          color: var(--textColor);
          text-decoration: none;
        }
        button {
          width: 100%;
          padding: 9px 25px;
          background-color: rgba(0, 136, 169, 1);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease 0s;
          margin: 0px 10px;
          color: var(--textColor);
        }
        button:hover {
          background-color: rgba(0, 136, 169, 0.8);
        }
        .signInContainer {
          width: 100%;
          height: 750px;
          background-image: url("img/Home/lookWindow2.jpg");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        .darkGlassSignIn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 750px;
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
          height: 500px;
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
          height: 35%;
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
      <form class="inputForm" action="/user/sign-in" method="POST">
        <p>Имэйл</p>
        <input
          id="emailInput"
          type="email"
          name="email"
          placeholder="Имэйл"
          value="${this.email}"
        />
        <p>Нууц үг</p>
        <input
          id="passwordInput"
          type="password"
          name="password"
          placeholder="8-аас цөөнгүй"
          value="${this.password}"
        />
        <section class="chooseWhich">
          <p>Мартсан?</p>
          <a href="/password-reset">Нууц үг сэргээх</a>
        </section>
        <button id="signInBtn">Нэвтрэх</button>
      </form>
    `;
  }

  connectedCallback() {
    // console.log("HIHI");
    // const setToken = async () => {
    //   this.MyShadowRoot.querySelector('#signInBtn').addEventListener('click', () => {
    //     fetch("http://localhost:5000/user/sign-in", {
    //       method: "POST"
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //       })
    //       .catch((error) => console.log(error));
    //   })
    // };
    // setToken();
    // const getToken = async () => {
    //   let token = localStorage.getItem("token");
    //   let h = new Headers();
    //   h.append("Authorization", `Bearer ${token}`);
    //   let req = new Request(urlBase + "/cv/create/basics", {
    //     headers: h,
    //     method: "GET",
    //   });
    //   await fetch(req)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     })
    //     .catch((error) => console.log(error));
    // };
    // getToken();
  }

  disconnectedCallback() {}

  attributeChangedCallback(attrName, oldVal, newVal) {}
}
window.customElements.define("user-login", Login);
