"use client";
import { useEffect, useState } from "react";
import {
  DetailsSection,
  HeaderFlightTicket,
  PassengersLoading,
} from "@/app/(dashboard)";
import { API_BASE_URL } from "@/lib";

interface Order {
  offer_data: Array<{
    price: {
      total: number;
    };
  }>;
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
}

function Order({ token }: { token: string }) {
  const [order, setOrder] = useState<Order>();
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/panel/order/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setOrder(data[0]);
      console.log(data[0]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <PassengersLoading />;
  }
  const totalPrice = order?.offer_data?.[0]?.price?.total ?? 0;
  const travelerData = order?.travelers_data?.[0]?.contact ?? {
    emailAddress: "",
    phones: [],
  };
  const passengersData = order?.travelers_data;
  console.log(passengersData);

  const phoneNumber = travelerData?.phones?.[0]
    ? `${travelerData.phones[0].countryCallingCode}${travelerData.phones[0].number}`
    : "";

  return (
    <div className="mt-14">
      <h3 className="text-2xl font-bold">order</h3>
      {order ? (
        <div className="mt-14">
          <div className="flex items-center gap-2">
            <span className="i-fluent:ticket-diagonal-24-regular"></span>
            <h3 className="text-lg font-bold">Upcoming Orders</h3>
          </div>
          <div className="mt-8 p-6 bg-white rounded-2xl shadow w-full">
            <HeaderFlightTicket totalPrice={totalPrice} />
            <DetailsSection
              email={travelerData?.emailAddress}
              phoneNumber={phoneNumber}
              travelers_data={passengersData ?? []}
            />
          </div>
        </div>
      ) : (
        <p className="font-300 text-gray-5 text-3xl mt-32 leading-15">
          Currently, There is nothing here to show,
          <br /> Try our services or AI features to plan your
          <br /> next Trip!
        </p>
      )}
    </div>
  );
}

export { Order };
