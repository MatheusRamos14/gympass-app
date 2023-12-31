import { app } from './app';
import { env } from './env';

app.listen({
	port: env.PORT,
})
	.then(() => {
		console.log(`${env.NODE_ENV} server running on port ${env.PORT}`);
	});