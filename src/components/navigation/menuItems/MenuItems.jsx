import {createMemo, For} from "solid-js";

const navigation = createMemo(() => [
    { name: 'Main', href: '/home', current: true },
    { name: 'Theme', href: '#block_theme', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Team', href: '#', current: false },
    { name: 'Contacts', href: '#', current: false },
]);

const MenuItems = () => {
    return (
        <div class="flex flex-col bg-slate-500 items-start justify-start md:flex-row md:justify-around">
           <div class="flex flex-col md:flex-row space-x-2>">
                <For each={ navigation() }>
                    {((item) => (
                        <a key={ item.name }
                           href={ item.href }
                           class = {
                               item.current
                                   ? 'bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium'
                                   : 'text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-white'
                           }
                           aria-current = {
                               item.current
                                   ? 'page'
                                   : undefined
                           }>
                            { item.name }
                        </a>
                    ))}
                </For>
           </div>
        </div>
    );
};

export default MenuItems;