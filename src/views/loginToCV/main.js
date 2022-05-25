let experienceCard = document.querySelectorAll(".experienceItem");
let experienceContainer = [];
let questionIcon;
let questionIconAll = document.querySelectorAll(".experienceItem button");

for (let i = 0; i < experienceCard.length; i++) {
  experienceCard.forEach((button) => {
    button.addEventListener("click", function () {
      experienceCard.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
      questionIcon = this.querySelector("button");

      questionIconAll.forEach((btn) =>
        btn.classList.remove("activeQuestionBtn")
      );
      questionIcon.classList.add("activeQuestionBtn");
    });
  });
}

console.log(questionIconAll);
