import React from 'react';
import { CUSTOMER } from './customerData';
import Image from 'next/image';

export default function Customer() {
  return (
    <>
    <center>

      <h2 className="text-2xl font-bold mb-4">Our Top Clients</h2>
    <div className="flex justify-center mb-4">
      <div className="overflow-x-auto">
        <div className="flex flex-nowrap">
          {CUSTOMER.map((client, index) => (
              <div
              key={index}
              className="bg-white rounded shadow-md p-4 mr-4"
              style={{ width: '250px', flex: '0 0 auto' }}
              >
              <img
                src={`https://via.placeholder.com/50x50?text=${client.name}`}
                alt={client.name}
                height={100}
                width={100}
                className="rounded-full mb-4"
                />
              <div>
                <h3 className="text-lg font-bold">{client.name}</h3>
                <p className="text-gray-600">{client.source}</p>
                <p className="text-gray-600 font-semibold">
                  {client.subscribers.toLocaleString()} 
                </p>
                <p className="text-gray-600">
                  {client.totalViews.toLocaleString()} 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
          </center>
          </>
  );
}