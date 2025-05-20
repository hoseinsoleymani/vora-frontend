import React from "react";
import { Visa } from "./visarequest";
import { Button } from "@/components/ui";
import { Requestvisa, VisaPaymentInfo } from "@/app/(dashboard)/components";

interface VisatableProps {
  visList: Visa[];
  token: string;
  getData : () => void
}

function Visatable({
  visList,
  token,
  getData
}: VisatableProps) {
  return (
    <div>
      <div className="flex items-center justify-between mt-14">
        <h3 className="text-2xl font-bold">Request Visa</h3>
        <Requestvisa token={token} getData={getData}/>  
      </div>
      <div className="overflow-x-auto mt-14">
        <table className="min-w-full">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left font-bold text-sm">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-left font-bold text-sm">
                Passenger Name
              </th>
              <th scope="col" className="px-6 py-3 text-left font-bold text-sm">
                Sexuality
              </th>
              <th scope="col" className="px-6 py-3 text-left font-bold text-sm">
                Birthday
              </th>
              <th scope="col" className="px-6 py-3 text-left font-bold text-sm">
                Passport Number
              </th>
              <th scope="col" className="px-6 py-3 text-left font-bold text-sm">
                Visa Type
              </th>
              <th scope="col" className="px-6 py-3 text-left font-bold text-sm">
                State
              </th>
              <th scope="col" className="px-6 py-3 text-left font-bold text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {visList.map((visa, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {visa.passport_first_name} {visa.passport_last_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {visa.sexuality}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {visa.birthday}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {visa.passport_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {visa.visa_type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Button
                    variant={"outline"}
                    className="w-full bg-gray-100 text-gray-500 border-gray-4"
                  >
                    {visa.state}
                  </Button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <VisaPaymentInfo id={visa.id} token={token} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { Visatable };
