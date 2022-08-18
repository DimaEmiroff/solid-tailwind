import Dismiss from "solid-dismiss";
import { createSignal } from "solid-js";

const SignInModal = () => {
        const [open, setOpen] = createSignal(false);
        let btnOpen;
        let btnClose;
    return (
        <>
            <button
                ref={btnOpen}
                type={'button'}
                class={'inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'}>
                Sign in
            </button>
        <Dismiss
            menuButton={btnOpen}
            open={open}
            setOpen={setOpen}
            focusElementOnOpen={() => btnClose}
        >
            <div class={'bg-fixed'}>
            <div class="absolute shadow-2xl left-40 mt-4 z-50 p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <form>
                    <div class="form-group mb-6">
                        <label htmlFor="exampleInputEmail2"
                               class="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input type="email"
                               class="form-control
                                      block
                                      w-full
                                      px-3
                                      py-1.5
                                      text-base
                                      font-normal
                                      text-gray-700
                                      bg-white bg-clip-padding
                                      border border-solid border-gray-300
                                      rounded
                                      transition
                                      ease-in-out
                                      m-0
                                      focus:text-gray-700 focus:bg-white
                                      focus:border-blue-600 focus:outline-none"
                                      id="exampleInputEmail2"
                                      aria-describedby="emailHelp"
                                      placeholder="Enter email"/>
                    </div>
                    <div class="form-group mb-6">
                        <label htmlFor="exampleInputPassword2"
                               class="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input type="password"
                               class="form-control block                                                            w-full
                                       px-3
                                       py-1.5
                                       text-base
                                       font-normal
                                       text-gray-700
                                       bg-white bg-clip-padding
                                       border border-solid border-gray-300
                                       rounded
                                       transition
                                       ease-in-out
                                       m-0
                                       focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                       id="exampleInputPassword2"
                                       placeholder="Password"/>
                    </div>
                    <div class="flex justify-between items-center mb-6">
                        <div class="form-group form-check">
                            <input type="checkbox"
                                   class="form-check-input
                                   appearance-none
                                   h-4 w-4
                                   border
                                   border-gray-300
                                   rounded-sm
                                   bg-white
                                   checked:bg-blue-600
                                   checked:border-blue-600
                                   focus:outline-none transition
                                   duration-200 mt-1 align-top
                                   bg-no-repeat bg-center bg-contain
                                   float-left mr-2
                                   cursor-pointer"
                                   id="exampleCheck2"/>
                                <label class="form-check-label inline-block text-gray-800 mr-1">Remember me</label>
                        </div>
                        <a href="#!"
                           class="text-blue-400
                            hover:text-blue-700
                            focus:text-blue-700
                            transition duration-200
                            ease-in-out">Forgot password?</a>
                    </div>
                    <button type="submit"
                            class="w-full
                            px-6
                            py-2.5
                            bg-blue-600
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-blue-700 hover:shadow-lg
                            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-blue-800 active:shadow-lg
                            transition
                            duration-150
                            ease-in-out">Sign in</button>
                </form>
            </div>

            {/*<div role="presentation"*/}
            {/*     onClick={onClickOverlay}*/}
            {/*     class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">*/}
            {/*    <div role="dialog"*/}
            {/*         class="max-w-md absolute w-full space-y-8">*/}
            {/*        <div>*/}
            {/*            <img*/}
            {/*                class="mx-auto h-12 w-auto"*/}
            {/*                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"*/}
            {/*                alt="Workflow"*/}
            {/*            />*/}
            {/*            <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">*/}
            {/*                Sign in to your account*/}
            {/*            </h2>*/}
            {/*            <p className="mt-2 text-center text-sm text-gray-600">*/}
            {/*                Or{' '}*/}
            {/*                <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">*/}
            {/*                    start your 14-day free trial*/}
            {/*                </a>*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <form className="mt-8 space-y-6" action="#" method="POST">*/}
            {/*            <input type="hidden" name="remember" defaultValue="true"/>*/}
            {/*            <div class="rounded-md shadow-sm -space-y-px">*/}
            {/*                <div>*/}
            {/*                    <label htmlFor="email-address" class="sr-only">*/}
            {/*                        Email address*/}
            {/*                    </label>*/}
            {/*                    <input*/}
            {/*                        id="email-address"*/}
            {/*                        name="email"*/}
            {/*                        type="email"*/}
            {/*                        autoComplete="email"*/}
            {/*                        required*/}
            {/*                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"*/}
            {/*                        placeholder="Email address"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    <label htmlFor="password" className="sr-only">*/}
            {/*                        Password*/}
            {/*                    </label>*/}
            {/*                    <input*/}
            {/*                        id="password"*/}
            {/*                        name="password"*/}
            {/*                        type="password"*/}
            {/*                        autoComplete="current-password"*/}
            {/*                        required*/}
            {/*                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"*/}
            {/*                        placeholder="Password"*/}
            {/*                    />*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            /!*<button*!/*/}
            {/*            /!*    className="x-btn"*!/*/}
            {/*            /!*    aria-label="close modal"*!/*/}
            {/*            /!*    onClick={onClickClose}*!/*/}
            {/*            /!*>*!/*/}
            {/*            /!*    ✕*!/*/}
            {/*            /!*</button>*!/*/}
            {/*            <div className="flex items-center justify-between">*/}
            {/*                <div className="flex items-center">*/}
            {/*                    <input*/}
            {/*                        id="remember-me"*/}
            {/*                        name="remember-me"*/}
            {/*                        type="checkbox"*/}
            {/*                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"*/}
            {/*                    />*/}
            {/*                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">*/}
            {/*                        Remember me*/}
            {/*                    </label>*/}
            {/*                </div>*/}

            {/*                <div className="text-sm">*/}
            {/*                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">*/}
            {/*                        Forgot your password?*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*            <div>*/}
            {/*                <button*/}
            {/*                    type="submit"*/}
            {/*                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"*/}
            {/*                >*/}
            {/*                    Sign in*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
            </div>
        </Dismiss>
</>
         );
    };
export default SignInModal;

// <div role="presentation"
//      onClick={onClickOverlay}
//      className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//     <div role="dialog"
//          className="max-w-md w-full space-y-8">
//         <div>
//             <img
//                 className="mx-auto h-12 w-auto"
//                 src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
//                 alt="Workflow"
//             />
//             <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
//                 Sign in to your account
//             </h2>
//             <p className="mt-2 text-center text-sm text-gray-600">
//                 Or{' '}
//                 <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                     start your 14-day free trial
//                 </a>
//             </p>
//         </div>
//         <form className="mt-8 space-y-6" action="#" method="POST">
//             <input type="hidden" name="remember" defaultValue="true"/>
//             <div className="rounded-md shadow-sm -space-y-px">
//                 <div>
//                     <label htmlFor="email-address" className="sr-only">
//                         Email address
//                     </label>
//                     <input
//                         id="email-address"
//                         name="email"
//                         type="email"
//                         autoComplete="email"
//                         required
//                         className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                         placeholder="Email address"
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password" className="sr-only">
//                         Password
//                     </label>
//                     <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         autoComplete="current-password"
//                         required
//                         className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                         placeholder="Password"
//                     />
//                 </div>
//             </div>
//
//             <button
//                 className="x-btn"
//                 aria-label="close modal"
//                 onClick={onClickClose}
//             >
//                 ✕
//             </button>
//             <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                     <input
//                         id="remember-me"
//                         name="remember-me"
//                         type="checkbox"
//                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                     />
//                     <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                         Remember me
//                     </label>
//                 </div>
//
//                 <div className="text-sm">
//                     <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                         Forgot your password?
//                     </a>
//                 </div>
//             </div>
//
//             <div>
//                 <button
//                     type="submit"
//                     className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                     Sign in
//                 </button>
//             </div>
//         </form>
//     </div>
// </div>
