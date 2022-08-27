import {React, useState, useEffect} from 'react';
import quotes from '../Quote.json'
import QuoteTxt from './QuoteTxt';


const QuoteBox = () => {

    const randomIndex = (obj) => {
        return parseInt(Math.random()*obj.length-1)
    }
    //Load quote in a random way
    const[index, setIndex]= useState( randomIndex(quotes) )
    
    const colors = ['#845EC2', '#D65DB1', '#FF6F91', '#2C73D3', '#0081CF', '#008E9B', '#008F7A','#C34A36','#00296073','#3596B5','#ADC5CF','#0D53624','#BE36B3','#4B4453','#005B44','#05E3C9C','#030045','#4D8076','#FF9671','#2189A7']
    const randomColor = Math.floor(Math.random() * colors.length)
    const[colorIndex, setColorIndex] = useState(randomIndex(colors))
    
    useEffect(()=>{
        document.body.style.backgroundColor = colors[colorIndex]
    },[index])

    const changeQ = (colorIndex) => {
        setIndex( randomIndex(quotes) )
        setColorIndex(randomIndex(colors))
    }

    return (
        <div className="App" style={{color: colors[colorIndex]}}>
          <div className="Carts">
                <QuoteTxt txt={quotes[index].quote} author={quotes[index].author}/>
            <button onClick={changeQ} style={{background: colors[colorIndex]}}><i class='bx bxs-chevrons-right'></i></button>
          </div>
        </div>
    );
};

export default QuoteBox;