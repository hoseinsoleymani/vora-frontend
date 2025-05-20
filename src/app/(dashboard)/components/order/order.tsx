"use client";
import { useEffect, useState } from "react";
import {
  DetailsSection,
  HeaderFlightTicket,
  HotelOrder,
  PassengersLoading,
} from "@/app/(dashboard)/components";
import { API_BASE_URL } from "@/lib";

interface Order {
  order_type: 1 | 2;
}

interface flightOrder {
  order_type: 1;
  offer_data?: Array<{
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

interface hotelOrder {
  order_type: 2
  offer_data: {
    price: {
      total : number
    }
  }
}
function Order({ token }: { token: string }) {
  const [flightOrder, setFlightOrder] = useState<flightOrder>();
  const [hotelOrder, setHotelOrder] = useState<hotelOrder>();
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
      console.log(data);
      data.forEach((item: Order) => {
        if (item.order_type === 1) {
          setFlightOrder(item as flightOrder);
        } else {
          setHotelOrder(item as hotelOrder);
        }
      });
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

  const flightTotalPrice = flightOrder?.offer_data?.[0]?.price?.total ?? 0;
  const flightTravelerData = flightOrder?.travelers_data?.[0]?.contact ?? {
    emailAddress: "",
    phones: [],
  };
  const flightPassengersData = flightOrder?.travelers_data;

  const flightPhoneNumber = flightTravelerData?.phones?.[0]
    ? `${flightTravelerData.phones[0].countryCallingCode}${flightTravelerData.phones[0].number}`
    : "";

  const hotelTotalPrice = hotelOrder?.offer_data?.price?.total ?? 0;
  return (
    <div className="mt-14">
      <h3 className="text-2xl font-bold">order</h3>
      {flightOrder ? (
        <div className="mt-14">
          <div className="flex items-center gap-2">
            <span className="i-fluent:ticket-diagonal-24-regular"></span>
            <h3 className="text-lg font-bold">Upcoming Orders</h3>
          </div>
          <div className="mt-8 p-6 bg-white rounded-2xl shadow w-full">
            <HeaderFlightTicket totalPrice={flightTotalPrice} />
            <DetailsSection
              email={flightTravelerData?.emailAddress}
              phoneNumber={flightPhoneNumber}
              travelers_data={flightPassengersData ?? []}
            />
          </div>
          {/* {hotelOrder && (
            <HotelOrder totalPrice={hotelTotalPrice}/>
          )} */}
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
