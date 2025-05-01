"use client"
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import Image from "next/image";
import Paypal from "../../../../public/img/196566 3.png"
import ApplePay from "../../../../public/img/Apple_Pay-Logo.wine 2.png"
import GooglePay from "../../../../public/img/6124998 2.png"
import Card from "../../../../public/img/visa-icon-2048x628-6yzgq2vq 2.png"


function Payment() {
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPayment) {
      console.log("Selected payment method:", selectedPayment);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-medium">Select a payment method</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <RadioGroup
          value={selectedPayment}
          onValueChange={setSelectedPayment}
          className="flex flex-col space-y-3"
        >
          <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paypal" id="paypal" />
              <Label htmlFor="paypal" className="cursor-pointer">PayPal</Label>
            </div>
            <Image src={Paypal} alt="PayPal" />
          </div>

          <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="apple-pay" id="apple-pay" />
              <Label htmlFor="apple-pay" className="cursor-pointer">Apple Pay</Label>
            </div>
            <Image src={ApplePay} alt="Apple Pay" />
          </div>

          <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="google-pay" id="google-pay" />
              <Label htmlFor="google-pay" className="cursor-pointer">Google Pay</Label>
            </div>
            <Image src={GooglePay} alt="Google Pay" />
          </div>

          <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="cursor-pointer">Credit/Debit Card</Label>
            </div>
            <Image src={Card} alt="Card" />
          </div>
        </RadioGroup>
      </form>
    </div>
  );
}

export { Payment };
