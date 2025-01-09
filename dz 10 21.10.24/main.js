//  DZ 10.1

const user = {
  nameUser: "Bogdan",
  age: 28,
  location: "Odessa",
  profession: "Front-end developer",

  getInfo: function () {
    return `Name: ${this.nameUser}, Age: ${this.age}, Location: ${this.location}, Profession: ${this.profession}`;
  },
};

console.log(user.getInfo()); 


//  DZ 10.2

const num = [2, 4, 22, 12, 3, 45, 6, 8, 13]
const evenNum = num.filter(num => num % 2 === 0);

console.log(evenNum)


//  DZ 10.3



const contactBook = {

  contacts: [
    { name: "Bogdan", phone: "096 246 45 87", email: "bogdan@gmail.com" },
    { name: "Anna", phone: "063 234 67 89", email: "anna@gmail.com" }
  ],

  findContact: function (name) {
    return this.contacts.find(contact => contact.name === name);
  },

  addContact: function (name, phone, email) {
    this.contacts.push({ name, phone, email });
  }
};


contactBook.addContact("Ivan", "066 567 89 32", "ivan@gmail.com");

const foundContact = contactBook.findContact("Bogdan");

console.log(foundContact);

console.log(contactBook.contacts);






// const contactBook = {
//   contacts: [
//     { name: "Bogdan", phone: "096 246 45 87", email: "bogdan@gmail.com" },
//     { name: "Anna", phone: "063 234 67 89", email: "anna@gmail.com" }
//   ],

 
//   findContact: function (name) {
//     const contact = this.contacts.find(contact => contact.name === name);
//     if (contact) {
//       return `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`;
//     } else {
//       return `Contact with name ${name} not found.`;
//     }
//   },

//   addContact: function (name, phone, email) {
//     this.contacts.push({ name, phone, email });
//     return `Contact ${name} has been added.`;
//   }
// };

// function manageContacts() {
//   const action = prompt("What would you like to do? (find/add)");

//   if (action === "find") {
//     const name = prompt("Enter the name of the contact you're looking for:");
//     alert(contactBook.findContact(name));

//   } else if (action === "add") {
//     const name = prompt("Enter the name of the new contact:");
//     const phone = prompt("Enter the phone number of the new contact:");
//     const email = prompt("Enter the email of the new contact:");
//     alert(contactBook.addContact(name, phone, email));

//   } else {
//     alert("Invalid action. Please enter 'find' or 'add'.");
//   }
// }

// manageContacts();