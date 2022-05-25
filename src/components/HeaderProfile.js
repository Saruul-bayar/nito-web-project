// <course-card></course-card>
import { html } from "./utils.js";
const userData = [
  {
    id: 0,
    sureName: "123",
    name: "123",
    email: "123",
    password: "123",
    image: "/img/aboutUsImg/profile1.png",
  },

  {
    id: 1,
    sureName: "Bat",
    name: "Bold",
    email: "bold@gmail.com",
    password: "bold",
    image: "/img/aboutUsImg/profile2.png",
  },

  {
    id: 2,
    sureName: "Suh",
    name: "Anujin",
    email: "anujin@yahoo.com",
    password: "anujin",
    image: "/img/aboutUsImg/profile3.png",
  },
];

export default class HeaderProfile extends HTMLElement {
  constructor() {
    super(); // always call super() first in the ctor.

    //shadowroot
    this.MyShadowRoot = this.attachShadow({ mode: "open" });
    // this.id = localStorage.getItem("userId");
    // this.id = document.cookie;
    // console.log(this.id);

    this.MyShadowRoot.innerHTML = html`
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
        :root {
          --textColor: #edf0f1;
          --greyBg: #24252a;
          --blueColor: #0088a9;
          --orangeColor: rgb(255, 166, 0);
        }

        * {
          box-sizing: border-box;
          margin: 0%;
          padding: 0%;
        }

        li,
        a,
        button {
          font-family: "Montserrat", sans-serif;
          font-weight: 500px;
          font-size: 16px;
          color: var(--textColor);
          text-decoration: none;
        }

        header {
          /* position: fixed;
          top: 0; */
          width: 100%;
          height: 80px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 30px 5%;
          background-color: var(--greyBg);
          position: fixed;
          z-index: 1;
        }

        .logo {
          margin-right: auto;
        }

        .profile img {
          width: 50px;
          height: 50px;
          margin: 5px;
          transition: width 0.5s ease-in-out;
        }

        .checkBtn img {
          width: 50px;
          height: 50px;
          margin-top: 30px;
          transition: width 0.1s ease-in-out;
        }
        .checkBtn img:hover {
          width: 55px;
          height: auto;
        }
        .profile img:hover {
          width: 55px;
          height: auto;
        }

        .logo img {
          width: 130px;
        }

        .navLinks {
          display: flex;
          align-items: center;
        }

        .navLinks li {
          display: inline-block;
          padding: 0px 10px;
        }

        .navLinks li a {
          transition: all 0.3s ease 0s;
        }

        .navLinks li a:hover {
          color: var(--blueColor);
        }

        button {
          padding: 9px 25px;
          background-color: rgba(0, 136, 169, 1);
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease 0s;
          margin: 0px 10px;
        }

        button:hover {
          background-color: rgba(0, 136, 169, 0.8);
        }

        .navLinks .signInLink a {
          color: var(--orangeColor);
          transition: all 0.3s ease 0s;
        }

        .navLinks .signInLink a:hover {
          color: var(--blueColor);
        }

        header .navLinks .navActive {
          color: var(--blueColor);
        }

        .checkBtn {
          display: none;
          font-size: 30px;
          color: white;
          float: right;
          line-height: 80px;
          margin: 10px;
          cursor: pointer;
        }

        #check {
          display: none;
        }

        @media only screen and (max-width: 1050px) {
          .logo img {
            width: 115px;
          }
          header nav a {
            font-size: 0.9rem;
          }
          header button {
            padding: 8px;
            font-size: 0.9rem;
          }
        }
        @media only screen and (max-width: 900px) {
          .checkBtn {
            display: block;
          }
          header .navLinks {
            position: fixed;
            width: 100%;
            height: 100vh;
            background-color: var(--greyBg);
            top: 80px;
            left: -100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            transition: all 0.5s;
          }
          #check:checked ~ ul {
            left: 0;
          }
          header .cta {
            margin-top: 10px;
          }
          header nav .navLinks li {
            margin: 10px 0;
          }
          header nav .navLinks li a {
            font-size: 20px;
          }
          .logo img {
            width: 100px;
          }
        }
      </style>
      <header id="navbar">
        <a class="logo" href="index.html"
          ><img src="img/Home/nitoLogo.svg" alt="nitoLogo"
        /></a>
        <nav>
          <input type="checkBox" id="check" />
          <label for="check" class="checkBtn">
            <img
              src="${userData[JSON.parse(localStorage.getItem("userId"))]
                .image}"
              alt="profile"
            />
            <!-- <i class="fa-solid fa-bars"></i> -->
          </label>
          <ul class="navLinks">
            <li><a class="navActive" href="index.html">Home</a></li>
            <li>
              <ul>
                <li>
                  <a href="#">CV <i class="fa-solid fa-address-book"></i></a>
                </li>
                <li>
                  <a href="#">Ажил хайх <i class="fa-solid fa-building"></i></a>
                </li>
              </ul>
            </li>
            <li><a href="aboutUs.html">Бидний тухай</a></li>
            <li><a href="blog.html">Блог</a></li>
            <li class="signInLink">
              <a
                href="/user/logout"
                method="POST"
                type="submit"
                id="logoutGarah"
                >Гарах</a
              >
            </li>
            <a href="#" class="profile"
              ><img class="profileImg" src="" alt="profile"
            /></a>
          </ul>
        </nav>
      </header>
    `;
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector("#logoutGarah")
      .addEventListener("click", () => {
        localStorage.setItem("userId", null);
        document.cookie = null;
      });
    let lastScrollTop = 0;
    var runner = 0;
    let navbar = this.shadowRoot.getElementById("navbar");
    console.log(navbar);
    window.addEventListener("scroll", function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (runner > -80) {
        runner = runner - 4;
      }
      if (scrollTop > lastScrollTop) {
        navbar.style.top = runner + "px";
      } else {
        runner = 0;
        navbar.style.top = "0px";
      }
      lastScrollTop = scrollTop;
    });
  }
}

window.customElements.define("header-profile", HeaderProfile);
