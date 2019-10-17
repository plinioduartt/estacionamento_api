'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
});

Route.get('/users', 'App/Controllers/Http/UserController.index');
Route.get('/users/:id', 'App/Controllers/Http/UserController.show');
Route.post('/users', 'App/Controllers/Http/UserController.store');
Route.put('/users/:id', 'App/Controllers/Http/UserController.update');

Route.get('/tickets/search/:code', 'App/Controllers/Http/TicketController.show_ticket');
Route.get('/user/tickets/:id', 'App/Controllers/Http/TicketController.my_tickets');

Route.get('/user/tickets/active/:id', 'App/Controllers/Http/TicketController.has_active_ticket');

Route.get('/tickets', 'App/Controllers/Http/TicketController.index');
Route.get('/tickets/:id', 'App/Controllers/Http/TicketController.show');
Route.post('/tickets', 'App/Controllers/Http/TicketController.store');
Route.put('/tickets/:id', 'App/Controllers/Http/TicketController.update');

Route.get('/bills', 'App/Controllers/Http/BillController.index');
Route.get('/bills/:id', 'App/Controllers/Http/BillController.show');
Route.post('/bills', 'App/Controllers/Http/BillController.store');
Route.put('/bills/:id', 'App/Controllers/Http/BillController.update');


Route.post('/auth', 'App/Controllers/Http/AuthController.auth');
