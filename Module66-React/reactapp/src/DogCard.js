export function Image(){
    return (
      <img src="https://images.pexels.com/photos/16628553/pexels-photo-16628553/free-photo-of-young-man-on-a-motorcycle-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
    );
}


function DogCard (){
    return (
      <div>
        <h3>Bruno</h3>
        <Image/>
      </div>
    );
}

export default DogCard