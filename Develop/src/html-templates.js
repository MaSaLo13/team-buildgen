const makeTeam = team => {

  const generateManagerCard = manager => {
    return `
         <div class="card" style="width: 18rem;">
        <div class="card-body bg-secondary text-light"> 
          <h3 class="card-title">${manager.name}</h3>
          <h5> Manager </h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> ID: ${manager.id}</li>
          <a href="mailto:${manager.email}"><li class="list-group-item"> Email: ${manager.email}</li></a>
          <li class="list-group-item"> Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>`
  }

  const generateEngineerCard = engineer => {
    return `
       <div class="card" style="width: 18rem;">
      <div class="card-body bg-secondary text-light">
        <h3 class="card-title"> ${engineer.name}</h3>
        <h5> Engineer </h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> ID: ${engineer.id}</li>
        <a href="mailto:${engineer.email}"><li class="list-group-item">Email: ${engineer.email}</li></a>
        <li class="list-group-item">GitHub: https://github.com/${engineer.github}</li>
      </ul>
    </div>`
  }

  const generateInternCard = intern => {
    return `
     <div class="card" style="width: 18rem;">
    <div class="card-body bg-secondary text-light"> 
      <h3 class="card-title">${intern.name}</h3>
      <h5> Intern </h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"> ID: ${intern.id}</li>
      <a href="mailto:${intern.email}"><li class="list-group-item"> Email: ${intern.email}</li></a>
      <li class="list-group-item"> School: ${intern.school}</li>
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
