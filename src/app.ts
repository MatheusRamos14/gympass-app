import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';

const app = fastify();
const prisma = new PrismaClient();

app.get('/', async () => {
	const users = await prisma.user.findMany();

	return users;
});

export { app };