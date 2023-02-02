import {
  H1,
  Wrapper,
  WrapperInput,
  WrapperTask,
  Input,
  ButtonAdd,
  BoxTask,
  ButtonTask,
  EmptyList,
} from "./App.styled.js";
import React, { useState } from "react";
import uniqid from "uniqid";
import { HiOutlineTrash } from "react-icons/hi2";

function App() {
  const [tab, setTab] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    setTab([...tab, { id: uniqid(), title: input }]);
    setInput("");
  };
  const handleDelete = (id) => {
    const newTab = tab.filter((el) => el.id !== id);
    setTab(newTab);
  };

  return (
    <Wrapper>
      <H1>React ToDo List </H1>
      <WrapperInput>
        <Input
          value={input}
          onChange={(el) => setInput(el.target.value)}
          type="text"
          placeholder="Add ToDo..."
        />
        <ButtonAdd onClick={handleAdd}>Add</ButtonAdd>
      </WrapperInput>
      {tab.length ? (
        tab.map(({ title, id }) => (
          <WrapperTask key={id}>
            <BoxTask>{title}</BoxTask>
            <ButtonTask onClick={() => handleDelete(id)}>
              <HiOutlineTrash />
            </ButtonTask>
          </WrapperTask>
        ))
      ) : (
        <EmptyList>EMPTY LIST</EmptyList>
      )}
    </Wrapper>
  );
}

export default App;
