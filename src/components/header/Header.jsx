import spring from './image/spring.jpg'
import SliderThemes from "../slider/SliderThemes";

const Header = () => {
    return (
        <div class="relative h-64  overflow-hidden  bg-indigo-500">
            <div class="absolute z-30 flex w-full h-full">
                <div class="relative z-30 w-5/6 px-6 py-8 text-white md:py-10 md:w-1/2">
                    <h2 class="text-5xl">Solid & Tailwind project</h2>
                </div>
                <div class="absolute top-0 right-0 flex w-full h-full">
                    <div class="w-1/3 h-full bg-indigo-500"></div>
                        <div class="relative w-1/3">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 100 100"
                                class="absolute inset-y-0 z-20 h-full text-indigo-500">
                                <polygon id="diagonal" points="0,0 100,0 50,100 0,100"></polygon>
                            </svg>
                            <svg fill="currentColor"
                                 viewBox="0 0 100 100"
                                 class="absolute inset-y-0 z-10 h-full ml-6 text-white opacity-50">
                                <polygon points="0,0 100,0 50,100 0,100"></polygon>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="absolute top-0 right-0 block w-9/12 h-full">
                    <SliderThemes/>
                    {/*<img alt="Snowy mountain lake"*/}
                    {/*     class="object-container min-w-full h-full blur-sm"*/}
                    {/*     src={spring}*/}
                    {/*/>*/}
                </div>
        </div>
   );
}
export default Header;