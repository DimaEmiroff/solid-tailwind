import { createSignal } from "solid-js";
import MenuItems from "../menuItems/MenuItems";

const Navbar = () => {
    const [openMenu, setOpenMenu] = createSignal(false);
    console.log(openMenu())
        return (
            <div class={'flex flex-col space-x-4 md:hidden px-6 py-3 w-18'}>
                <div onClick={() => setOpenMenu(!openMenu())} class="md:hidden my-auto space-y-1 hover:cursor-pointer" >
                        <span class={"block h-0.5 w-7 bg-gray-800 transform transition duration-500 ease-in-out" + " " + (openMenu() ? "duration-300 rotate-45 translate-y-1.5 transform 0.4s ease-in-out" : "")}></span>
                        <span class={"block h-0.5 w-7 bg-gray-800 transform transition duration-500 ease-in-out" + " " + (openMenu() ? "opacity-0 duration-500 ease-in-out" : "")}></span>
                        <span class={"block h-0.5 w-7 bg-gray-800 transform transition duration-500 ease-in-out" + " " + (openMenu() ? "duration-300 -rotate-45 -translate-y-1.5 transform 0.4s ease-in-out" : "")}></span>

                </div>
                { openMenu()
                ? (
                        <div class='flex z-50 m-6 bg-slate-500 flex-row space-x-2 absolute w-18'>
                            <MenuItems />
                        </div>

                   ) : null }
            </div>
        );
    };
export default Navbar
