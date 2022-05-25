// <course-card></course-card>
import { html } from "./utils.js";

export default class Footer extends HTMLElement {
  constructor() {
    super();
    this.MyShadowRoot = this.attachShadow({ mode: "open" });

    this.MyShadowRoot.innerHTML = html`
      <script
        src="https://kit.fontawesome.com/ce25a366df.js"
        crossorigin="anonymous"
      ></script>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

        :root {
          --textColor: #edf0f1;
          --greyBg: #24252a;
          --blueColor: #0088a9;
          --titleColor: #ffc000;
        }

        * {
          box-sizing: border-box;
          margin: 0%;
          padding: 0%;
        }

        li,
        a {
          color: var(--textColor);
          text-decoration: none;
        }

        footer {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 30px 10%;
          font-family: "Montserrat", sans-serif;
          background-color: var(--greyBg);
        }

        .footerLogo img {
          width: 150px;
        }

        footer li,
        a {
          list-style: none;
          transition: all 0.3s ease 0s;
        }

        footer li,
        a:hover {
          color: var(--blueColor);
        }

        footer section h4 {
          color: var(--titleColor);
        }

        footer ul li {
          margin: 10px 0;
        }

        .links {
          display: flex;
          flex-direction: row;
        }

        .links section {
          margin: 0px 40px;
        }

        .copyright {
          font-family: "Matserrat", sans-serif;
          color: var(--textColor);
          background-color: var(--greyBg);
          padding: 20px 10%;
        }

        .copyright p {
          margin-top: 20px;
        }

        /* responsive css */
        @media screen and (max-width: 700px) {
          .footerLogo img {
            width: 110px;
          }
          .links section {
            margin: 0px 15px;
          }
        }
        @media screen and (max-width: 500px) {
          .footerLogo {
            margin-bottom: 30px;
          }
          .footerLogo img {
            width: 100px;
          }
          footer {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: 30px 10%;
          }
          .links {
            display: flex;
            flex-direction: column;
          }
          .links section {
            margin: 15px 0px;
          }
          .copyright p {
            font-size: 13px;
          }
        }
      </style>
      <footer>
        <a class="footerLogo" href="index.html"
          ><img src="../img/Home/nitoLogo.svg" alt="nitoLogo"
        /></a>
        <section class="links">
          <section>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about-us">Бидний тухай</a></li>
              <li><a href="/contact-us">Холбогдох</a></li>
              <li><a href="/blogs">Блог</a></li>
              <li><a href="/sign-in">Миний CV</a></li>
              <li><a href="loginToCV/jobs.html">Ажил хайх</a></li>
            </ul>
          </section>
          <section>
            <h4>Socials</h4>
            <ul>
              <li>
                <i class="fa-brands fa-facebook"></i>
                <a href="https://www.facebook.com/NITO.ONE/">facebook</a>
              </li>
              <li>
                <i class="fa-brands fa-instagram"></i>
                <a href="https://www.instagram.com/nito.app/">instagram</a>
              </li>
              <li>
                <i class="fa-brands fa-twitter"></i>
                <a href="https://twitter.com/nitoapp">twitter</a>
              </li>
              <li>
                <i class="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/company/nitotech/"
                  >linkedin</a
                >
              </li>
            </ul>
          </section>
        </section>
      </footer>
      <section class="copyright">
        <hr />
        <p>© 2021 Nito Pte Ltd. All rights reserved</p>
      </section>
    `;
  }

  connectedCallback() {}
}

window.customElements.define("nito-footer", Footer);
