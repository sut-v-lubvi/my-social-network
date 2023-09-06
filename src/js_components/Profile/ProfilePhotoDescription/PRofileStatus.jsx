import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px auto;
`;
export const Input = styled.input`
  height: auto;
  width: 230px;
  cursor: pointer;
  font-size: 14px;
  padding: 7px 0px 7px 12px;
  /* display: block; */
  box-shadow: inset 3px 3px 10px 2px rgba(0, 0, 0, 0.25),
    0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  background-color: rgba(99, 103, 107, 0.25);
  border: 2px solid #e3694a;
  border-radius: 30px;
`;
const Span = styled.span`
  cursor: pointer;
  font-size: 20px;
  text-align: start;
`;

const PRofileStatus = (props) => {
  const [textStatus, setTextStatus] = useState(props.statusUser);
  const [stateStatus, setStateStatus] = useState(true);
  return (
    <div>
      {stateStatus ? (
        <Span
          onDoubleClick={() => {
            setStateStatus(false);
          }}
        >
          {props.statusUser || "Status"}
        </Span>
      ) : (
        <Container>
          <Input
            value={textStatus}
            autoFocus={true}
            onChange={(e) => {
              setTextStatus(e.target.value);
            }}
            onBlur={() => {
              setStateStatus(true);
              props.statusUpdate(textStatus);
            }}
          />
        </Container>
      )}
    </div>
  );
};

export default PRofileStatus;
