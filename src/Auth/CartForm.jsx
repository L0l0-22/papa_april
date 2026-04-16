'use client';

import { useState } from 'react';
import CartModal from '../components/CartModal';
import CheckoutModal from '../components/CheckoutModal';

export default function CartForm() {
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
    
  return (
    <div>
      <div className="relative w-full px-6 md:px-10 py-6 md:py-8 ">
        {/* Responsive gradient border */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="borderGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#004028" />
              <stop offset="100%" stopColor="#00A668" />
            </linearGradient>
          </defs>

          <rect
            x="0.5"
            y="0.5"
            width="99"
            height="99"
            rx="3.5"
            ry="3.5"
            fill="none"
            stroke="url(#borderGradient)"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="20, 20"
          />
        </svg>

        <form className="flex flex-col gap-7 font-poppins">
          {/* Pickup at location */}
          <div className="flex flex-col">
            <label className="font-[500] text-[16.87px] mb-2">Pickup at location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="w-full xl:max-w-[684.63px] h-[52.13px] px-3 py-2 rounded-[9.04px] text-black border focus:outline-none focus:ring-2 focus:ring-[#A2D9C6]"
              style={{
                borderWidth: '1.13px',
                borderColor: 'rgba(140, 140, 140, 1)',
                boxShadow: '0px 3.6px 14.4px rgba(0, 0, 0, 0.25)',
              }}
            />
          </div>

          {/* Pickup time */}
          <div className="flex flex-col">
            <label className="font-[500] text-[16.87px] mb-2">Pickup time</label>
            <input
              type="time"
              className="w-full xl:max-w-[684.63px] h-[52.13px] px-3 py-2 rounded-[9.04px] text-black border focus:outline-none focus:ring-2 focus:ring-[#A2D9C6]"
              style={{
                borderWidth: '1.13px',
                borderColor: 'rgba(140, 140, 140, 1)',
                boxShadow: '0px 3.6px 14.4px rgba(0, 0, 0, 0.25)',
              }}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full xl:max-w-[684.63px] h-[52.13px] px-3 py-2 rounded-[9.04px] text-black border focus:outline-none focus:ring-2 focus:ring-[#A2D9C6]"
              style={{
                borderWidth: '1.13px',
                borderColor: 'rgba(140, 140, 140, 1)',
                boxShadow: '0px 3.6px 14.4px rgba(0, 0, 0, 0.25)',
              }}
            />
          </div>

          {/* Phone number */}
          <div className="flex flex-col">
            <label className="font-[500] text-[16.87px] mb-2">Phone number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full xl:max-w-[684.63px] h-[52.13px] px-3 py-2 rounded-[9.04px] text-black border focus:outline-none focus:ring-2 focus:ring-[#A2D9C6]"
              style={{
                borderWidth: '1.13px',
                borderColor: 'rgba(140, 140, 140, 1)',
                boxShadow: '0px 3.6px 14.4px rgba(0, 0, 0, 0.25)',
              }}
            />
          </div>

          {/* Takeaway instructions */}
          <div className="flex flex-col">
            <label className="font-[500] text-[16.87px] mb-2">Takeaway instructions</label>
            <textarea
              placeholder="Takeaway instructions"
              className="w-full xl:max-w-[684.63px] h-[148.73px] p-3 rounded-[9.04px] text-black border resize-none focus:outline-none focus:ring-2 focus:ring-[#A2D9C6]"
              style={{
                borderWidth: '1.13px',
                borderColor: 'rgba(140, 140, 140, 1)',
                boxShadow: '0px 3.6px 14.4px rgba(0, 0, 0, 0.25)',
              }}
            />
          </div>

          {/* Payment method */}
          <div className="flex flex-col">
            <label className="font-[500] text-[16.87px] mb-2">Payment method</label>
            <select
              className="w-full xl:max-w-[684.63px] bg-white h-[52.13px] px-3 py-2 rounded-[9.04px] text-black border focus:outline-none focus:ring-2 focus:ring-[#A2D9C6]"
              style={{
                borderWidth: '1.13px',
                borderColor: 'rgba(140, 140, 140, 1)',
                boxShadow: '0px 3.6px 14.4px rgba(0, 0, 0, 0.25)',
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Select a method
              </option>
              <option value="cash">Cash</option>
              <option value="credit">Credit Card</option>
              <option value="fawry">Fawry</option>
            </select>
          </div>
        </form>
      </div>

      <div className="py-5">
        <h5 className="font-bold font-700 text-[22px]">PJPS - Laban RUH</h5>
      </div>

      <div className="w-full h-[300px] rounded-[16px] overflow-hidden my-5 border">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1451422985863!2d31.23571151511509!3d30.04441958188014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c7d5d6fdb1%3A0x7d3b7c6c304e89b9!2sTahrir%20Square!5e0!3m2!1sen!2seg!4v1689500000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        />
      </div>

       <button
        type="button"
        onClick={() => setShowCart(true)}
        className="w-full xl:max-w-[795.37px] h-[81.79px] rounded-[32.32px] text-white bg-[#BDBDBD] hover:bg-opacity-90 transition px-[24.56px] py-[2.59px] mt-4 font-bold text-[20px]"
      >
        Process to checkout
      </button>

      <CartModal
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        onCheckout={() => {
          setShowCart(false);
          setShowCheckout(true);
        }}
      />

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
      />
    </div>
  );
}