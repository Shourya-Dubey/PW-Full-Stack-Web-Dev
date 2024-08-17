import Image from "./Image";
import DogCard1  from "./DogCard";
import Counter from "./ReactPart2/Counter";
import Conditional  from "./ReactPart2/Conditional";
import Todo from "./ReactPart2/Todo";

function App() {
  return (
    <>
      {/* Hello
      <DogCard1
        name="Shourya"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnI33utT_AfatFvwqr9LLt599wJoIriqyIw&s"
      />
      <DogCard1
        name="Akash"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7zpG7Q2QGK9YGchMgfbXycRtDimjSCjk8w&s"
      />
      <Image image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLm-r3QBCn15pn9zz68VFG1Bw2keUrwZ7WueGL4rQuA2TQpQA9jOrEt4nDisDresZIMIM&usqp=CAU" /> */}

      <Counter/>
      <Conditional/>
      <Todo/>
    </>
  );
}

export default App;