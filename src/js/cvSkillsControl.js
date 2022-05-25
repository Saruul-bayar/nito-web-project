const sendToDb = () => {
  const userId = parseInt(window.localStorage.getItem("userId"), 10);
  // console.log(userId);
  const urlBase = "http://localhost:5000";
  const skillItems = window.localStorage.getItem("skillList").split(",");
  console.log(skillItems);
  fetch(`${urlBase}/cv/create/skill-list/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(skillItems), // body data type must match "Content-Type" header
  }).then((res) => res.json());
};

// console.log(box);
// let items = [];
// for (let i = 0; i < box.length; i++) {
//   console.log(box[i].innerText);
// };
