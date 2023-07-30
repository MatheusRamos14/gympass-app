import fastify from 'fastify';

import { register } from './http/controllers/register';
import { prisma } from './lib/prisma';

const app = fastify();

app.get('/users', async () => {
	return await prisma.user.findMany();
});
app.post('/users', register);

export { app };