function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

console.log(uuidv4());

const users = [
  {
    userId: "5dd0421f-8ffb-4586-f92405a2741f",
    name: "Jahirul Islam",
    email: "jahirulislamjantu@gmail.com",
    phone: 8801773427087,
    address: "Narayangonj",
  },
  {
    userId: "afc018ab-7b0a-43c4-546cfc1c963a",
    name: "Sahana Islam",
    email: "sahanaislam@gmail.com",
    phone: 880177771111,
    address: "Dhaka",
  },
  {
    userId: "a79e0da6-3d96-41a7-cea7a20ef19a",
    name: "Amina Akter",
    email: "aminaakter@gmail.com",
    phone: 8801777111545,
    address: "Narayangonj, Dhaka",
  },
  {
    userId: "61197f01-b026-46b1-233757f3317f",
    name: "Noor E Tawhid",
    email: "nooretawhid@gmail.com",
    phone: 8801714454555,
    address: "Narayangonj, Dhaka, Bangladesh",
  },
];


// Easily Travers
    for (let i = 0; i<users.length; i++){
      console.log(users[i].address);
    }

    for(let i in users){
      console.log(users[i].phone);
    }

    for (let students of users){
      console.log(students.userId);
    }



// Filter
console.log("Main User:",  users); 


// Delete
    const isToDelete = "a79e0da6-3d96-41a7-cea7a20ef19a";
    users.splice(1, users.findIndex((item) => item.userId === isToDelete));
    

// Update [o(n)]
    const user = "afc018ab-7b0a-43c4-546cfc1c963a"; //which id to be update
    const isToUpdate = {  //which data to be update
      name: 'MST. Sahana Khatun',
      email: 'mstsahanakhatun@gmail.com',
      address: "Narayangonj, Dhaka, Bangladesh",
    }
    const updatedIndex = users.findIndex((item) => item.userId === user);
    users[updatedIndex] = {
      ...users[updatedIndex],
      ...isToUpdate,
    };

// Create a new one [push o(1), unshift o(n)]
    users.push({
      userId:   uuidv4(),
      name:     'Jahirul Islam Jantu',
      email:    'jahirulislam@gmail.com',
      phone:    +8815526878525,
      address:  'Dhaka, Narayangonj',
    })





console.log("Updated:",  users); 