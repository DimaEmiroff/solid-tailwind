import Navigation from "./components/navigation/Navigation";
import {Route, Routes, DefaultRoute} from "@gh0st-work/solid-js-router";
import NotFound from "./components/pages/not_found/NotFound";
import HomePage from "./components/pages/home/HomePage";
import Vue from "./components/pages/theme_items/vue/Vue";
import Svetle from "./components/pages/theme_items/svetle/Svetle";
import React from "./components/pages/theme_items/react/React";
import JavaScript from "./components/pages/theme_items/js/JS";


const App = () => {
  return (
        <>
            <Navigation />
            <Routes>
                <Route path={'/tailwind-vue'}>
                    <Vue />
                </Route>
                <Route path={'/tailwind-svetle'}>
                    <Svetle />
                </Route>
                <Route path={'/react'}>
                    <React />
                </Route>
                <Route path={'/tailwind_js'}>
                    <JavaScript />
                </Route>
                <Route path={'/home'}>
                    <HomePage/>
                </Route>
                <Route path={'*'}>
                    <NotFound/>
                </Route>
                <DefaultRoute to={'/home'}/>
            </Routes>
        </>
    );
};

export default App;
