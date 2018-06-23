import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Main = () => (
    <div>
        <Hero bg= "https://www.bypeople.com/wp-content/uploads/2015/07/svg-low-poly-background-css-js-snippet.jpg" >
        <h1>Clicky Game!</h1>
        <h2>Click on an image to earn points, but don't click on any more than once!</h2> 
        </Hero>
        <Card src="https://vignette.wikia.nocookie.net/rickandmorty/images/5/58/Beth_Smith.png/revision/latest?cb=20151204220729" />
    </div>
);

export default Main;