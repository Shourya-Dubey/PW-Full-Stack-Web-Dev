import Image from "./Image";
import Name from "./Name";

// export function Image(props){
//     return (
//       <img src= {props.src}/>
//     );
// }


function DogCard (props){
  let title = 'this is title'
    return (
      <div>
        <h2 style={
            {
             fontSize: "10px",
             color: "red"
            }
          }>
          {title}
        </h2>
        <Name>
          <h3>{props.name}</h3>
        </Name>
        <Image src={props.image} />
      </div>
    );
}

export default DogCard