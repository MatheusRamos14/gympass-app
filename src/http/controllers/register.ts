import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { hash } from 'bcryptjs';

import { prisma } from '@/lib/prisma';

export async function register(request: FastifyRequest, reply: FastifyReply) {
	const registerBodySchema = z.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string().min(6)
	});

	const { name, email, password } = registerBodySchema.parse(request.body);

	await prisma.user.create({
		data: {
			name,
			email,
			password_hash: password
		}
	});

	await reply.status(201).send();
}