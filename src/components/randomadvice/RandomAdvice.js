import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./RandomAdvice.css";
import {ReactComponent as BlueWisdomTile} from "../../assets/BWT.svg";

function RandomAdvice() {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        fetchAdvice();
    }, []);

    async function fetchAdvice() {
        try {
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip.advice);
        } catch (error) {
            console.error('Error: ', error);
        }
    }

    const clickAdvice = () => {
        fetchAdvice();
    };

    return (
        <div className="component-style">
            <div className="container bwt">
            <div onClick={clickAdvice} className="randomAdviceContainer">
                <BlueWisdomTile className="bwt-topleft"/>
                <BlueWisdomTile className="bwt-topright"/>
                <BlueWisdomTile className="bwt-bottomright"/>
                <BlueWisdomTile className="bwt-bottomleft"/>

                {/*<h2 className="title">Random Advice:</h2>*/}

                <p>{advice}</p>
            </div>
            </div>
        </div>
    );
}

export default RandomAdvice;