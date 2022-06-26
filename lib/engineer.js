const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(id, name, email, Github){
        super(id, name, email);
    this.gitHub = Github;
    }
    getRole() {
    return "Engineer";
    }
}

module.exports = Engineer