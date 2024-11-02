import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAdditional } from "../../features/post";
import { makeStyles } from "@mui/styles";

function Check({ title }) {
  const [value, setValue] = useState(false);
  const search = useSelector((state) => state.post.value);
  const dispatch = useDispatch();

  function changeHandler(e) {
    setValue(!value);
    const receive = e.target.checked;
    const additional = search.additional;
    let newObject;
    switch (title) {
      case "Yüngül lehimli disklər":
        newObject = { ...additional, yld: receive };
        break;
      case "Mərkəzi qapanma":
        newObject = { ...additional, mq: receive };
        break;
      case "Dəri salon":
        newObject = { ...additional, ds: receive };
        break;
      case "Oturacaqların ventilyasiyası":
        newObject = { ...additional, ov: receive };
        break;
      case "ABS":
        newObject = { ...additional, abs: receive };
        break;
      case "Park radarı":
        newObject = { ...additional, pr: receive };
        break;
      case "Ksenon lampalar":
        newObject = { ...additional, kl: receive };
        break;
      case "Lyuk":
        newObject = { ...additional, lyuk: receive };
        break;
      case "Kondisioner":
        newObject = { ...additional, kondisioner: receive };
        break;
      case "Arxa görüntü kamerası":
        newObject = { ...additional, agk: receive };
        break;
      case "Yağış sensoru":
        newObject = { ...additional, ys: receive };
        break;
      case "Oturacaqların isidilməsi":
        newObject = { ...additional, oi: receive };
        break;
      case "Yan pərdələr":
        newObject = { ...additional, yp: receive };
        break;
      default:
        newObject = { ...additional };
    }
    dispatch(changeAdditional(newObject));
  }

  return (
    <div>
      <FormControl fullWidth>
        <FormControlLabel
          style={{ textAlign: "left" }}
          control={
            <Checkbox checked={value} onChange={(e) => changeHandler(e)} />
          }
          label={title}
        />
      </FormControl>
    </div>
  );
}

export default Check;
