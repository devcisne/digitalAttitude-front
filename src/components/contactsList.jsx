import { HiEnvelope } from "react-icons/hi2";
import { HiChevronRight, HiPhone } from "react-icons/hi";
import { Link } from "react-router-dom";

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
};

const ContactsList = ({ agendaContactList }) => {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {agendaContactList.map(
          ({
            _id,
            contactName,
            contactSurname,
            email,
            phoneNumber,
            profilePic,
            updatedAt,
          }) => (
            <li key={_id}>
              <div className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex min-w-0 flex-1 items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src="https://via.placeholder.com/400x200"
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="truncate text-sm font-medium text-indigo-600">
                          {`${contactName} ${contactSurname}`}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <HiEnvelope
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="truncate">{email}</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            Last modified on {formatTimestamp(updatedAt)}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            <HiPhone
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            {phoneNumber}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Link to={`contacts/${_id}`}>
                      <HiChevronRight
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default ContactsList;
