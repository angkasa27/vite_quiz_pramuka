import React from "react";

export default function TextInput(props) {
  const {
    onChange,
    value,
    className,
    inputClass,
    label,
    labelClass,
    custom,
    ...otherProps
  } = props;
  return (
    <div class={" " + className}>
      {!!label && (
        <label
          for="exampleFormControlInpu3"
          class={
            "form-label inline-block mb-2 text-gray-800 font-semibold " +
            labelClass
          }
        >
          {label}
        </label>
      )}
      <input
        type="text"
        class={
          "form-control block w-full px-3 py-1.5 font-normal bg-clip-padding border border-solid rounded-md transition ease-in-out m-0 focus:border-cyan-500 focus:outline-none " +
          (custom ? " " : " text-gray-800 bg-white ") +
          inputClass
        }
        value={value}
        onChange={(e) => onChange(e.target.value)}
        {...otherProps}
      />
    </div>
  );
}
