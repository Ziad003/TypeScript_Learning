//union |
type userRole = "admin" | "user" | "guest";

const getDashboard = (role: userRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  }
};

getDashboard("admin");

//intersection &

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const Chowdhury: EmployeeManager = {
  name: "Chd",
  id: "21",
  phoneNo: "017245234",
  designation:'Manager',
  teamSize:10
};
