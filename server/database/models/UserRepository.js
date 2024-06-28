const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (email, hashedPassword) values (?, ?)`,
      [user.email, user.hashedPassword]
    );
    return result.insertId;
  }

  async findUserWithPassword(email) {
    const [result] = await this.database.query(
      `select email, hashedPassword from ${this.table} where email = ?`,
      [email]
    );
    return result?.[0];
  }
}

module.exports = UserRepository;
