// src/components/bootstrap.jsx
import Accordion from 'react-bootstrap/Accordion';

const Bootstrap = () => {
  return (
    <div className="bg-red-400 py-8 mt-10 flex flex-col items-center justify-center min-h-[20rem]">
      <h1 className="text-2xl font-bold mb-4 text-white">Bootstrap CSS Component</h1>

      <Accordion defaultActiveKey="" className="w-3/4 max-w-lg">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Bootstrap;
