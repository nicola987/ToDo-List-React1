import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  margin: 30px;
  border: 1px solid;
  padding: 15px;
  background-color: #5f3dc4;
  border-radius: 10px;
  border: none;
`;

export const Wrapper = styled.div`
  border: solid 1px;
  margin: 0 auto;
  width: 1000px;
  height: auto;
  margin-top: 150px;
  background-color: #343a40;
  border-radius: 5px;
`;

// INPUT
export const WrapperInput = styled.div`
  display: flex;
  column-gap: 20px;
  justify-content: center;
  margin-bottom: 50px;
`;
export const Input = styled.input`
  border-radius: 7px;
  width: 600px;
  height: 40px;
  background: #f1f3f5;
  padding: 3px;
`;
export const ButtonAdd = styled.button`
  border-radius: 7px;
  border: none;
  width: 40px;
  background-color: #5f3dc4;
`;

// TASK
export const WrapperTask = styled.div`
  margin: 25px;
  display: flex;
  margin-bottom: 30px;
  padding-left: 70px;
  column-gap: 35px;
  background-color: #868e96;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 5px;
`;

export const BoxTask = styled.div`
  width: 700px;
  height: 25px;
  padding: 4px;
  background-color: #ced4da;
  border-radius: 5px;
`;
export const ButtonTask = styled.button`
  background-color: #5f3dc4;
  border: none;
  width: 40px;
  border-radius: 7px;
`;

// EMPTY LIST

export const EmptyList = styled.div`
  color: #868e96;
  width: 100%;
  text-align: center;
  padding-bottom: 16px;
`;
