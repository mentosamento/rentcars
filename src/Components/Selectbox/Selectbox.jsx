import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useHistory, json } from "react-router-dom";
import Select, { createFilter } from "react-select";
import "./Selectbox.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMarka,
  changeModel,
  changeCity,
  changeMinYear,
  changeMaxYear,
  changeBan,
  changeColor,
  changeOwnerType,
} from "../../features/search";
import { optionsMap } from "../../utils/Data";

function Selectbox({ type, options, title }) {
  const location = useLocation();

  const search = useSelector((state) => state.search.value);

  const dispatch = useDispatch();

  const styles = {
    option: (provided, state) => ({
      ...provided,
      textAlign: "left", // Align options to the left
      fontFamily: "Inter",
    }),
    control: (provided) => ({
      ...provided,
      textAlign: "left",
      borderRadius: "12px",
      fontFamily: "Inter",
      fontWeight: "500",
      height: "45px",
      backgroundColor: manageDisabled() ? "#e8e8e8" : "white",
    }),

    menu: (provided, state) => ({
      ...provided,
      borderRadius: "10px", // Set your desired border radius here
      marginTop: 0,
      paddingBottom: "5px",
    }),
  };
  const filterOption = createFilter({
    matchFrom: "start", // Match from the beginning of the label
    allowEmpty: true, // Allow empty search string
    trim: false, // Don't trim whitespace from input
    filterOption: (option, inputValue) =>
      option.label.toLowerCase().startsWith(inputValue.toLowerCase()),
  });
  const [iValue, setIvalue] = useState("all");
  const navigate = useNavigate();

  function handleChange(newValue) {
    // update query parameters
    setSelected(newValue);
    setIvalue(newValue == null ? "all" : newValue.value);

    switch (type) {
      case "marka":
        dispatch(changeMarka(newValue == null ? "all" : newValue.value));

        break;
      case "model":
        dispatch(changeModel(newValue == null ? "all" : newValue.value));
        break;
      case "city":
        dispatch(changeCity(newValue == null ? "all" : newValue.value));
        break;
      case "ban":
        dispatch(changeBan(newValue == null ? "all" : newValue.value));
        break;
      case "color":
        dispatch(changeColor(newValue == null ? "all" : newValue.value));
        break;
    }
  }

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    dispatch(changeModel("all"));
    if (type == "model") {
      setSelected(null);
    }
  }, [search.marka]);

  // Example usage
  function manageDisabled() {
    if (type == "model") {
      if (search.marka != "all") {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  useEffect(() => {
    dispatch(changeMarka("all"));
    dispatch(changeModel("all"));
    dispatch(changeCity("all"));
    dispatch(changeBan("all"));
    dispatch(changeColor("all"));
  }, [location]);

  return (
    <div className="selectbox-container">
      <div className="selectbox" style={{ width: "100%" }}>
        <Select
          value={selected}
          className="basic-single"
          classNamePrefix="select"
          defaultValue={null}
          filterOption={filterOption}
          isClearable={true}
          isSearchable={true}
          name="color"
          options={type == "model" ? optionsMap[search.marka] : options}
          onChange={handleChange}
          styles={styles}
          placeholder={title}
          components={{
            IndicatorSeparator: () => null,
          }}
          isDisabled={manageDisabled()}
        />
      </div>
    </div>
  );
}

export default React.memo(Selectbox);
