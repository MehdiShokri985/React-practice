const response = {
  status: 200,
  data: {
    user: {
      id: 101,
      name: "Ali",
      email: "ali@example.com",
      address: {
        city: "Tehran",
        country: "Iran",
      },
      hobbies: ["music", "movies", "books"],
    },
  },
};

// Destructuring with nested objects and arrays
const {
  data: {
    user: {
      id,
      name: fullName, // تغییر نام متغیر از name به fullName
      address: { city },
      hobbies: [firstHobby, secondHobby], // array destructuring
    },
  },
} = response;

console.log("ID:", id); // 101
console.log("Name:", fullName); // Ali
console.log("City:", city); // Tehran
console.log("First Hobby:", firstHobby); // music
console.log("Second Hobby:", secondHobby); // movies
