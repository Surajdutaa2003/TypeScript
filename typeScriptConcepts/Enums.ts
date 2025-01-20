// Define an Enum for user roles
enum Role {
    Student = "STUDENT",
    Admin = "ADMIN"
  }
  
  // Create two objects for Student and Admin login
  const studentUser = {
    username: "student123",
    password: "student@pass",
    role: Role.Student
  };
  
  const adminUser = {
    username: "admin123",
    password: "admin@pass",
    role: Role.Admin
  };
  
  // Function to login and check role
  function login(user: {username: string, password: string, role: Role}, inputUsername: string, inputPassword: string): string {
    if (inputUsername === user.username && inputPassword === user.password) {
      return `Login successful! Welcome, ${user.role === Role.Student ? "Student" : "Admin"}`;
    } else {
      return "Invalid username or password!";
    }
  }
  
  // Test the login system
  console.log(login(studentUser, "student123", "student@pass"));  // Output: Login successful! Welcome, Student
  console.log(login(adminUser, "admin123", "admin@pass"));  // Output: Login successful! Welcome, Admin
  console.log(login(studentUser, "student123", "wrongpass"));  // Output: Invalid username or password!
  