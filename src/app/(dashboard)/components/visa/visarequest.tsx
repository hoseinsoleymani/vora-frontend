import { API_BASE_URL } from "@/lib";
import { useEffect, useState } from "react";
import { Requestvisa, VisaRules, Visatable } from "@/app/(dashboard)/components";

interface VisaRequestProps {
  token: string;
}

export interface Visa {
  id: number;
  passport_first_name: string;
  passport_country: string;
  visa_type: string;
  state: string;
  sexuality: string;
  passport_last_name: string;
  birthday: string;
  passport_number: string;
}

function VisaRequest({ token }: VisaRequestProps) {
  const [visaList, setVisaList] = useState<Visa[] | undefined>();
  const getData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/panel/visa-request/`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setVisaList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-14">
      {visaList && visaList.length > 0 ? (
        <Visatable visList={visaList} token={token} getData={getData} />
      ) : (
        <div>
          <div className="flex items-center justify-between mt-14">
            <h3 className="text-2xl font-bold">Request Visa</h3>
          </div>
          <div className="mt-64 flex flex-col gap-4">
            <p className="text-gray-5 text-3xl font-300 leading-15">
              You can request Visa for UEA, we will do all
              <br /> the process for you!
            </p>
            <div className="flex items-center gap-4">
              <Requestvisa token={token} getData={getData} />
              <VisaRules />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { VisaRequest };
