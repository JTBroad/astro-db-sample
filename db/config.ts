import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
  columns: {
    userId: column.text({ primaryKey: true }),
    email: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    User
  }
});
