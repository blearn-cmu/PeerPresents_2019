const warden = require('../managers/workerManager')
const services = ['identity', 'presentation', 'study', 'live', 'audience', 'research'];

async function handle_work_request (ctx, next) {
    // POST body: ctx.request.body
    //TODO validate type and params
    type = ctx.request.body.type
    params = ctx.request.body.params

    switch(type) {
        case services[0]: //identity
            warden.identity(params)
            break;
        case services[1]: //presentation
            warden.presentation(params)
            break;
        case services[2]: //study
            warden.study(params)
            break;
        case services[3]: //live
            warden.live(params)
            break;
        case services[4]: //audience
            warden.audience(params)
            break;
        case services[5]: //research
            warden.research(params)
            break;
        default:
            break;
    }
}

module.exports = {handle_work_request};
