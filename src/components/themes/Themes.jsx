import {createMemo, For} from "solid-js";

const themes = createMemo (() => [
    {
        id: 1,
        name: 'Maxresd',
        href: '#',
        imageSrc: 'src/components/themes/image/admin-one-vue-tailwind.jpg',
        imageAlt: "CSS-framework",
        price: '$99',
        color: 'Other',
    },
    {
        id: 2,
        name: 'Notus',
        href: '#',
        imageSrc: 'src/components/themes/image/opt_notus_react_thumbnail.jpg',
        imageAlt: "CSS-framework",
        price: '$199',
        color: 'Other',
    },
    {
        id: 3,
        name: 'Tailwind-css',
        href: '#',
        imageSrc: 'src/components/themes/image/tailwind-css-templates.jpg',
        imageAlt: "CSS-framework",
        price: '$299',
        color: 'Other',
    },
    {
        id: 4,
        name: 'Tailwind-SML',
        href: '#',
        imageSrc: 'src/components/themes/image/othertheme.jpeg',
        imageAlt: "CSS-framework",
        price: '$399',
        color: 'Other',
    },
])

const Themes = () => {
    return (
            <div class="bg-white">
                <div class="max-w-2xl mx-auto py-9 px-4 sm:px-2 max-w-screen-2xl ">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-600">
                        Themes tailwind
                    </h2>
                    <div class=" mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-4 ">
                        <For each={ themes()}>
                            {( theme ) => (
                            <div key={ theme.id } class="group relative">
                                <div class="max-h-48 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={ theme.imageSrc }
                                        alt={ theme.imageAlt }
                                        class="bg-cover bg-center lg:w-full lg:h-full"
                                    />
                                </div>
                                <div class="mt-4 flex justify-between">
                                    <div>
                                        <h3 class="text-sm text-gray-700">
                                            <a href={ theme.href }
                                               name={'block_theme'}>
                                            </a>
                                        </h3>
                                        <p> { theme.name } </p>
                                        <p className=" mt-1 text-sm flex text-gray-500">
                                            { theme.color }
                                        </p>
                                    </div>
                                    <p class="text-sm font-medium text-gray-900">
                                        { theme.price }
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