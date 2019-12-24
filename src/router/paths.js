/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/calendar',
    name: 'Calendar',
    view: 'Calendar'
  },
  {
    path: '/inbox',
    name: 'Inbox',
    view: 'Inbox'
  },
  {
    path: '/invoicing',
    view: 'Invoicing'
  },
  {
    path: '/lab-exp',
    view: 'Lab-exp'
  }
]
