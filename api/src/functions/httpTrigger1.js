const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const result = await fetch("/.auth/me");
            const payload = await response.json();
            return { status: 200,  body: { message: JSON.stringify(payload) } };
        } catch (error) {
            console.error(error);
            return {
                status: 503,
                body: { message: `${JSON.stringify(error.message)}` }
            };
        }

    }
});
