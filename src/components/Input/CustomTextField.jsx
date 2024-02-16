function CustomTextField({ onChange, label, type }) {
  return (
    <div>
      <label htmlFor={label} className="text-sm">
        {label}
      </label>
      <input
        id={label}
        onChange={onChange}
        className="py-2 px-4 border rounded-md bg-slate-50 w-full text-sm outline-none hover:border-2 hover:border-red-200 focus:border-red-500 focus:border-2 duration-300"
        type={type || "text"}
      />
    </div>
  );
}

export default CustomTextField;
