import Home from '$comp/home';
import Category from '$cont/category';
import Product from '$comp/product';

const routes = [
  {
    path: '/home',
    component: Home,
    exact: true,
  },
  {
    path: '/products/category',
    component: Category,
    exact: true,
  },
  {
    path: '/products/product',
    component: Product,
    exact: true,
  },
];

export default routes;