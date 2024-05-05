const { app } = require('@azure/functions');

app.http('httpTrigger1', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        try {
            const headerValue = request.headers.get('x-ms-client-principal');
            const encoded = Buffer.from(headerValue, 'base64');
            const decoded = encoded.toString('ascii');
            return { status: 200,  body: decoded};
        } catch (error) {
            context.error(error);
            return {
                status: 500,
                body: JSON.stringify(error.message)
            };
        }

    }
});
