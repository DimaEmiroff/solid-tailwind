import {createMemo, For} from "solid-js";
import { Link } from "@gh0st-work/solid-js-router";

const themes = createMemo (() => [
    {
        id: 1,
        name: 'Tailwind-Vue',
        href: '/tailwind-vue',
        imageSrc: 'https://raw.githubusercontent.com/admin-dashboards/tailwind-css-free-starters/main/media/tailwind-css-vue-notus-free-starter.jpg',
        imageAlt: "CSS-framework",
        price: '$99',
        color: 'Other',
    },
    {
        id: 2,
        name: 'Tailwind-Svetle',
        href: '/tailwind-svetle',
        imageSrc: 'https://s3.amazonaws.com/creativetim_bucket/products/395/original/opt_notus_svelte_thumbnail.jpg?1602083070',
        imageAlt: "CSS-framework",
        price: '$199',
        color: 'Other',
    },
    {
        id: 3,
        name: 'Tailwind-React',
        href: '/tailwind-react',
        imageSrc: 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/notus-pro-react/notus-pro-react.jpg',
        imageAlt: "CSS-framework",
        price: '$299',
        color: 'Other',
    },
    {
        id: 4,
        name: 'Tailwind-JavaScript',
        href: '/tailwind-js',
        imageSrc: 'https://s3.amazonaws.com/creativetim_bucket/products/392/original/opt_notus_js_thumbnail.jpg?1602083018',
        imageAlt: "CSS-framework",
        price: '$399',
        color: 'Other',
    },
])

const Themes = () => {
    return (
                <div class="bg-white">
                    <div class="max-w-fit mx-auto py-9 px-4 sm:px-2 max-w-screen-2xl">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-600">
                            Themes tailwind
                        </h2>
                        <div class="mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-16 ">
                            <For each={themes()}>
                                {(theme) => (
                                    <div key={theme.id}
                                         class="group relative flex flex-col">
                                        <div class="max-h-48 bg-gray-200 aspect-w-1 cursor-pointer
                                            aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75
                                            lg:h-80 lg:aspect-none">
                                            <Link href={theme.href}>
                                                <img src={theme.imageSrc}
                                                     alt={theme.imageAlt}
                                                     class="bg-cover bg-center lg:w-full lg:h-full"
                                                />
                                            </Link>
                                        </div>
                                        <div class="mt-4 flex justify-between">
                                            <div>
                                                <a name={'block_theme'}> </a>
                                                <p> {theme.name} </p>
                                                <p class=" mt-1 text-sm flex text-gray-500">
                                                    {theme.color}
                                                </p>
                                            </div>
                                                <p class ="text-sm font-medium text-gray-900">
                                                    {theme.price}
                                                </p>
                                        </div>
                                    </div>
                                )}
                            </For>
                        </div>
                    </div>
                </div>
    );
};

export default Themes;