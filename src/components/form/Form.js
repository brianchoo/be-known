import { useRef } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import axios from "axios";

const Form = () => {
  const ref = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmitData(values) {
    let config = {
      method: "post",
      url: "http://localhost:3000/api/contact",
      headers: "application/json",
      data: values,
    };

    console.log(values, "values");

    const response = await axios(config);
    console.log(response);
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <div className="space-y-12 pt-8 lg:pt-0">
          <div className="pb-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <FormInput
                    label="Name"
                    ref={ref}
                    {...register("name")}
                    id="name"
                    type="text"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <FormInput
                    label="Phone Number"
                    ref={ref}
                    {...register("phone")}
                    id="phone"
                    type="text"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <div className="mt-2">
                  <FormInput
                    label="Email"
                    ref={ref}
                    {...register("email")}
                    id="email"
                    type="email"
                    name="email"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <div className="mt-2">
                  <FormInput
                    label="Message"
                    ref={ref}
                    isTextarea={true}
                    {...register("message")}
                    id="textarea"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start">
          <button
            type="submit"
            className="bg-purple px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
