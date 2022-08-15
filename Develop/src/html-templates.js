// holds cards for team

const makeTeam = team => {
    
    const generateManagerCard = manager => {
        return `
         <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${manager.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.id}</li>
          <li class="list-group-item">${manager.officeNumber}</li>
          <a href="mailto:${manager.email}"><li class="list-group-item">${manager.email}</li></a>
        </ul>
      </div>`
    }
    // const html = [];

    // html.push(team
    //     .filter(employee => employee.getRole() === "Manager")
    //     .map(manager => generateManagerCard(manager))
    // )

    const generateEngineerCard = engineer => {
      return `
       <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${engineer.name}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${engineer.id}</li>
        <li class="list-group-item">${engineer.github}</li>
        <a href="mailto:${engineer.email}"><li class="list-group-item">${engineer.email}</li></a>
      </ul>
    </div>`
  }
  // const html = [];
  // html.push(team
  //     .filter(employee => employee.getRole() === "Engineer")
  //     .map(engineer => generateEngineerCard(engineer))
  // )

  const generateInternCard = intern => {
    return `
     <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${intern.id}</li>
      <li class="list-group-item">${intern.school}</li>
      <a href="mailto:${intern.email}"><li class="list-group-item">${intern.email}</li></a>
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