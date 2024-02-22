import Select from "react-select";
function CustomSelect({ label, onChange, value, options, placeholder }) {
  return (
    <div>
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <Select
        placeholder={""}
        onChange={onChange}
        value={value}
        options={options || []}
        styles={{
          control: (base) => ({
            ...base,
            outline: "none",
            backgroundColor: "#f8fafc",
            ":hover": {
              border: "2px solid #fecaca",
            },
            ":focus": {
              border: "2px solid #fecaca !important",
            },
          }),
        }}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </div>
  );
}

export default CustomSelect;
