import "./Burger.css";
import me from "../../imgs/me.jpg";
import AnimatedComponentOnCLickMenu from "../animations/AnimatedComponentOnCLickMenu";
import { STATUS } from "../animations/AnimatedComponentOnCLickClipboard";
import { useState } from "react";

const Burger = () => {
  const [stateAnim, setStateAnim] = useState<STATUS>(STATUS.inactive);

  const actionClickMenu = (ev: any) => {
    ev.currentTarget.classList.toggle("active");
    setStateAnim((prev) =>
      prev === STATUS.inactive ? STATUS.active : STATUS.inactive
    );
  };

  return (
    <>
      <button onClick={actionClickMenu} id="burger-menu" className="relative">
        <div className="relative flex items-center justify-center rounded-full w-11 h-11 transform transition-all bg-primary ring-0 ring-primary hover:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-5 h-5 transform transition-all duration-300 origin-center">
            <div className="bg-white h-[1px] w-1/2 rounded transform transition-all duration-300 origin-right delay-75"></div>
            <div className="bg-white h-[1px] rounded"></div>
            <div className="bg-white h-[1px] w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75"></div>
          </div>
        </div>
      </button>
      <AnimatedComponentOnCLickMenu status={stateAnim}>
        <div
          onClick={() => (location.href = "/")}
          className="flex items-center gap-6 p-5 m-1 bg-primary-highlight text-white rounded-lg cursor-pointer"
        >
          <img
            src={me}
            className="w-16 h-16 rounded-lg border-2 border-solid border-white"
            alt="Ma photo de profil"
          />
          <div className="pt-2">
            <p className="font-bold">MÉTIER</p>
            <p>Yann</p>
          </div>
        </div>
        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-y-3">
            <a
              className="nav-links group"
              target="_self"
              href="/projects"
              title="Lien vers la page projets"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path
                  fillRule="evenodd"
                  d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 003 3h15a3 3 0 01-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125zM12 9.75a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H12zm-.75-2.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75zM6 12.75a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H6zm-.75 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM6 6.75a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 00.75-.75v-3A.75.75 0 009 6.75H6z"
                  clipRule="evenodd"
                ></path>
                <path d="M18.75 6.75h1.875c.621 0 1.125.504 1.125 1.125V18a1.5 1.5 0 01-3 0V6.75z"></path>
              </svg>
              Projets
            </a>
            <a
              className="nav-links"
              target="_self"
              href="/hobbies"
              title="Lien vers la page centre d'intêrets"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z"></path>
              </svg>
              Centre d'intêrets
            </a>
          </ul>
        </nav>
      </AnimatedComponentOnCLickMenu>
    </>
  );
};

export default Burger;
