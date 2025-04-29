interface PassengersInfoProps {
  travelers_data: Array<{
    contact: {
      emailAddress: string;
      phones: Array<{
        countryCallingCode: string;
        number: string;
      }>;
    };
    documents: Array<{
      issuanceCountry: string;
    }>;
    gender: string;
    name: {
      firstName: string;
      lastName: string;
    };
    dateOfBirth: string;
  }>;
  isPrimary: boolean;
}

function formatDate(inputDate: string) {
  return inputDate.replace(/-/g, "/");
}

function PassengersInfo({ travelers_data }: PassengersInfoProps) {
  return (
    <div className="mt-8 flex flex-col gap-8 px-4">
      {travelers_data.map((passenger, index) => (
        <div className="flex flex-col gap-2" key={index}>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="i-fluent:person-20-regular"></span>
              <p>Adult {index + 1} information</p>
              {index === 0 && (
                <span className="text-sm text-gray-5">Primary Passenger</span>
              )}
            </div>
          </div>
          <div className="px-2">
            <h3 className="font-bold">
              {passenger.name.firstName} {passenger.name.lastName}
            </h3>
            <div className="flex items-center mt-2">
              <div className="flex flex-col gap-1 w-1/3">
                <h4 className="text-sm font-medium">Passport Gender</h4>
                <p className="text-sm text-gray-5">{passenger.gender}</p>
              </div>
              <div className="flex flex-col gap-1 w-1/3">
                <h4 className="text-sm font-medium">Passport Country</h4>
                <p className="text-sm text-gray-5">
                  {passenger.documents[0].issuanceCountry}
                </p>
              </div>
              <div className="flex flex-col gap-1 w-1/3">
                <h4 className="text-sm font-medium">Birthday</h4>
                <p className="text-sm text-gray-5">
                  {formatDate(passenger.dateOfBirth)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { PassengersInfo };
