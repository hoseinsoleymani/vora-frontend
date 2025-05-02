import { AddPassportInfo, PasportInfoFormData } from "./addpassportinfo";
import { API_BASE_URL } from "@/lib";

interface EditPassportInfoProps {
  token: string;
  getData: () => void;
  id: number;
}

function EditPassportInfo({ token, getData, id }: EditPassportInfoProps) {
  // const onSubmit = async (data: PasportInfoFormData) => {
  //   try {
  //     const transformedData = {
  //       id: id,
  //       passport_first_name: data.passanger_name,
  //       passport_last_name: data.passportFamilyName,
  //       birthday: data.birthday,
  //       sexuality: data.sexuality.toUpperCase(),
  //       passport_number: data.passport_number,
  //       passport_expiration_date: data.passport_expiration_date,
  //       passport_country: data.passport_country,
  //     };
  //     console.log(transformedData);
      
  //     const response = await fetch(
  //       `${API_BASE_URL}/panel/passport-info/${id}`,
  //       {
  //         method: "PUT",
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(transformedData),
  //       }
  //     );   
  //     if (response.ok) {
  //       getData();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <AddPassportInfo mode="edit" getData={getData} token={token} id={id} />
    </div>
  );
}

export { EditPassportInfo };
