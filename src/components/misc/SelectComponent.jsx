import React from "react";

const SelectComponent = ({
  selectOptList,
  handleSelectedOpt,
  extraClases,
  defaultOption,
  selectedValue
}) => {
  // const [selectOpt, setSelectOpts] = useState(selectOptList);
  // const [selected, setSelected] = useState();

  const handleSelecChange = event => {
    const selectedOpt = selectOptList.filter(
      opt => opt.value === event.target.value
    );
    handleSelectedOpt(selectedOpt);
  };

  return (
    <select
      className={extraClases ? extraClases : ""}
      value={selectedValue}
      onChange={handleSelecChange}
    >
      {defaultOption !== "" ? (
        <option value="default">{defaultOption}</option>
      ) : (
        ""
      )}
      {selectOptList.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
