var userList = {
  "people": [
    {
      firstName: "Fred",
      lastName: "Smith",
      dateOfBirth: 1980,
      spokenLanguages: {
        native: "English",
        fluent: "Spanish",
        intermediate: "Chinese"
      }
    },
    {
      firstName: "Monica",
      lastName: "Taylor",
      dateOfBirth: 1975,
      spokenLanguages: {
        native: "Spanish",
        fluent: "English",
        intermediate: "French"
      }
    },
    {
      firstName: "Maurice",
      lastName: "Edelson",
      dateOfBirth: 1992,
      spokenLanguages: {
        native: "English",
        fluent: "Spanish",
      }
    },
    {
      firstName: "Kelly",
      lastName: "Lang",
      dateOfBirth: 1982,
      spokenLanguages: {
        native: "English",
        fluent: "German",
        intermediate: "Dutch"
      }
    }
  ]
};

var output = "";

const table = document.getElementById("employee");

for (i in userList.people) {
  let {firstName, lastName, dateOfBirth, spokenLanguages} = userList.people[i];
  table.innerHTML += `
  <tr>
  <td>${firstName}</td>
  <td>${lastName}</td>
  <td>${dateOfBirth}</td>
  <td>${spokenLanguages.native}</td>
  <td>${spokenLanguages.fluent}</td> 
  <td>${spokenLanguages.intermediate}</td>
  </tr>
  `
  if(!userList.people[i]){
    table.innerHTML = "<td>N/A</td>";
  }

  table.innerHTML += "</table>";

}
