import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Navbar() {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "#about" },
    { label: "Team", path: "/" },
    { label: "Contact Us", path: "#contact" }
  ];
  const isLogin= useSelector((state)=>state.auth.isAuthenticated);
  const user= useSelector((state)=>state.auth.user);
  console.log(user);

  return (
    <header className="flex z-10 flex-col w-full bg-white max-md:max-w-full ">
      <nav className="flex flex-wrap gap-5 justify-between px-12 py-9 w-full bg-sky-900 shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:max-w-full">
        <div className="my-auto text-3xl font-bold text-white">EFAT</div>
        <div className="flex gap-10 text-base font-semibold text-stone-400 max-md:max-w-full">
          {navItems.map((item) => (
            <a 
              key={item.path}
              href={item.path}
              className="gap-2.5 self-stretch px-5 py-4 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
          {
            isLogin==false? ( <Link to={"/user/signin"}>
              <button className="overflow-hidden gap-2.5 self-stretch px-4 py-2 my-auto text-white rounded-2xl border-2 border-white border-solid">
                Sign In
              </button>
              </Link>):( <Link to={"/profile"}>
          <button className="overflow-hidden gap-2.5 self-stretch px-4 py-2 my-auto border-white border-solid">
            <div className="rounded-full h-10 w-10 bg-blue-500 text-center content-center text-white border-2">{user.user.displayName[0].toUpperCase()}</div>
          </button>
          </Link>)
          }
         

        </div>
      </nav>
    </header>
  );
}