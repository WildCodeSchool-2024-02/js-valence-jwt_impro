const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const [result] = await this.database.query(
      `insert into ${this.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
    return result.insertId;
  }
}

module.exports = UserRepository;
