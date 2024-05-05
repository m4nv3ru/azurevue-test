const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const result = await fetch("/./auth/me");
            console.log(result);
            return { body: { message: await result.text() } };
        } catch (error) {
            console.error(error);
            return {
                status: 500,
                body: { message: `${JSON.stringify(error.message)}` }
            };
        }

    }
});
