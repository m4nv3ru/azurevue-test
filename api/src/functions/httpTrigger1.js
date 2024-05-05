const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const result = await (await fetch("./auth/me")).json();
            return { body: JSON.stringify(result) };
        } catch (error) {
            return {
                status: 500,
                body: { message: `${error.message}` }
            };
        }
        
    }
});
