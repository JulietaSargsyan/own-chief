import React from 'react';


function Firstpage() {
    return(
        <div className="body">
        <header className= "header">
            <div className = "logo">
                <img src={'img/logo.png'} />
            </div>
            <div className="sign">
                <div className="signIn">
                    <p>sign in</p>
                </div>
                <div className="signUp">
                     <p>sign up</p>
                </div>
            </div>
        </header>
        <main className="main">
            <div className="text">
                <h2>Hi there!</h2>
                <p>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor</p>
            </div>
            <div className="foodType">
                <div className="burger">
                    <img  src={'img/burger.png'} alt=""/>
                    <p>burger</p>
                </div>
                <div className="pizza">
                    <img src={'img/pizza.png'} alt=""/>
                    <p>pizza</p>
                </div>
                <div className="sandwich">
                    <img src={'img/sandwich.png'} alt=""/>
                    <p>sandwich</p>
                </div>
            </div>
        </main>












        </div>
    );
}
















export default Firstpage;