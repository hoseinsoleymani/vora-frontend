import React from "react";
import { Button } from "@/components/ui";
import { PassportInfo } from "./pasportinfo";
import { DeletePassportInfo } from "./deletepassportinfo";
import { EditPassportInfo } from "./editpassportinfo";

interface PassportTabelProps {
  passportData: PassportInfo[];
  token: string
  getData: () => void
}

function PassportTabel({ passportData , token , getData }: PassportTabelProps) {
  return (
    <div className="mt-14">
      <div className="overflow-x-auto">
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
                Passport Expiration Date
              </th>
              <th scope="col" className="px-6 py-3 text-left font-bold text-sm">
                Country
              </th>
              <th scope="col" className="px-6 py-3 text-left font-bold text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {passportData.map((passport: PassportInfo, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {passport.passanger_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {passport.sexuality}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {passport.birthday}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {passport.passport_number}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {passport.passport_expiration_date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {passport.passport_country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <DeletePassportInfo id={passport.id} token={token} getData={getData}/>
                    <EditPassportInfo token={token} getData={getData} id={passport.id}/>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export { PassportTabel };
