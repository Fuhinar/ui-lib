import "./index.css";
import Button from "./components/Button/index.jsx";
import Header from "./components/Header/index.js";
import Input from "./components/Input/index.js";
import Typography from "./components/Typography/index.js";
import Tooltip from "./components/Tooltip/index.js";
import Accordion from "./components/Accordion/index.js";

function App() {
  return (
    <div id = "app-container" >
      <div id="primary_buttons">
        <Button variant="primary" size="lg">lg, primary</Button>
        <Button variant="primary" size="md" btnType="reset">md, primary</Button>
        <Button variant="primary" size="sm" disabled>sm, primary</Button>
        <Button variant="primary" size="md">Hover</Button>
      </div>

      <div id="bordered_buttons">
        <Button variant="bordered" size="lg">lg, bordered</Button>
        <Button variant="bordered" size="md" disabled>md, bordered</Button>
        <Button variant="bordered" size="sm">sm, bordered</Button>
        <Button variant="bordered" size="md">Hover</Button>
      </div>

      <div id="inputs">
        <Input type="text" placeholder="Ivan Ivanov" />
        <Input type="text" placeholder="Focus" label="Name" />
        <Input type="text" placeholder="Danger" danger label="Name" />
        <Input type="text" placeholder="Enter your password" disabled label="Name" value="Disabled"/>
      </div>

      <div id="typographies">
        <Typography textSize="sm">SM. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.</Typography>
        <Typography textSize="md">MD. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.</Typography>
        <Typography textSize="lg">LG. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.</Typography>
      </div>

      <div id="headers">
        <Header level={1}>H1. Heading</Header>
        <Header level={2}>H2. Heading</Header>
        <Header level={3}>H3. Heading</Header>
        <Header level={4}>H4. Heading</Header>
        <Header level={5}>H5. Heading</Header>
        <Header level={6}>H6. Heading</Header>
      </div>

      <div id="tooltips">
        <Tooltip text="I am a tooltip" position="top">
        Tooltip Top
        </Tooltip>
        <Tooltip text="I am a tooltip" position="right">
          Tooltip Right
        </Tooltip>
        <Tooltip text="I am a tooltip" position="left">
          Tooltip Left
        </Tooltip>
        <Tooltip text="I am a tooltip" position="bottom">
          Tooltip Bottom
        </Tooltip>
      </div>

      <div id="accordions">
        <Accordion title="Accordion 1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion>
        <Accordion title="Accordion 2" defaultOpen>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Accordion>
      </div>
    </div>
  );
}

export default App;
