import Button from "../components/Button/Button";
import CustomTextField from "../components/Input/CustomTextField";
import { motion } from "framer-motion";
import CustomSelect from "../components/Input/CustomSelect";

const formList = [
  {
    id: 1,
    label: "Username",
    name: "username",
    type: "textField",
  },
  {
    id: 2,
    label: "Gender",
    name: "gender",
    type: "select",
    placeholder: "Select Gender",
  },
  {
    id: 3,
    label: "Email",
    name: "email",
    type: "textField",
  },
  {
    id: 4,
    label: "Password",
    name: "password",
    type: "password",
  },
];

const genderList = [
  {
    id: 1,
    label: "Male",
    value: "male",
  },
  {
    id: 2,
    label: "Female",
    value: "female",
  },
];

function Register() {
  return (
    <motion.div className="grid place-content-center w-full h-screen relative">
      <motion.form
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-100 p-5 rounded-md flex flex-col gap-6 w-[480px] shadow-md border"
      >
        <h1 className="text-center font-semibold text-xl text-gray-800">
          Pokemon App Register
        </h1>
        <div className="flex flex-col gap-4">
          {formList.map((form) => (
            <div>
              {form.type === "select" ? (
                <CustomSelect
                  label={form.label}
                  placeholder={form.placeholder}
                  options={genderList}
                />
              ) : (
                <CustomTextField label={form.label} />
              )}
            </div>
          ))}
        </div>
        <Button data-testid="login-button" type="submit">
          Register
        </Button>
      </motion.form>
    </motion.div>
  );
}

export default Register;
