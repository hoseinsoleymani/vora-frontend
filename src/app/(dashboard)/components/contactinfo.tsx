import React from 'react'

interface ContactInfoProps {
    email: string;
    phoneNumber: string;
}

function ContactInfo({email , phoneNumber} : ContactInfoProps) {
  return (
    <div className="mt-4 px-5">
    <div className="flex items-center gap-2">
      <span className="i-fluent:person-call-24-regular"></span>
      <p>Provided Contact Info</p>
    </div>
    <div className="flex items-center mt-2 px-4 gap-30">
      <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Email</p>
          <p className="text-sm text-gray-5">{email}</p>
      </div>
      <div className="flex flex-col gap-1">
          <p className="text-sm font-medium">Phone Number</p>
          <p className="text-sm text-gray-5">+{phoneNumber}</p>
      </div>
    </div>
  </div>
  )
}

export {ContactInfo} 