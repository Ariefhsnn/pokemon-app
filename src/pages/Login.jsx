import Button from "../components/Button/Button";
import CustomTextField from "../components/Input/CustomTextField";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "../components/Message/ErrorMessage";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

function Login() {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    localStorage.setItem("email", data.email);
    return navigate("/home");
  };

  return (
    <motion.div className="grid place-content-center w-full h-screen">
      <motion.form
        initial={{ opacity: 0, y: 1000 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-100 p-5 rounded-md flex flex-col gap-6 w-[480px] shadow-md border"
      >
        <h1 className="text-center font-semibold text-xl text-gray-800">
          Pokemon App Login
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomTextField
                  onChange={onChange}
                  value={value}
                  label="Email"
                />
              )}
            />
            {errors["email"] && (
              <ErrorMessage
                testId="email-error"
                message={errors["email"].message}
              />
            )}
          </div>
          <div className="flex flex-col gap-1">
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, value } }) => (
                <CustomTextField
                  onChange={onChange}
                  value={value}
                  label="Password"
                  type="password"
                />
              )}
            />
            {errors["password"] && (
              <ErrorMessage
                testId="password-error"
                message={errors["password"].message}
              />
            )}
          </div>
        </div>
        <Button data-testid="login-button" type="submit">
          Login
        </Button>
      </motion.form>
    </motion.div>
  );
}

export default Login;
