import { For } from "solid-js";
import Button from "../../../button/Button";

const theme = {
    name: 'Tailwind-React',
    price: '$299',
    href: '/react',
    breadcrumbs: [
        { id: 1, name: 'Back', href: '/home' },
    ],
    images: [
        {
            src: 'https://cdn.devdojo.com/images/january2021/Screenshot%20from%202021-01-03%2006-46-38.png',
            alt: 'admin-dashboards',
        },
        {
            src: 'https://i.morioh.com/210721/0c315654.webp',
            alt: 'maxresdefault',
        },
        {
            src: 'https://creativetimblog.com/blog/wp-content/uploads/2020/02/admin-template-1024x550.png',
            alt: 'Model lending page',
        },
        {
            src: 'https://miro.medium.com/max/1000/1*MC3wNPTVKPZkCgLTK6xGLg.png',
            alt: 'Model React+Tailwind',
        },
    ],
}

const React = () => {
    return (
        <div class="mb-40">
            <nav aria-label="Breadcrumb">
                <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
                    <For each={theme.breadcrumbs}>
                        {(breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div class="flex items-center">
                                    <a href={breadcrumb.href}
                                       class="flex flex-row items-center  mr-2 text-sm font-medium text-gray-900">
                                        <svg aria-hidden="true" focusable="false" data-prefix="far"
                                             data-icon="arrow-alt-circle-left" class="w-7 h-7 pr-1" role="img"
                                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor"
                                                  d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
                                        </svg>
                                        {breadcrumb.name}
                                    </a>
                                </div>
                            </li>
                        )}
                    </For>
                </ol>
            </nav>
            <div class="px-6 py-12 md:px-12 bg-gray-50 text-gray-800 text-center lg:text-left">
                <div class="container mx-auto xl:px-32">
                    <div class="grid lg:grid-cols-2 gap-12 flex items-center">
                        <div class="mt-12 lg:mt-0">
                            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                                The best video
                                <br />
                                <span class="text-blue-600">for your projects</span>
                            </h1>
                        </div>
                        <div class="mb-12 lg:mb-0">
                            <iframe width="640" height="480"
                                    src="https://www.youtube.com/embed/ZAjUGkhqUP4"
                                    title="Tailwind CSS with Vue"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image gallery */}
            <div class="mt-6 max-w-2xl mx-auto rounded-3 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div class="hidden aspect-w-3 aspect-h-4 overflow-hidden lg:block">
                    <img
                        src={theme.images[0].src}
                        alt={theme.images[0].alt}
                        class="w-full h-full object-center object-contain"
                    />
                </div>
                <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div class="aspect-w-2 aspect-h-2 rounded-lg overflow-hidden">
                        <img
                            src={theme.images[1].src}
                            alt={theme.images[1].alt}
                            class="w-full h-full object-center object-cover"
                        />
                    </div>
                    <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                        <img
                            src={theme.images[2].src}
                            alt={theme.images[2].alt}
                            class="w-full h-full object-center object-cover"
                        />
                    </div>
                </div>
                <div class="aspect-w-4 aspect-h-2 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
                    <img
                        src={theme.images[3].src}
                        alt={theme.images[3].alt}
                        class="w-full h-full object-center object-contain"
                    />
                </div>
            </div>

            {/* Product info */}
            <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
                <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:tracking-tight sm:text-3xl">
                        {theme.name}
                    </h1>
                </div>
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <p>The Tailwind allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
                </div>

                {/* Options */}
                <div class="mt-4 lg:mt-0 lg:row-span-3">
                    <h1>Order information</h1>
                    <p class="tracking-tight mb-1.5 text-3xl text-gray-900">{theme.price}</p>
                    <Button />
                </div>
            </div>
        </div>
    );
};

export default React;