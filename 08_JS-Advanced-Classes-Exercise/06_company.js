class Employee {
    constructor(name, salary, position) {
        this.name = name;
        this.salary = salary;
        this.position = position;
    }
}

class Company {
    constructor() {
        this.departments = {}
    }

    addEmployee(...args) {
        if (
            args.some(x => x === undefined || x === null || x === '') || args[1] < 0
        ) {
            throw new Error('Invalid input!')
        }
        const [name, salary, position, department] = args
        const newEmployee = new Employee(name, salary, position)
        if (department in this.departments) {
            this.departments[department].push(newEmployee);
        }
        else {
            this.departments[department] = [newEmployee,];
        }
            return `New employee is hired. Name: ${newEmployee.name}. Position: ${newEmployee.position}`
        }

    DepartmentAverageSalary(department){
        let sum = 0;
        for (const employee of this.departments[department]) {
            sum += employee.salary;
        }
        return sum / this.departments[department].length;
    }

    bestDepartment(){
        let result = []
        let departmentArray = []
        for (const department of Object.keys(this.departments)) {
            let element = [department, this.DepartmentAverageSalary(department)]
            departmentArray.push(element);
        }
        departmentArray.sort((a, b) => b[1] - a[1])
        const bestDepartmentName = departmentArray[0][0]
        result.push(`Best Department is: ${bestDepartmentName}`)
        result.push(`Average salary: ${departmentArray[0][1].toFixed(2)}`)

        this.departments[bestDepartmentName]
            .sort((a, b) => a.name.localeCompare(b.name))
            .sort((a, b) => b.salary - a.salary);

        for (const employee of this.departments[bestDepartmentName]) {
            result.push(`${employee.name} ${employee.salary} ${employee.position}`)
        }
        return result.join('\n');
    }
}


let c = new Company();
console.log(c.addEmployee("Stanimir", 2000, "engineer", "Human resources"));


// let expected1 = "New employee is hired. Name: Stanimir. Position: engineer";
