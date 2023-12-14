import '../Cards/card.css'
import Img from  "../../assets/uzb.jpg"
 const Cards = () => {
  return (
    <li>
        <img src={Img} alt="Template img" width={450} height={300} />
       <h4>
        Uzbekistan, Tashkent
        </h4> 
        <p><strong>Aholisi:</strong> 36 006 008 kishi</p>
        <p><strong>Yer maydoni:</strong> 448 924 km²</p>
        <p><strong>Davlat tili:</strong> O‘zbek tili</p>
    </li>
  )
}

export default Cards