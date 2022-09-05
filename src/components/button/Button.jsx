import { Link } from "@gh0st-work/solid-js-router";
import { createSignal } from "solid-js";


const Button = () => {
    const [open, setOpen] = createSignal(false);
    let btnOpen;
    let btnClose;
    return (
        <>
            <Link
                ref = {btnOpen}
                type = {'button'}
                class = {'flex-shrink-0 bg-blue-600 hover:bg-blue-700 border-blue-600\n' +
                    'hover:border-blue-700 text-sm border-4 text-white py-1 px-8 rounded ml-auto cursor-pointer'}>
                Order
            </Link>

        </>
    );
};

export default Button;