const themes = [
    {
        id: 1,
        name: 'Maxresd',
        href: '#',
        imageSrc: 'src/components/themes/image/maxresdefault.jpg',
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
        imageSrc: 'src/components/themes/image/Tailwind-SML.jpg',
        imageAlt: "CSS-framework",
        price: '$399',
        color: 'Other',
    },
]

const Themes = () => {
    return (
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-9 px-4 sm:px-2 max-w-screen-2xl">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                        Themes tailwind
                    </h2>
                    <div className=" mt-6 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 xl:gap-x-4 ">
                        {themes.map((theme) => (
                            <div key={theme.id} className="group relative">
                                <div className="max-h-48 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                                    <img
                                        src={theme.imageSrc}
                                        alt={theme.imageAlt}
                                        className="bg-cover bg-center lg:w-full lg:h-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={theme.href} name={'block_theme'}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {theme.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{theme.color}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{theme.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default Themes;