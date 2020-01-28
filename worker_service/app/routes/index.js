const Router = require('koa-router'),
      KoaBody = require('koa-body'),

      // Identity API
      { login, logout, 
        createUser, readUser, updateUser, deleteUser
      } = require('../managers/identityManager');

      // Presentation API
      { createQuestion, deleteQuestion, 
        createCourse, deleteCourse, 
        createSession, deleteSession, 
        createPresentation, deletePresentation
      } = require('../managers/presentationManager');

      // Live API
      { createLiveSession, deleteLiveSession,
        joinLiveSession
      } = require('../managers/liveManager');

      // Audience API
      { createUpvote, deleteUpvote,
        createReact, deleteReact,
        createStar, deleteStar,
        createTag, deleteTag,
        createResponse
      } = require('../managers/audienceManager');

      // Study API
      {} = require('../managers/studyManager'); // beta requirement

      // Research API
      {} = require('../managers/researchManager'); // beta requirement

const router = new Router();

// Identity API
router.post('/id/login',   login)
router.post('/id/logout',  logout)
router.post('/id/user',    createUser)
router.get( 'id/:userid',  readUser)
router.put( '/id/:userid', updateUser)
router.del( '/id/:userid', deleteUser)

// Presentation API
router.post('/presentation/:id/content/question', createQuestion)
router.del( '/presentation/:id/content/question', deleteQuestion)
router.post('/presentation/:id/org/course',       createCourse)
router.del( '/presentation/:id/org/course',       deleteCourse)
router.post('/presentation/:id/org/session',      createSession)
router.del( '/presentation/:id/org/session',      deleteSession)
router.post('/presentation/:id/org/presentation', createPresentation)
router.del( '/presentation/:id/org/presentation', deletePresentation)


// Live API
router.post('/live/:id', createLiveSession)
router.del( '/live/:id', deleteLiveSession)
router.get( '/live/:id', joinLiveSession)

// Audience API
router.post('/audience/upvote', createUpvote)
router.del( '/audience/upvote', deleteUpvote)
router.post('/audience/react',  createReact)
router.del( '/audience/react',  deleteReact)
router.post('/audience/star',   createStar)
router.del( '/audience/star',   deleteStar)
router.post('/audience/tag',    createTag)
router.del( '/audience/tag',    deleteTag)

// Study API

// Research API

module.exports = {
    routes () { return router.routes() },
    allowedMethods () { return router.allowedMethods() }
};
