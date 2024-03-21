import { db, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(User).values([
		{userId: '123', email: 'jack101091@gmail.com'}
	])
}
