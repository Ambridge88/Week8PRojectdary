import './index.css'
import image from './image3.png'
export default function Rulebox(){
    return(<section className='rulebox' >
     <figure>
            <img src = {image} alt="" srcset="" />
            </figure>
    <ul>
        <p><li>Rule 1: Find a cash in your area</li></p>
        <p><li>Rule 2: Try to get get all the cash in the machine without getting caught</li></p>
        <p><li>Rule 3: If you get caught by the police then game over</li></p>
        <p><li>Rule 4: If you get caught by a dodgy cop, choose to pay him off and try to rob another ATM </li></p>
    </ul>
    </section>)
}