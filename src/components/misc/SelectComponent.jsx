import React, { useState } from "react";

const SelectComponent = ({
  selectOptList,
  handleSelectedOpt,
  extraClases,
  defaultOption
}) => {
  const [selectOpts, setSelectOpts] = useState(selectOptList);
  const [selected, setSelected] = useState();

  const handleSelecChange = event => {
    const selectedOpt = selectOpts.filter(
      opt => opt.value === event.target.value
    );
    handleSelectedOpt(selectedOpt);
  };

  return (
    <select
      className={extraClases ? extraClases : ""}
      value={selected}
      onChange={handleSelecChange}
    >
      {defaultOption !== "" ? (
        <option value="default">{defaultOption}</option>
      ) : (
        ""
      )}
      {selectOpts.map((opt, i) => (
        <option key={i} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
