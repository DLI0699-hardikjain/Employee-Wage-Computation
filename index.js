function employeeAttendance() {
    const isPresent = Math.random() < 0.5;
    const attendance = isPresent ? "Employee is present" : "Employee is absent";
    console.log(attendance);
}
employeeAttendance();