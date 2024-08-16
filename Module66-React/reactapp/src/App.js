import Image from "./Image";
import DogCard1  from "./DogCard";

function App() {
  return (
    <>
      Hello
      <DogCard1
        name="Shourya"
        image="https://www.pexels.com/photo/blocks-of-flats-in-city-25823790/"
      />
      <DogCard1
        name="Akash"
        image="https://www.pexels.com/photo/flower-and-agate-flat-lay-with-delicate-petals-27495825/"
      />
      <Image image="https://www.pexels.com/photo/view-of-a-rocking-chair-and-antique-items-in-a-room-with-large-windows-14499730/" />
    </>
  );
}

export default App;