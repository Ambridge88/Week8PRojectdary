import './index.css'
import image from './image2.png'

export default function Playerinfo(props){
    return(<section className='playerinfo' >
    <figure>
            <img src = {image} alt="" srcset="" />
    </figure>
    <section>
        {props.cashBalance}
    </section>
    
   
    </section>)
}