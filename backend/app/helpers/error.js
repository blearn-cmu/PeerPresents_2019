module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        let status = err.statusCode || err.status || 500;
        let body = {
            message: err.message
        };
        if (eff.isJoi) {
            status = 400;
            body.details = err.details;
        }

        ctx.status = status;
        ctx.body = body;
    }
};
