class Sidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="sidebar">
    <div id="backPage">
      <i class="fa fa-solid fa-arrow-left">
        <a href="/cv" class="backButton">Гарах</a></i
      >
    </div>
    <nav id="sidebarItems">
      <ul>
        <li>
          <a class="sidebarItem" href="/cv/create/basics">
            <span class="sidebarNumber">1</span> Үндсэн мэдээлэл
          </a>
        </li>
        <li>
          <a class="sidebarItem" href="/cv/create/experience">
            <span class="sidebarNumber">2</span> Мэрэгжил
          </a>
        </li>
        <li>
          <a class="sidebarItem" href="/cv/create/work_history">
            <span class="sidebarNumber">3</span> Ажлын түүх
          </a>
        </li>
        <li>
          <a class="sidebarItem" href="/cv/create/skill">
            <span class="sidebarNumber">4</span> Чадвар
          </a>
        </li>
        <li>
          <a class="sidebarItem" href="/cv/create/education">
            <span class="sidebarNumber">5</span> Болвсрол
          </a>
        </li>
        <li>
          <a class="sidebarItem" href="/cv/create/certificate">
            <span class="sidebarNumber">6</span> Сертификатууд
          </a>
        </li>
        <li>
          <a class="sidebarItem" href="/cv/create/social_links">
            <span class="sidebarNumber">7</span> Сошиал холбоос
          </a>
        </li>
      </ul>
    </nav>
  </div>
    `;
  }
}

customElements.define("cv-sidebar", Sidebar);

class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="index.html"><img src="../img/Home/nitoLogo.svg" alt="nitoLogo" width="8%" height="auto"></a>
    <img src="../img/Home/employer.svg" alt="employer" width="2%" height="auto">
    <!-- <i class="fa-solid fa-address-book" width="20px" height="20px"></i> -->
    <nav>
        <ul>
            <li><a href="../index.html">Home</a></li>
            <li>
                <ul>
                    <li><a href="../index.html">Ажилтан</a></li>
                    <li><a href="../indexCompany.html">Компани</a></li>
                </ul>
            </li>
            <li><a href="../aboutUs.html">Бидний тухай</a></li>
            <li><a href="../blog.html">Блог</a></li>
            <li><a href="../signIn.html">Нэвтрэх</a></li>
            <li><a href="../signUp.html">Бүртгүүлэх</a></li>
        </ul>
    </nav>
    `;
  }
}

customElements.define("my-header", Header);

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <a href="../index.html"><img src="../img/Home/nitoLogo.svg" alt="nitoLogo" width="8%" height="auto"></a>
    <h4>Quick Links</h4>
    <ul>
        <li><a href="../aboutUs.html">Бидний тухай</a></li>
        <li><a href="#">Холбогдох</a></li>
        <li><a href="../blog.html">Блог</a></li>
        <li><a href="./cv.html">Миний CV</a></li>
        <li><a href="./jobs.html">Ажил хайх</a></li>
    </ul>
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
            <a href="https://www.linkedin.com/company/nitotech/">linkedin</a>
        </li>
    </ul>
    <hr>
    <p>© 2021 Nito Pte Ltd. All rights reserved</p>
    `;
  }
}

customElements.define("my-footer", Footer);
