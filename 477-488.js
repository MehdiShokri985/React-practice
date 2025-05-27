//#region  1 Arrow Function
const functionName = (parameters) => {
  // function body
};

const add = (a, b) => a + b;
console.log(add(3, 5)); // 8

class UserManager {
  constructor(users) {
    this.users = users;
  }

  filterAndPrint() {
    const activeUsers = this.users.filter((user) => user.active);

    activeUsers.forEach((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toUpperCase();
      console.log(`ACTIVE USER: ${fullName}`);
    });
  }
}

const users = [
  { firstName: "John", lastName: "Doe", active: true },
  { firstName: "Jane", lastName: "Smith", active: false },
  { firstName: "Ali", lastName: "Rezaei", active: true },
];

const manager = new UserManager(users);
manager.filterAndPrint();

//  🔎 نکات مهم در این مثال:
// ✅ استفاده از Arrow Function در:

//     .filter(user => user.active) — تابع فیلتر کوتاه و تمیز.

//     .forEach(user => { ... }) — چون Arrow Function از this بیرونی (یعنی UserManager) استفاده می‌کند، نیازی به bind(this) نیست.

// ✅ خروجی کنسول:

//#endregion

