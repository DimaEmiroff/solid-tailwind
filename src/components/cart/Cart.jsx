import { Icon } from "solid-heroicons";
import { shoppingCart } from "solid-heroicons/solid";
import {createSignal} from "solid-js";


const Cart = () => {
    const [openCart, setOpenCart] = createSignal(false);
    const [count, setCount] = createSignal(0);
    let btnClose;
    const increment = () => {
        setCount(count => (
            Math.max(count - 1, 0)
            )
        )
    }
        return (
            <>
                <div onClick={() => setOpenCart(!openCart())} class={"flex cursor-pointer items-center justify-center rounded-sm absolute top-12 right-0 shadow-lg h-full block bg-white z-50 shadow-lg w-14 h-10"}>
                    <div class={'text-xs absolute flex items-center justify-center top-0.5 left-9 bg-red-500 text-white rounded-xl w-4 h-4'}>
                        {count()}
                    </div>
                     <Icon path={shoppingCart} class={'w-6 text-blue-600'} />
                </div>
                {
                    openCart()
                        ? (
                            <div class='absolute flex justify-center items-end w-32 h-36 z-50 m-6 rounded-sm shadow-lg bg-white flex-row space-x-2 overflow-visible top-12 right-8 pb-2'>
                                <button type={'button'} onClick={() => setCount(count() + 1)}
                                        class="inline-block w-6 h-6 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">+</button>
                                <button type={'button'} onClick={increment}
                                        class="inline-block w-6 h-6 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">-</button>
                                    <input value={count()} class={'w-6 h-6'}/>
                                <button type={'button'} onClick={() => setOpenCart(false)}
                                class="flex items-center justify-center w-7 h-8 absolute right-2 top-0 rounded-sm hover:shadow-lg focus:border-1
                                  focus:shadow-lg focus:outline-none focus:ring-0
                                  active:shadow-lg transition
                                  duration-250 ease-in-out">x</button>
                            </div>
                        ) : null
                }
            </>
        );
}
export default Cart;
