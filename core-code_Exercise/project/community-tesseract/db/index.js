import { open } from "sqlite";
import driver from "sqlite3";

export async function getDBConnection() {
  try {
    const db = await open({
      filename: "db.sqlite",
      driver: driver.Database,
    });

    if (!db) {
      throw new TypeError(`DB Connection expected, got: ${db}`);
    }

    return db;
  } catch (error) {
    console.error(
      `There was an error trying to connect to the DBMS: ${error.message}`,
      error
    );
  }
}

export async function initDB() {
  try {
    const db = await getDBConnection();

    await db.exec(`
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY,
        title TEXT,
        description TEXT,
        is_done INTEGER DEFAULT 0,
        date_of_edit TIMESTAMP, 
        date_of_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TRIGGER IF NOT EXISTS update_date_of_edit_in_todos AFTER UPDATE ON todos
      BEGIN
        update todos SET date_of_edit = datetime('now','localtime') WHERE id = NEW.id;
      END;

    `);

    await db.close();
  } catch (error) {
    console.error(
      `There was an error trying to init the DB: ${error.message}`,
      error
    );
  }
}