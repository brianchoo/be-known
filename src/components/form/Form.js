import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import axios from "axios";

const Form = () => {
  const ref = useRef(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmitData(values) {
    setSubmitted(false);
    try {
      setLoading(true);
      let config = {
        method: "post",
        url: "http://localhost:3000/api/contact",
        headers: "application/json",
        data: values,
      };

      console.log(values, "values");

      const response = await axios(config);

      if (response.status === 200) {
        setMessage(
          "Your message has been sent. We will contact you within 24 hours."
        );
      }
      setSubmitted(true);
      setLoading(false);
      reset();
      console.log(response);
    } catch (error) {
      setMessage("There was an error processing your request.");
    }
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
                    {...register("name", {
                      required: true,
                      minLength: 1,
                    })}
                    id="name"
                    type="text"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">Name is required.</p>
                )}
              </div>
              <div className="sm:col-span-3">
                <div className="mt-2">
                  <FormInput
                    label="Phone Number"
                    ref={ref}
                    {...register("phone", {
                      required: true,
                      minLength: 9,
                      pattern: /^[-+0-9]+$/,
                    })}
                    id="phone"
                    type="text"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    Phone number is required.
                  </p>
                )}
              </div>

              <div className="sm:col-span-6">
                <div className="mt-2">
                  <FormInput
                    label="Email"
                    ref={ref}
                    {...register("email", {
                      required: true,
                      minLength: 9,
                      pattern:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    })}
                    id="email"
                    type="email"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    Email is required.
                  </p>
                )}
              </div>

              <div className="sm:col-span-6">
                <div className="mt-2">
                  <FormInput
                    label="Message"
                    ref={ref}
                    isTextarea={true}
                    {...register("message", {
                      required: true,
                      minLength: 1,
                    })}
                    id="textarea"
                  />
                </div>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    Message is required.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-start">
          <button
            type="submit"
            className="bg-purple px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 lg:w-[150px]"
          >
            {loading ? (
              <span className="flex justify-center items-center">
                {" "}
                <Image
                  src="/loading.svg"
                  alt="location"
                  width={23}
                  height={50}
                />
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
        {submitted ? <div className="mt-6">{message}</div> : ""}
      </form>
    </>
  );
};

export default Form;
