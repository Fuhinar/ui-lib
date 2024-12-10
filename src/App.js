import {Button} from "./components/Button";

function App() {
  return (
    <div>
      <Button variant = 'bordered' size = 'large'>Confirm</Button>
      <Button variant = 'bordered' size = 'medium'>Confirm</Button>
      <Button variant = 'bordered' size = 'small'>Confirm</Button>
      
      <Button size = 'large'>Cancel</Button>
      <Button size = 'medium'>Cancel</Button>
      <Button size = 'small'>Cancel</Button>
    </div>
  );
}

export default App;
