/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  '/selectjobs': { view: 'pages/selectjobs' },
  '/orderparts': { view: 'pages/orderparts' },
  '/login': { view: 'pages/login' },
  
  "POST /signup":"AuthController.signup",
  "GET /login_api":"AuthController.login",
  "GET /fetchjobs":"AuthController.fetchjobs",
  "GET /fetchparts":"AuthController.fetchparts",
  "GET /fetchparts_api":"AuthController.fetchparts_api",
  "GET /allOrders" : "JobPartsController.allOrders",
  "GET /showSearch" : "SearchController.showSearch",
  
  "POST /submitdata":"JobpartsController.submitdata"





  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
