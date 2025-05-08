import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Input,
  Button
} from "@/components/ui/";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { API_BASE_URL } from "@/lib";

countries.registerLocale(enLocale);
const countryList = Object.entries(
  countries.getNames("en", { select: "official" })
).map(([code, name]) => ({
  code,
  name,
}));

export interface PasportInfoFormData {
  passanger_name: string;
  passportFamilyName: string;
  birthday: string;
  sexuality: "male" | "female";
  passport_number: string;
  passport_expiration_date: string;
  passport_country: string;
}

const schema = z.object({
  passanger_name: z.string().min(1),
  passportFamilyName: z.string().min(1),
  birthday: z.string().min(1),
  sexuality: z.enum(["male", "female"]),
  passport_number: z.string().min(1),
  passport_expiration_date: z.string().min(1),
  passport_country: z.string().min(1),
});

interface AddPassportInfoProps {
  mode: "add" | "edit";
  getData: () => void;
  token: string;
  id?: number;
}

function AddPassportInfo({ mode, getData, token, id }: AddPassportInfoProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PasportInfoFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: PasportInfoFormData) => {
    try {
      const addTransFormedData = {
        passport_first_name: data.passanger_name,
        passport_last_name: data.passportFamilyName,
        birthday: data.birthday,
        sexuality: data.sexuality.toUpperCase(),
        passport_number: data.passport_number,
        passport_expiration_date: data.passport_expiration_date,
        passport_country: data.passport_country,
      };
      if (mode === "add") {
        const response = await fetch(`${API_BASE_URL}/panel/passport-info/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(addTransFormedData),
        });
        console.log(response);  
        if (response.status === 201) {
          getData();
        }
      }
      if (mode === "edit") {
        const transFormedData = {
          id: id,
          ...addTransFormedData,
        };
        const response = await fetch(
          `${API_BASE_URL}/panel/passport-info/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(transFormedData),
          }
        );
        if (response.ok) {
          getData?.();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        {mode === "add" ? (
          <Button className="flex items-center gap-2 mt-4" size={"sm"}>
            <span className="i-fluent:add-20-regular"></span>
            Add Passport Info
          </Button>
        ) : (
          <Button className="flex items-center gap-2 w-8 h-8 p-2" size={"icon"}>
            <span className="i-fluent:edit-20-regular"></span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {mode === "add" ? "Add Passport Info" : "Edit Passport Info"}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-sm">General information</h3>
            <p className="text-gray-5 text-sm font-300 mt-1">
              Add the general information about the passenger
            </p>
            <div className="flex flex-col gap-3">
              <Input
                placeholder="Passport Name"
                {...register("passanger_name")}
                errorMessage={errors.passanger_name?.message}
              />
              <Input
                placeholder="Passport Family Name"
                {...register("passportFamilyName")}
                errorMessage={errors.passportFamilyName?.message}
              />
              <Input
                placeholder="Birthday"
                {...register("birthday")}
                errorMessage={errors.birthday?.message}
              />
              <Controller
                control={control}
                name="sexuality"
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger asChild>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-[#757575]">
                            Sexuality
                          </span>
                          <SelectValue placeholder="Select" />
                        </div>
                        <span className="i-fluent:chevron-down-20-regular"></span>
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                    {errors.sexuality && (
                      <span className="text-red-5 text-sm">
                        {errors.sexuality?.message}
                      </span>
                    )}
                  </Select>
                )}
              />
            </div>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg mt-2">
            <h3 className="text-sm">Passport Information</h3>
            <p className="text-gray-5 text-sm font-300 mt-1">
              Provide the information about the password.
            </p>
            <div className="flex flex-col gap-3">
              <Input
                placeholder="Passport Number"
                {...register("passport_number")}
                errorMessage={errors.passport_number?.message}
              />
              <Input
                placeholder="Passport Expiration Date"
                {...register("passport_expiration_date")}
                errorMessage={errors.passport_expiration_date?.message}
              />
              <Controller
                name="passport_country"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger asChild>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <span className="text-xs text-[#757575]">
                            Passport Country
                          </span>
                          <SelectValue placeholder="Select" />
                        </div>
                        <span className="i-fluent:chevron-down-20-regular"></span>
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {countryList.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          {country.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    {errors.passport_country && (
                      <span className="text-red-5 text-sm">
                        {errors.passport_country?.message}
                      </span>
                    )}
                  </Select>
                )}
              />
            </div>
          </div>
          <div className="flex justify-end">
            {mode === "add" ? (
              <Button
                className="mt-6 flex items-center gap-2"
                size={"sm"}
                type="submit"
              >
                <span className="i-fluent:save-24-regular"></span>
                Add Person
              </Button>
            ) : (
              <Button
                className="mt-6 flex items-center gap-2"
                size={"sm"}
                type="submit"
              >
                <span className="i-fluent:edit-24-regular"></span>
                Apply Edits
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export { AddPassportInfo };
