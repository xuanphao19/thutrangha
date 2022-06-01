//Tạo component (Component riêng cho các Đường dẫn riêng)

import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Contact from '@/pages/Contact';
import Profile from '@/pages/Profile';

// Public Routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/contact', component: Contact },
  { path: '/profile', component: Profile },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
