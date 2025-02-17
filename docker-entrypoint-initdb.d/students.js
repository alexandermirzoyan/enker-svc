db.students.remove({});
db.students.insertMany([{
  "email": "mesrobk@gmail.com",
  "firstName": "Mesrob",
  "lastName": "Kyurkchyan",
  "password": "password",
  "learningTargets": [
    "Animation",
    "Game Development",
    "Filmmaking"
  ],
  "location": "Yerevan"
}, {
  "email": "mesrobk2@gmail.com",
  "firstName": "Martin",
  "lastName": "Kyurkchyan",
  "password": "password",
  "learningTargets": [
    "Game Development",
  ],
  "location": "Gyumri"
}, {
  "email": "alexandr.mirzoyan@tumo.org",
  "firstName": "Alexandr",
  "lastName": "Mirzoyan",
  "password": "admin",
  "learningTargets": [
    "Programming",
    "Web Development",
    "Graphic Design"
  ],
  "location": "Yerevan"
}
])

db.students.createIndex({ lastName: "text", firstName: "text", location: "text" })
db.students.createIndex({ learningTargets: 1 })
