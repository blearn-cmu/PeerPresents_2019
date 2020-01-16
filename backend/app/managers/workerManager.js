

module.exports = {
    identity: function handle_identity_request(params) {
        return new Promise((resolve, reject) => {
            /* TODO */
            // POST /id/login
            // params: user, password

            // POST /id/logout
            // params: none

            // PUT /id/user
            // params: user, password

            // GET /id/{user_id}
            // params: none

            // DELETE /id/{user_id}
            // params: none
        })
    },

    presentation: function handle_presentation_request(params) {
        return new Promise((resolve, reject) => {
            /* TODO */
            // PUT /presentation/{id}/content/question
            // params: question_text

            // DELETE /presentation/{id}/content/question
            // params: question_id

            // PUT /presentation/{id}/org/{course|session|presentation}
            // params: model

            // DELETE /presentation/{id}/org/{course|session|presentation}
            // params: model_id

        })
    },

    study: function handle_study_request(params) {
        return new Promise((resolve, reject) => {
            /* TODO */
            // PUT /study/study
            // params: ? study_params

            // DELETE /study/study/{study_id}
            // params: none

            // PUT /study/{study_id}/{presentation_id|course_id|user_id}
            // params: none

            // DELETE /study/{study_id}/{presentation_id|course_id|user_id}
            // params: none
        })
    },

    live: function handle_live_request(params) {
        return new Promise((resolve, reject) => {
            /* TODO */
            // PUT /live/{presentation_id}
            // params: owner_auth

            // DELETE /live/{presentation_id}
            // params: owner_auth

            // GET /live{presentation_id}
            // params: none
        })
    },

    audience: function handle_audience_request(params) {
        return new Promise((resolve, reject) => {
            /* TODO */
            // PUT /audience/{upvote|react|star|tag}
            // params: presentation_id, parent_id

            // DELETE /audience/{upvote|react|star|tag}
            // params: presentation_id, parent_id

            // PUT /audience/response
            // params: presentation_id, question_id, response_text
        })
    },

    research: function handle_research_request(params) {
        return new Promise((resolve, reject) => {
            /* TODO */
            // GET /study/{study_id}/{model_id}
            // params: none

            // GET /study/{study_id}/all
            // params: none
        })
    }
};
