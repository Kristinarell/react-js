import React from "react";

export const MySelect = ({ options, defaultValue, ...props }) => {
  // const selectOption = (event) => {
  //   if (event.target.value !== defaultValue) {
  //     props.onChange(event.target.value);
  //     props.handleSelect(event.target.value); // вызываем функцию в родительском компоненете, которая обработает селект
  //   }
  // };

  return (
    <select value={props.value} onChange={(event) => props.onChange(event.target.value)}>
      <option defaultValue>{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

//const [selected, setSelected] = useState(defaultValue);
//   console.log(`event.target.value: ${event.target.value}`);
//   setSelected(event.target.value);
//   console.log(`Состояние: ${selected}`); // состояние обновляется с опозданием почему????
