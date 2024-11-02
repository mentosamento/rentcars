import { InputAdornment, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeAtgucu, changeMail, changeMileage, changeName, changePhone, changePrice } from "../../features/post";

const StyledTextField = styled(TextField)(() => ({
  "& .MuiFormLabel-asterisk": {
    color: "#bf0a0d",
  },
}));

function InputMui({ title, type }) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  function globalSet(e) {
    setValue(e.target.value);
    switch (title) {
      case "Yürüş":
        dispatch(changeMileage(e.target.value));
        break;
      case "Qiymət":
        dispatch(changePrice(e.target.value));
        break;
      case "Mühərrikin gücü":
        dispatch(changeAtgucu(e.target.value));
        break;
      case "Ad":
        dispatch(changeName(e.target.value));
        break;
      case "Elektron poçt":
        dispatch(changeMail(e.target.value));
        break;
      case "Telefon  ( +994 12 345 67 89 )":
        dispatch(changePhone(e.target.value));
        break;
      default:
        console.log(e.target.value);
    }
  }

  function AdornmentRender() {
    switch (title) {
      case "Yürüş":
        return "km";
        break;
      case "Qiymət":
        return "AZN";
        break;
      case "Mühərrikin gücü":
        return "a.g";
        break;
      default:
        console.log(title);
    }
  }
  return (
    <div>
      <StyledTextField
        label={title}
        value={value}
        onChange={(e) => globalSet(e)}
        fullWidth
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">{AdornmentRender()}</InputAdornment>
          ),
          type: type == "num" ? "number" : "a",
          min: 5,
        }}
      />
    </div>
  );
}

export default React.memo(InputMui);
