import Image from "./Image";

// export function Image(props){
//     return (
//       <img src= {props.src}/>
//     );
// }


function DogCard (props){
    return (
      <div>
        <h3>{props.name}</h3>
        <Image src={props.image}/>
      </div>
    );
}

export default DogCard