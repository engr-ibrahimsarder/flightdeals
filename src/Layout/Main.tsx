import { Outlet } from 'react-router-dom';
import { Nabvar } from '../pages/Shared/Navbar/Navbar';


export const Main = () => {
  return (
    <div>
      <Nabvar></Nabvar>
      <Outlet></Outlet>
    </div>
  );
};