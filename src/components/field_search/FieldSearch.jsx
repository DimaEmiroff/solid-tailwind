const FieldSearch = () => {
    return (
        <div>
            <form class=" max-w-sm md:flex-row md:flex flex-col text-center w-full md: hidden">
                <div class="flex items-center border-none w-full py-1">
                    <input
                        class="appearance-none rounded bg-transparent shadow-inner w-40 focus:ring focus:ring-blue-500 text-slate-300 mr-2 py-1 px-6 leading-tight focus:outline-none"
                        type="text" placeholder="Search" aria-label="search"/>
                    <button
                        class="flex-shrink-0 bg-blue-600 hover:bg-blue-700 border-blue-600
                         hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded mr-4"
                        type="button">
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
};

export default FieldSearch;