import { Link } from "react-router-dom";

export function Nabvar() {

  return (
    <div>
      <div className="navbar bg-black px-0 lg:px-16">
        <div className="navbar-start">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <Link to="/" className='text-xl text-white mr-4'> Dashboard</Link>
              <Link to="/masterprice" className="text-xl text-white mr-4">Master Price</Link>
              <Link to="/customprice" className="text-xl text-white mr-4">Custom Price</Link>
              <Link to="/calender" className="text-xl text-white mr-4">Calender</Link>
              <Link to="/report" className=" text-xl text-white mr-4">Report</Link>
            </ul>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
              <Link to="/" className='mr-2'> Dashboard</Link>
              <Link to="/masterprice" className="mr-2">Master Price</Link>
              <Link to="/customprice" className="mr-2">Custom Price</Link>
              <Link to="/calender" className="mr-2">Calender</Link>
              <Link to="/report" className="mr-2">Report</Link>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            </div>
          </button>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

