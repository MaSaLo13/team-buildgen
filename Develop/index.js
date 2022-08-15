// hold info for questions 
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const makeTeam = require("./src/html-templates");
// const tests = require("./__tests__");
// const tests1 = new tests(); 

const team = []

const init  = () => {
    const createManager = () => {
        inquirer.prompt([
          {
            type: 'input',
            name: 'id',
            message: 'What is the managers id',
          },
          {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
          },
          {
              type: 'input',
              name: 'officeNumber',
              message: 'What is the managers office number?',
            },
        ])
        .then(answers => {
            const manager = new Manager (
                answers.id,
                answers.name,
                answers.email,
                answers.officeNumber,
            )
            teamMemberObjArr.push(manager)
            addEmployees()
          });
    }

    function addEmployees() {
        inquirer.prompt([
            {
                type: 'list',
                message: 'What employees would you like to add?',
                name: 'choice',
                choices: ['Engineer', 'Intern', "I'm Done"],
            },
        ])
        .then(answer => {
            switch (answer.choice) {
                case 'Engineer':
                    createEngineer()
                    break;

                case 'Intern':
                    createIntern()
                    break;

                default:
                    buildTeam()
                    break;
            }
        });
    }

    function createEngineer() {
        inquirer.prompt([
            {
              type: 'input',
              name: 'id',
              message: 'What is the engineers id?',
            },
            {
              type: 'input',
              name: 'name',
              message: 'What is the engineers name?',
            }, 
            {
              type: 'input',
              name: 'email',
              message: 'What is the engineers email?',
            }, 
            {
                type: 'input',
                name: 'Github',
                message: 'What is the engineers Github?',
              },
          ])
          .then(answers => {
            const engineer = new Engineer (
                answers.id,
                answers.name,
                answers.email,
                answers.Github,
            )
            teamMemberObjArr.push(engineer)
            addEmployees()
          });

    }

    function createIntern() {
        inquirer.prompt([
            {
              type: 'input',
              name: 'id',
              message: 'What is the interns id?',
            },
            {
              type: 'input',
              name: 'name',
              message: 'What is the interns name?',
            },
            {
              type: 'input',
              name: 'email',
              message: 'What is the interns email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the interns school?',
              },
          ])
          .then(answers => {
            const intern = new Intern (
                answers.id,
                answers.name,
                answers.email,
                answers.school,
            )
            teamMemberObjArr.push(intern)
            addEmployees()
          });

    };
    
        
    function buildTeam() {
      const html = ` 
      <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- CSS only -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      <title>Document</title>
  </head>
  <body>
     ${makeTeam(team)}
  </body>
  </html>
      `
  };
        fs.writeFile("./dist/index.html", renderTeam(teamMemberObjArr), "utf-8")
        // .then(() => console.log('Successfully wrote to index.html'))
        // .catch((err) => console.error(err));

    };

    createManager();



init();

// school

// getSchool()

// getRole()—overridden to return 'Intern'