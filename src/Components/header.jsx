import {useEffect, useState} from "react";
import {Data} from "../list data";
import {MenuIcon} from "../list data";
import {logo} from "../list data";
import {DropI} from "../list data";
import {Link} from "react-scroll";

export function TopBar() {
  const [TopBar, isTopBar] = useState(true);

  function handleScroll() {
    if (window.scrollY > 40) {
      isTopBar(false);
    } else {
      isTopBar(true);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className={`w-full h-max  bg-black p-2  pl-7 flex flex-wrap list-none gap-10 top-bar ${
          TopBar ? "" : "Hidden"
        }`}>
        <ul className="flex flex-wrap gap-4">
          <Social />
        </ul>
      </div>
    </>
  );
}
function Social() {
  return (
    <>
      <li className="social">
        <a href="https://www.instagram.com/karthikn_aka_sk/">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
      </li>
      <li className="social">
        <a href="https://www.instagram.com/karthikn_aka_sk/">
          <i class="fa-brands fa-instagram"></i>
        </a>
      </li>

      <a href="/" className="gmail">
        sktours@holidays.in
      </a>
    </>
  );
}
function MenuList({Data}) {
  const [hoverIndex, SethoverIndex] = useState(null);
  return Data.map((i, index) => (
    <>
      <li
        key={i.id}
        i={i}
        onMouseEnter={() => SethoverIndex(index)}
        onMouseLeave={() => SethoverIndex(null)}
        className="hover">
        <a href={i.src}>{i.title}</a>
        {hoverIndex === index && i.submenu && (
          <div className="h-max w-max bg-slate-500 absolute z-10 top-full border ">
            <ul
              className=" container  left-auto bg-white shadow-lg "
              id="submenu">
              {i.submenu.map((s) => (
                <a href={s.src}>
                  <li key={s.id} id="submenu-Li">
                    {s.title}
                  </li>
                </a>
              ))}
            </ul>
          </div>
        )}
      </li>
    </>
  ));
}
export function MenuBar({list, SetList}) {
  const [TopBar, isTopBar] = useState(true);
  const [Side, SetSide] = useState(false);
  const rootElement = document.body;
  if (Side) {
    rootElement.style.overflow = "hidden";
  } else {
    rootElement.style.overflow = "auto";
  }

  function handleScroll() {
    if (window.scrollY > 40) {
      isTopBar(false);
    } else {
      isTopBar(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        className={` w-full p-5 pt-0 pb-0 flex menuBar max-xxl:gap-64 max-xl:gap-20  border-[gold] border-b-[1px] max-md:gap-5  h-24  bg-white ${
          TopBar ? "" : "fixed top-0"
        }`}>
        <button className=" menu-i hidden max-xxl:inline  ">
          <img src={MenuIcon} alt="menu I" onClick={() => SetSide(!Side)} />
        </button>
        <ul className="p-0 flex  max-xxl:justify-center">
          <li>
            <a href="/">
              <img src={logo} alt="Logo" className="logo"></img>
            </a>
          </li>
        </ul>
        <div className="div-menu max-full:ml-full">
          <ul className=" flex-wrap  max-full:ml-50 ">
            <MenuList Data={Data} />
          </ul>
        </div>
        <NumberBar />
      </div>

      <div className={`Side-Bar ${Side ? "Open" : "Close"}`}>
        <button onClick={() => SetSide(!Side)}>
          <img src={DropI} alt="" className="side-bar-i" />
        </button>
        <div className="pt-5 ">
          <ul>
            <SideBarList
              data={Data}
              side={Side}
              list={list}
              SetList={SetList}
            />
          </ul>
        </div>
      </div>
    </>
  );
}

function NumberBar({i}) {
  return (
    <div className="number-bar cursor-pointer max-xxxl:hidden max-full:ml-auto">
      <ul>
        <a href="contact">
          <li>+91 8838522938</li>
        </a>
      </ul>
    </div>
  );
}

function SideBarList({list, SetList}) {
  function HandleClick(id) {
    SetList(list === id ? null : id);
  }
  return Data.map((l) => (
    <>
      <li key={l.id}>
        <a href={l.src}>{l.title}</a>
        {l.submenu && (
          <span>
            <img
              src={DropI}
              alt="drop"
              className="drop-i"
              onClick={() => HandleClick(l.id)}
            />
          </span>
        )}
      </li>
      {list === l.id && (
        <ul>
          <List l={l} />
        </ul>
      )}
    </>
  ));
}
function List({l}) {
  return l.submenu.map((s) => (
    <li key={s.id}>
      <a href={s.src}>{s.title}</a>
    </li>
  ));
}
