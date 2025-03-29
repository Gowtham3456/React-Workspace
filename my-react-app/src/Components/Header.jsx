
export const Header = () => {
    let customcss="code";
    const item=["item1","item2","item3","ITEM4"];
    const greetings=false;
    const Greeting=greetings?<p>yes good</p>:<p>please greet</p>
  return (
  <>
    <div>
        <h1 className="Brand">Tutor joes</h1>
        <h1 className="Brand">Tutor joes</h1>
        <p className="Slogan">learn more be smart</p>
        {/* Javascript expression in jsx
        mnamma {} kulla kudukkarathu ellame expression eduthukkum inline css pannanumna 
        case senstive and  athaiye innoru curly brace la podanum */}
        <p className={customcss} style={{fontSize:"40px",color:"red"}}>25+45={25+45}</p>

        {/* jsx listhandling */}
        {item.map((it,index)=>(<li Key={index} >{it}</li>))}

        {/* jsx with conditional rendreing --namma constion ah 
        check pannitu keezha irukka class ah call panna podhum */}
        {Greeting}
    </div>
  </>
  );
}
