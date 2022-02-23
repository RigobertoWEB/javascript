import { useState } from "react";
import { Button, Collapse } from "react-bootstrap"
import Menu from "./Menu";

const Colaps = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="menu-javascript-b"
      >
        <h2>Temas JavaScript</h2>
      </Button>

      <Collapse in={open}>
        <div id="example-collapse-text">
        <Menu/>
        </div>
      </Collapse>
    </div>
  )
}

export default Colaps
