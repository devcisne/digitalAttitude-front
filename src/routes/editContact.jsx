import React, { useState } from "react";
import ReturnHomeButton from "../components/returnHomeButton";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditContact = () => {
  const location = useLocation();
  const { contactData } = location.state;
  const [isSuccess, setSuccess] = useState(false);
  const navigate = useNavigate();

  //   console.log("contact data:", contactData);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({});

  const sendForm = (data) => {
    let updateData = data;
    updateData.id = contactData._id;
    const postData = async () => {
      return await axios({
        method: "POST",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/contacts/edit`,
        data,
      });
    };

    postData()
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          setSuccess(true);
          reset();
          navigate("/");
        }
      })

      .catch((error) => {
        console.log(`Message failed to add new contact. error:`, error);
      });
  };

  return (
    <>
      <ReturnHomeButton />

      <div className="flex flex-col justify-center items-center h-screen">
        <form onSubmit={handleSubmit(sendForm)}>
          <div className="mb-2">
            <label
              htmlFor="contactName"
              className="block text-sm font-semibold text-[#007EA7]"
            >
              Name
            </label>
            <input
              {...register("contactName", {
                required: "Name is a required field.",
              })}
              name="contactName"
              type="text"
              defaultValue={contactData.contactName}
              placeholder="Name"
              className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                errors.contactName ? "border-pink-500 text-pink-600" : ""
              } 
              `}
            />
            <p className="text-pink-600">{errors.contactName?.message}</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="contactSurname"
              className="block text-sm font-semibold text-[#007EA7]"
            >
              Surname
            </label>
            <input
              {...register("contactSurname", {
                required: "Surname is a required field.",
              })}
              name="contactSurname"
              type="text"
              placeholder="Surname"
              defaultValue={contactData.contactSurname}
              className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                errors.contactSurname ? "border-pink-500 text-pink-600" : ""
              } 
              `}
            />
            <p className="text-pink-600">{errors.contactSurname?.message}</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#007EA7]"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email.",
                },
              })}
              name="email"
              type="email"
              defaultValue={contactData.email}
              placeholder="Email"
              className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                errors.email ? "border-pink-500 text-pink-600" : ""
              } 
              `}
            />
            <p className="text-pink-600">{errors.email?.message}</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-semibold text-[#007EA7]"
            >
              Phone
            </label>
            <input
              {...register("phoneNumber", {
                required: "phoneNumber is a required field.",
                pattern: {
                  value: /^\d{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              name="phoneNumber"
              type="tel"
              defaultValue={contactData.phoneNumber}
              placeholder="000 000 0000"
              className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                errors.phoneNumber ? "border-pink-500 text-pink-600" : ""
              } 
              `}
            />
            <p className="text-pink-600">{errors.phoneNumber?.message}</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-[#007EA7]"
            >
              Address
            </label>
            <input
              {...register("address", {
                required: "Address is a required field.",
              })}
              name="address"
              type="text"
              placeholder="address"
              defaultValue={contactData.address}
              className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                errors.address ? "border-pink-500 text-pink-600" : ""
              } 
              `}
            />
            <p className="text-pink-600">{errors.address?.message}</p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="profilePic"
              className="block text-sm font-semibold text-[#007EA7]"
            >
              Profile picture
            </label>
            <input
              {...register("profilePic")}
              name="profilePic"
              type="file"
              className={`mt-1 focus:ring-[#00A8E8] focus:border-[#00A8E8] block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm ${
                errors.profilePic ? "border-pink-500 text-pink-600" : ""
              } 
              `}
            />
            <p className="text-pink-600">{errors.profilePic?.message}</p>
          </div>
          {isSuccess && (
            <p className="text-[#00A8E8] text-center py-2">
              Contact edited successfully!
            </p>
          )}
          <div className="place-content-center  flex items-center flex-col md:flex-row">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Update contact
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditContact;
