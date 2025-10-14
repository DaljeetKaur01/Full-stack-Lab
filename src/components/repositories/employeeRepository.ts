let employees: any[] = [];

const employeeRepository = {
  getAll() {
    return employees;
  },
  add(employee: any) {
    employees.push(employee);
  },
  remove(name: any) {
    employees = employees.filter((e) => e.name !== name);
  },
};

export default employeeRepository;
