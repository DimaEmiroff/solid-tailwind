import ModalFormLoginIs from "../modalForm/loginIn/ModalFormLoginIs";
import FieldSearch from "../field_search/FieldSearch";
import Navbar from "./burger_menu/Navbar";
import MenuItems from "./menuItems/MenuItems";


const Navigation = () => {
    return (
        <div class ="flex items-baseline justify-between space-x-4 bg-slate-500 w-full">
                <Navbar />
            <div class="hidden ml-3 relative bg-slate-500 space-x-4 md:flex items-baseline lg:w-full">
                <MenuItems />
            </div>
                <FieldSearch />
                <ModalFormLoginIs />
        </div>
    );
};

export default Navigation;