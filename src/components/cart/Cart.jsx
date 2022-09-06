import { Icon } from "solid-heroicons";
import { shoppingCart } from "solid-heroicons/solid";

const Cart = () => {
    return (
        <div class={'flex items-center justify-center rounded-sm absolute top-12 right-0 ' +
            'shadow-lg h-full block bg-white opacity-60 z-50 shadow-lg w-14 h-10'}>
             <Icon path={shoppingCart} class={'w-7 text-blue-600 cursor-pointer'} />
        </div>
    );
}
export default Cart;
// style="width: 24px; color: blue; position: relative; z-index: 100"