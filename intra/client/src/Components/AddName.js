import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { addPlayerName } from "../actions/playerAction";
import { useDispatch } from "react-redux";
import { StyledButton, StyledInput, StyledAddnameWrapper } from "./styling/StyledForm";

const AddName = () => {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");

  function adduser(e) {
    e.preventDefault();
    if (username.trim() !== "") {
      dispatch(addPlayerName(username.trim()));
    }
    else {
      setUserName("")
      toast.error(
        "Please Enter correct 1 to 12 characters in length player and room names"
      );
    }
  }
  useEffect(() => {
    document.getElementById("username-i") && document.getElementById("username-i").focus();
  });
  return (
    <StyledAddnameWrapper  onSubmit={(e) => adduser(e)}>
      <StyledInput
        id="username-i"
        placeholder="Enter Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <StyledButton>Submit</StyledButton>
    </StyledAddnameWrapper>
  );
};

export default AddName;
