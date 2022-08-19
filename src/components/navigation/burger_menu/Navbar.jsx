import { createSignal } from "solid-js";
import MenuItems from "../menuItems/MenuItems";

const Navbar = () => {
    const [openMenu, setOpenMenu] = createSignal(false);
        return (
            <div class={'flex flex-col space-x-4 md:hidden px-6 py-3 w-20'}>
                <div onClick={() => setOpenMenu(!openMenu())} class="md:hidden my-auto space-y-1 hover:cursor-pointer">
                        <span class="block h-0.5 w-7 bg-gray-800"></span>
                        <span class="block h-0.5 w-7 bg-gray-800"></span>
                        <span class="block h-0.5 w-7 bg-gray-800"></span>
                </div>
                { openMenu()
                ? (
                        <div class='flex z-50 m-6 bg-slate-500 flex-row space-x-4 absolute w-20'> <MenuItems /> </div>

                   ) : null }
            </div>
        );
    };
export default Navbar
