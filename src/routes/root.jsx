import ContactsList from "../components/contactsList";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { CgSpinner } from "react-icons/cg";
import { Link } from "react-router-dom";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [agendaContacts, setAgendaContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      return await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_ENDPOINT}/api/contacts`,
      });
    };
    fetchData()
      .then((response) => {
        // console.log("response", response.headers)
        if (response.status === 200) {
          console.log("Request was successfull.", response.data);
          setAgendaContacts(response.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(`Request failed. error:`, error);
      });
  }, []);

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center">
        <div className="py-5">
          <h1 className="text-xl font-semibold text-gray-900 ">
            Address book web app
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A project build to support my application for the role of Full Stack
            Engineer at Digital Attitude
          </p>
        </div>
        <h1 className="text-xl font-semibold text-gray-900 ">
          My address book:
        </h1>
        {!isLoading ? (
          <ContactsList agendaContactList={agendaContacts} />
        ) : (
          <CgSpinner className="animate-spin text-9xl mx-auto" />
        )}
        <div className="py-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to={`contacts/new`}>Add New Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Root;
