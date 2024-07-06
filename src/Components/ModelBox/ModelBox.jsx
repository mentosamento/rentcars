import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Select, { createFilter } from 'react-select';

const hyundai = [
    { value: 'santafe', label: 'Santa-Fe' },
    { value: 'sonata', label: 'Sonata' },
    { value: 'quanji', label: 'Quanji' },
  ];
  const landrover = [
    { value: 'rangerover', label: 'Range Rover' },
    { value: 'velar', label: 'Velar' },
    { value: 'rangeroversport', label: 'Range Rover Sport' },
  ];


  const optionsMap = {
    hyundai: hyundai,
    // Add options for other types:
    landrover: landrover
    // ...
  };

function Modelbox({type, title, disabled}) {








  const styles = {
    option: (provided, state) => ({
      ...provided,
      textAlign: 'left', // Align options to the left
      fontFamily: "Inter",
    }),
    control: (provided) => ({
      ...provided,
      textAlign: 'left',
      borderRadius: '12px',
      fontFamily: "Inter",
      fontWeight: "500",
      height: "45px"
    }),
    
    
    menu: (provided, state) => ({
      ...provided,
      borderRadius: '12px', // Set your desired border radius here
      paddingBottom: "5px",

      marginTop: 0,
    }),
  };
const filterOption = createFilter({
    matchFrom: 'start', // Match from the beginning of the label
    allowEmpty: true, // Allow empty search string
    trim: false, // Don't trim whitespace from input
    filterOption: (option, inputValue) =>
      option.label.toLowerCase().startsWith(inputValue.toLowerCase()),
  });
  function hasObjectWithSameProperties(obj, arr) {
    for (const item of arr) {
      if (Object.keys(obj).every(key => obj[key] === item[key])) {
        return true;
      }
    }
    return false;
  }
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
 
  const [selectedValue, setSelectedValue] = useState(null);

  function handleChange(newValue) {
    setSelectedValue(newValue)
    queryParams.set("model", newValue.value);

    // create new search string and navigate to it
      const newSearch = `?${queryParams.toString()}`;
      navigate({ search: newSearch });
    
  }


    useEffect(() => {
      setSelectedValue(null);
      queryParams.set("model", "all");

    // create new search string and navigate to it
      const newSearch = `?${queryParams.toString()}`;
      navigate({ search: newSearch });
    }, [type])
  


  // Example usage




  return (
    <div  style={{width: "50%", marginLeft: "1%"}}>
<Select
    value={selectedValue}
    className="basic-single"
    classNamePrefix="select"
    defaultValue={null}
    filterOption={filterOption}
    isClearable={false}
    isDisabled={disabled}
    isSearchable={true}
    name="color"
    options={optionsMap[type]}
    onChange={handleChange}
    styles={styles}
    placeholder="Model"
    components={{
      IndicatorSeparator: () => null
    }}
  />
  
    </div>
    
  );
};

export default Modelbox;
