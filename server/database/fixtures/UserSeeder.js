const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    // Call the constructor of the parent class (AbstractSeeder) with appropriate options
    super({ table: "user", truncate: true });
  }

  // The run method - Populate the 'user' table with fake data

  run() {
    // Generate and insert fake data into the 'user' table
    for (let i = 0; i < 10; i += 1) {
      // Generate fake user data
      const fakeUser = {
        email: this.faker.internet.email(), // Generate a fake email using faker library
        hashedPassword:
          "$argon2id$v=19$m=65536,t=5,p=1$4wIOF9zujOe6bLo8me5Kow$MKn2eARXe4aYOaJ7DIiRs81r24aToON9JofHzfnbmYk", // Generate a fake password using faker library
        refName: `user_${i}`, // Create a reference name for the user
      };

      // Insert the fakeUser data into the 'user' table
      this.insert(fakeUser); // insert into user(email, password) values (?, ?)
    }
  }
}

// Export the UserSeeder class
module.exports = UserSeeder;
