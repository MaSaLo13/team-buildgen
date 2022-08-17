// holds cards for team

const makeTeam = team => {

  const generateManagerCard = manager => {
    return `
         <div class="card" style="width: 18rem;">
        <div class="card-body"> Manager
          <h5 class="card-title">${manager.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> ID: ${manager.id}</li>
          <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
          <a href="mailto:${manager.email}"><li class="list-group-item"> Email: ${manager.email}</li></a>
        </ul>
      </div>`
  }

  const generateEngineerCard = engineer => {
    return `
       <div class="card" style="width: 18rem;">
      <div class="card-body"> Engineer
        <h5 class="card-title"> ${engineer.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> ID: ${engineer.id}</li>
        <li class="list-group-item">GitHub: https://github.com/${engineer.github}</li>
        <a href="mailto:${engineer.email}"><li class="list-group-item">Email: ${engineer.email}</li></a>
      </ul>
    </div>`
  }

  const generateInternCard = intern => {
    return `
     <div class="card" style="width: 18rem;">
    <div class="card-body"> Intern
      <h5 class="card-title">${intern.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> ID: ${intern.id}</li>
      <li class="list-group-item"> School: ${intern.school}</li>
      <a href="mailto:${intern.email}"><li class="list-group-item"> Email: ${intern.email}</li></a>
    </ul>
  </div>`
  }
  const html = []

  html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
  )

  html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineerCard(engineer))
  )

  html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateInternCard(intern))
  )

  return html.join("")
}





module.exports = makeTeam;

//need to do this for engineer and intern