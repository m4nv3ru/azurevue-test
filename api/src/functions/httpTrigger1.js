const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        try {
            const result = await fetch("/./auth/me");            
            return { body: await result.text() };
        } catch (error) {
            return {
                status: 500,
                body: { message: `${JSON.stringify(error.message)}` }
            };
        }
        
    }
});
