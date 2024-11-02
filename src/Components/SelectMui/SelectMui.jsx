import { Box, MenuItem, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMarka,
  changeMaxPrice,
  changeMinPrice,
  changeModel,
  changeCity,
  changeMinYear,
  changeMaxYear,
  changeBan,
  changeColor,
  changeOwnerType,
  changeOturucu,
  changeSuretqutu,
  changeYear,
  changeHecm,
  changeYer,
} from "../../features/post";
import { optionsMap } from "../../utils/Data";

const useStyles = makeStyles({
  select: {
    "& .MuiSelect-select": {
      textAlign: "left",
    },
    "& .MuiFormLabel-asterisk": {
      color: "#bf0a0d",
    },
  },
});

function SelectMui({ options, title }) {
  const post = useSelector((state) => state.post.value);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [select, setSelect] = useState("");
  const handleChange = (e) => {
    setSelect(e.target.value);

    // eslint-disable-next-line default-case
    switch (title) {
      case "Marka":
        dispatch(changeMarka(e.target.value));
        break;
      case "Model":
        dispatch(changeModel(e.target.value));
        break;
      case "Şəhər":
        dispatch(changeCity(e.target.value));
        break;
      case "Ban növü":
        dispatch(changeBan(e.target.value));
        break;
      case "Rəng":
        dispatch(changeColor(e.target.value));
        break;
      case "Ötürücü":
        dispatch(changeOturucu(e.target.value));
        break;
      case "Sürətlər qutusu":
        dispatch(changeSuretqutu(e.target.value));
        break;
      case "İl":
        dispatch(changeYear(e.target.value));
        break;
      case "Mühərrikin həcmi (Litr)":
        dispatch(changeHecm(e.target.value));
        break;
      case "Yerlərin sayı":
        dispatch(changeYer(e.target.value));
        break;
    }
  };
  function optionAssign() {
    if (title == "Model") {
      if (post.marka == "none") {
        return [];
      } else {
        return optionsMap[post.marka];
      }
    } else {
      return options;
    }
  }
  useEffect(() => {
    dispatch(changeModel("none"));
  }, [post.marka]);

  function modelDisable() {
    if (title == "Model") {
      if (post.marka != "none") {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }
  return (
    <Box>
      <TextField
        size="small"
        disabled={modelDisable()}
        label={title}
        select
        value={select}
        onChange={handleChange}
        fullWidth
        className={classes.select}
      >
        {optionAssign()?.map((data) => (
          <MenuItem key={data.value} value={data.value}>
            {data.label}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default React.memo(SelectMui);
