import './index.css'
import image from './image2.png'

export default function Playerinfo(props){
    async function steelFunction(e) {

        const id = e.target.value;

        return await fetch(`http://localhost:5001/atms/${id}/grab`).then((response) => response.json())
     
    }

    return(<section className='playerinfo' >

    <figure>
            <img src={image} alt="" srcset="" />
        </figure>
        <form onSubmit={(e) => steelFunction(e)}>
            <input type="number" min="1" max="1271" />
            <input type="submit" value="Submit" />
        </form>
    <section>
        {props.cashBalance}
    </section></section>
        
)}
    
