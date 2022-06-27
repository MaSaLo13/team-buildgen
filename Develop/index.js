// hold info for questions 
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/Manager");
const renderTeam = require("./src/html-templates");
const tests = require("./__tests__");
// const tests1 = new tests(); 

const teamMemberObjArr = []

const init  = () => {
    const createManager = () => {
        inquirer.prompt([
          {
            type: 'input',
            name: 'id',
            message: 'What is the engineer id?',
          },
          {
            type: 'input',
            name: 'name',
            message: 'what is the engineer name?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is the engineer email?',
          },
          {
              type: 'input',
              name: 'officeNumber',
              message: 'What is the engineer office number?',
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
              message: 'What is the engineer id?',
            },
            {
              type: 'input',
              name: 'name',
              message: 'what is the engineer name?',
            },
            {
              type: 'input',
              name: 'email',
              message: 'What is the engineer email?',
            },
            {
                type: 'input',
                name: 'Github',
                message: 'What is the engineer Github?',
              },
          ])
          .then(answers => {
            const Engineer = new Engineer (
                answers.id,
                answers.name,
                answers.email,
                answers.Github,
            )
            teamMemberObjArr.push(Engineer)
            addEmployees()
          });

    }

    function createIntern() {
        inquirer.prompt([
            {
              type: 'input',
              name: 'id',
              message: 'What is the intern id?',
            },
            {
              type: 'input',
              name: 'name',
              message: 'what is the intern name?',
            },
            {
              type: 'input',
              name: 'email',
              message: 'What is the intern email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the intern school?',
              },
          ])
          .then(answers => {
            const Intern = new Intern (
                answers.id,
                answers.name,
                answers.email,
                answers.school,
            )
            teamMemberObjArr.push(Intern)
            addEmployees()
          });

    };
    
        
    function buildTeam() {
        fs.writeFile("./dist/index.html", renderTeam(teamMemberObjArr), "utf-8")
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));

    };

    createManager();

};

init();

// school

// getSchool()

// getRole()—overridden to return 'Intern'