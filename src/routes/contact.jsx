import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HiPhone } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { GiPositionMarker } from "react-icons/gi";
import ReturnHomeButton from "../components/returnHomeButton";
import axios from "axios";
import { Link } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

const Contact = () => {
  const [contactData, setContactData] = useState({
    contactName: "Diego",
    contactSurname: "Cisneros",
    email: "diegocisneros059@gmail.com",
    address: "via dell'assunzione 32",
    phoneNumber: "0123456789",
    profilePic: "",
  });
  const { contactId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchData = async () => {
      return await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/contacts/${contactId}`,
      });
    };
    fetchData()
      .then((response) => {
        console.log("response", response);
        if (response.status === 200) {
          // console.log("Request was successfull.");
          setContactData(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(`Request failed. error:`, error);
      });
  }, [contactId]);

  return (
    <>
      <ReturnHomeButton />
      <Link
        to={`../contacts/edit/${contactId}`}
        state={{ contactData: { ...contactData, _id: contactId } }}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
      >
        Edit
      </Link>

      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        {!isLoading ? (
          <section className="pt-4 bg-blueGray-50">
            <div className="w-full lg:w-4/12 px-4 mx-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full px-4 flex justify-center">
                      <div className="relative">
                        <img
                          className="shadow-xl rounded-lg h-auto align-middle border-none  max-w-150-px"
                          src="https://via.placeholder.com/400x200"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                      {`${contactData.contactName} ${contactData.contactSurname}`}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400">
                        <HiPhone
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 inline"
                          aria-hidden="true"
                        />{" "}
                        {`${contactData.phoneNumber}`}
                      </i>
                    </div>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400">
                        <HiEnvelope
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 inline"
                          aria-hidden="true"
                        />
                        {`${contactData.email}`}
                      </i>
                    </div>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400">
                        <GiPositionMarker
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400 inline"
                          aria-hidden="true"
                        />
                        {`${contactData.address}`}
                      </i>
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Minima praesentium dignissimos incidunt
                          doloribus magnam eveniet, cum tempore placeat quod
                          voluptates nobis eum repellendus vel soluta? Voluptas
                          vel at iure facilis?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <CgSpinner className="animate-spin text-9xl mx-auto" />
        )}
      </div>
    </>
  );
};

export default Contact;
