"use client";
import { Luggage24Regular } from "@fluentui/react-icons";

function BagsInfo() {
  return (
    <div className="mt-8 border border-gray-300 p-8 rounded-2xl w-full">
      <div className="flex items-center gap-2">
        <Luggage24Regular />
        <h2 className="text-lg font-medium text-gray-700">Bags</h2>
      </div>
      <p className="text-lg font-medium mt-3">
        Baggage{" "}
        <span className="text-green-500 font-light text-base">Included</span>
      </p>
      <div className="flex items-center justify-between mt-3">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Luggage24Regular />
            <div className="flex flex-col gap-1">
              <p className="font-medium">1 personal item</p>
              <p className="text-sm">Fits under the seat in front of you</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Luggage24Regular />
            <div className="flex flex-col gap-1">
              <p className="font-medium">1 carry-on bag</p>
              <p className="text-sm">23 x 40 x 55 cm · Max weight 8 kg</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-end">
          <p className="font-bold">No Free Baggage allowance</p>
          <p className="font-bold">7 KG</p>
        </div>
      </div>
      <hr className="border-gray-300 my-4" />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-medium">Extras</h3>
          <p>Can be added with different fares</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Luggage24Regular />
            <div className="flex flex-col gap-1">
              <p className="font-medium">Checked Bag</p>
              <p className="text-sm">From £118.38</p>
            </div>
          </div>
          <p className="font-bold">From 20 KG</p>
        </div>
      </div>
    </div>
  );
}

export { BagsInfo };
