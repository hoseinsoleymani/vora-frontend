import { AddPassportInfo } from "@/app/(dashboard)/components";
import { PasportInfoFormData } from "./addpassportinfo";

interface PassportEmptyStateProps {
  token: string;
  getData: () => void;
}

function PassportEmptyState({ token, getData }: PassportEmptyStateProps) {
  return (
    <div>
      <h3 className="text-2xl font-bold">Passport Info</h3>
      <div className="mt-64">
        <p className="text-gray-5 text-3xl font-300 leading-15">
          You can add passport info of your self and
          <br /> people you travel with here to buy tickets <br /> faster!
        </p>

        <AddPassportInfo
          mode="add"
          token={token}
          getData={getData}
        />
      </div>
    </div>
  );
}

export { PassportEmptyState };
