import App from './App';
import Home from './views/Home';
import Login from './views/Login';
import NotFound from './views/NotFound';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData
      },
      {
        path: '/login',
        component: Login,
        exact: true
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];
