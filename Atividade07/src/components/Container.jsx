import React, { useState } from "react";

import "../css/Container.css"
import Counter from "./Counter";
import ChangeColor from "./ChangeColor";
import ToDoList from "./ToDoList";
import Stopwatch from "./Stopwatch";
import Filter from "./Filter";
import Form from "./Form";
import Request from "./Request";


function Container() {

    const [chosenComponent, setChosenComponent] = useState('ex01')

    function showComponent(component) {
        setChosenComponent(component)
    }

    return (
        <div id="container">
            <nav id="containerNav">
                <button onClick={() => showComponent('ex01')}>Exercício 01</button>
                <button onClick={() => showComponent('ex02')}>Exercício 02</button>
                <button onClick={() => showComponent('ex03')}>Exercício 03</button>
                <button onClick={() => showComponent('ex04')}>Exercício 04</button>
                <button onClick={() => showComponent('ex05')}>Exercício 05</button>
                <button onClick={() => showComponent('ex06')}>Exercício 06</button>
                <button onClick={() => showComponent('ex07')}>Exercício 07</button>
                <button onClick={() => showComponent('ex08')}>Exercício 08</button>
                <button onClick={() => showComponent('ex09')}>Exercício 09</button> 
                <button onClick={() => showComponent('ex10')}>Exercício 10</button>

            </nav>

            <div id="chosenComponent">
                {chosenComponent === 'ex01' && <Counter />}
                {chosenComponent === 'ex02' && <ChangeColor />}
                {chosenComponent === 'ex03' && <ToDoList />}
                {chosenComponent === 'ex04' && <Stopwatch />}
                {chosenComponent === 'ex05' && <Filter />}
                {chosenComponent === 'ex06' && <Form />}
                {chosenComponent === 'ex07' && <Request />}
                {chosenComponent === 'ex08' && <Images />}
                {chosenComponent === 'ex09' && <TimerAlert />}
                {chosenComponent === 'ex10' && <NavigableTabs />}
            </div>
        </div>
    )
}

export default Container