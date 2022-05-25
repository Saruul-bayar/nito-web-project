import CvBasics from "./components/CvBasics.js";
import CvExperience from "./components/CvExperience.js";
import CvHistory from "./components/CvWorkHistory.js";
import CvSkills from "./components/CvSkills.js";
import CvEducation from "./components/CvEducation.js";
import CvEducationList from "./components/CvEducationList.js";
import CvCertificateForm from "./components/CvCertificateForm.js";
import CvCertificateList from "./components/CvCertificateList.js";
import CvSocialLinksList from "./components/CvSocialLinksList.js";
import CvSocialLinksForm from "./components/CvSocialLinksForm.js";
import CvRootBasics from "./components/CvRootBasics.js";
import CvRootContact from "./components/CvRootContact.js";
import CvRootEducation from "./components/CvRootEducation.js";
import CvRootSkill from "./components/CvRootSkill.js";
import CvRootExperience from "./components/CvRootExperience.js";
import CvRootWork from "./components/CvRootWork.js";
import CvExperienceList from "./components/CvExperienceList.js";
const urlBase = "http://localhost:5000";

// const currentJobId = await fetch(`${urlBase}/cv/job-id`)
//   .then((res) => res.json())
//   .catch((error) => console.log(error));
// console.log(currentJobId);
// GETS CURRENT USER INFORMATION
const userData = await fetch(`${urlBase}/cv/data-user`)
  .then((res) => res.json())
  .catch((error) => console.log(error));

// SET USER ID TO LOCAL STORAGE
let userId = userData[0].id;

if (userId) window.localStorage.setItem("userId", userId);
// ALL JOBS LIST

// JOB ID

// JOB PROFESSION DATA
// const experienceProfessionData = await fetch(
//   `${urlBase}/cv/create/experience-add/profession/${userData[0].id}`
// )
//   .then((res) => res.json())
//   .catch((error) => console.log(error));

// console.log(experienceProfessionData);

// USER JOB

// console.log(userData[0].id);
// SKILLS
// EXPERIENCE DATAS

// console.log(socialLinksListData);
// const skillItems = window.localStorage.getItem("skillList").split(",");
// console.log(educationListData);

// GET ELEMENT BY ID

const basicsRoot = document.getElementById("cvBasicsForm");
const expRoot = document.getElementById("cvExperienceProfession");
const historyRoot = document.getElementById("workHistoryList");
const skillsRoot = document.getElementById("skillsList");
const educationRoot = document.getElementById("educationInputs");
const educationListRoot = document.getElementById("educationSaved");
const cerFormRoot = document.getElementById("certificateItems");
const cerListRoot = document.getElementById("certificateList");
const socialLinksFormRoot = document.getElementById("socialLinksForm");
const socialLinksListRoot = document.getElementById("socialLinkList");
const cvRootBasicsRoot = document.getElementById("aboutMeInfo");
const cvRootEducationRoot = document.getElementById("educationInfo");
const cvRootSkillRoot = document.getElementById("skillInfo");
const cvRootExperienceRoot = document.getElementById("experienceInfo");
const cvRootContactRoot = document.getElementById("contactInfo");
const experienceListRoot = document.getElementById("experienceList");
const cvRootWorkRoot = document.getElementById("cvIntendedJobs");

// ROOT

if (basicsRoot !== null) {
  let userInformation = new CvBasics(userData);
  basicsRoot.appendChild(userInformation.render());
}
if (expRoot !== null) {
  const jobsData = await fetch(`${urlBase}/cv/data-jobs`)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  // JOB TITLES
  const jobTitlesData = await fetch(
    `${urlBase}/cv/create/experience-add/specialization`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  console.log(jobTitlesData);
  let jobsInformation = new CvExperience({ jobsData, jobTitlesData, userId });
  expRoot.appendChild(jobsInformation.render());
}
if (historyRoot !== null) {
  const historyData = await fetch(
    `${urlBase}/cv/create/work_history-data/${userId}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  let historyInfo = new CvHistory(historyData);
  historyRoot.appendChild(historyInfo.render());
}
if (skillsRoot !== null) {
  const skillData = await fetch(
    `${urlBase}/cv/create/skill-data/${userData[0].id}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  let skillsInfo = new CvSkills(skillData);
  skillsRoot.appendChild(skillsInfo.render());
}
if (educationRoot !== null) {
  let educationInfo = new CvEducation(userId);
  educationRoot.appendChild(educationInfo.render());
}
if (educationListRoot !== null) {
  const educationListData = await fetch(
    `${urlBase}/cv/create/education-data/${userId}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  let educationListInfo = new CvEducationList(educationListData);
  educationListRoot.appendChild(educationListInfo.render());
}
if (cerFormRoot !== null) {
  let certificateForm = new CvCertificateForm(userId);
  cerFormRoot.appendChild(certificateForm.render());
}
if (socialLinksFormRoot !== null) {
  let socialLinksForm = new CvSocialLinksForm(userId);
  socialLinksFormRoot.appendChild(socialLinksForm.render());
}
if (cerListRoot !== null) {
  const cerListData = await fetch(
    `${urlBase}/cv/create/certificate-data/${userData[0].id}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  let certificateListInfo = new CvCertificateList(cerListData);
  cerListRoot.appendChild(certificateListInfo.render());
}
if (socialLinksListRoot !== null) {
  const socialLinksListData = await fetch(
    `${urlBase}/cv/create/social_links-data/${userData[0].id}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  let socialLinksListInfo = new CvSocialLinksList(socialLinksListData);
  socialLinksListRoot.appendChild(socialLinksListInfo.render());
}
// ROOT
if (cvRootBasicsRoot !== null) {
  let cvRootBasicsInfo = new CvRootBasics(userData);
  cvRootBasicsRoot.appendChild(cvRootBasicsInfo.render());
}

if (cvRootContactRoot !== null) {
  const socialLinksListData = await fetch(
    `${urlBase}/cv/create/social_links-data/${userId}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  let cvRootContactInfo = new CvRootContact({ userData, socialLinksListData });
  cvRootContactRoot.appendChild(cvRootContactInfo.render());
}

if (experienceListRoot !== null) {
  const userJobData = await fetch(`${urlBase}/cv/data-user-job/${userId}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
  let experienceListInfo = new CvExperienceList(userJobData);
  experienceListRoot.appendChild(experienceListInfo.render());
}

if (cvRootExperienceRoot !== null) {
  const historyData = await fetch(
    `${urlBase}/cv/create/work_history-data/${userId}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  let cvRootExperienceInfo = new CvRootExperience(historyData);
  cvRootExperienceRoot.appendChild(cvRootExperienceInfo.render());
}
if (cvRootSkillRoot !== null) {
  const skillDataUser = await fetch(`${urlBase}/cv/data-user-skill/${userId}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
  console.log(skillDataUser);
  let cvRootSkillInfo = new CvRootSkill(skillDataUser);
  cvRootSkillRoot.appendChild(cvRootSkillInfo.render());
}
if (cvRootEducationRoot !== null) {
  const educationListData = await fetch(
    `${urlBase}/cv/create/education-data/${userId}`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));
  let cvRootEducationInfo = new CvRootEducation(educationListData);
  cvRootEducationRoot.appendChild(cvRootEducationInfo.render());
}
if (cvRootWorkRoot !== null) {
  const jobsData = await fetch(`${urlBase}/cv/data-jobs${userId}`)
    .then((res) => res.json())
    .catch((error) => console.log(error));
  let cvRootWorkInfo = new CvRootWork(jobsData);
  cvRootWorkRoot.appendChild(cvRootWorkInfo.render());
}
