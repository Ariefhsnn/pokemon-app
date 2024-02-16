export default function Button({ variant, children, ...resProps }) {
  return (
    <button
      className="py-2 px-4 bg-primary-500 text-white hover:scale-[102%] duration-300 hover:shadow-sm rounded-md"
      {...resProps}
    >
      {children}
    </button>
  );
}
