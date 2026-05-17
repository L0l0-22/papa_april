'use client';

import { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Step2({ onBack, onNext }) {

  const [size, setSize] = useState('Medium');
  const [crust, setCrust] = useState(null);
  const [extraSauce, setExtraSauce] = useState([]);
  const [without, setWithout] = useState([]);

  const [openSize, setOpenSize] = useState(true);
  const [openCrust, setOpenCrust] = useState(true);
  const [openSauce, setOpenSauce] = useState(true);
  const [openWithout, setOpenWithout] = useState(true);

  const sizes = ['Small', 'Medium', 'Large'];

  const crusts = [
    "Master's Choice Thin",
    "Master's Choice Medium",
    "Master's Choice Thick",
  ];

  const sauceOptions = ['Cheese', 'Cheddar Cheese', 'Garlic'];
  const withoutOptions = ['Cheese', 'Cheddar Cheese', 'Garlic'];

  // toggle extra sauce (max 4)
  const toggleSauce = (item) => {
    if (extraSauce.includes(item)) {
      setExtraSauce(extraSauce.filter(i => i !== item));
    } else if (extraSauce.length < 4) {
      setExtraSauce([...extraSauce, item]);
    }
  };

  // toggle without
  const toggleWithout = (item) => {
    setWithout((prev) =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  return (
    <div className="flex flex-col gap-7 divide-y-2 [&>*+*]:pt-6">

      {/* SIZE */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenSize(!openSize)}
        >
          <h3 className="font-bold text-lg">
            Size <span className="text-gray-500 text-sm">(choose 1)</span>
          </h3>
          {openSize ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </div>

        {openSize && (
          <div className="mt-2 flex items-center gap-6">
            {sizes.map((s) => (
              <label key={s} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="size"
                  value={s}
                  checked={size === s}
                  onChange={() => setSize(s)}
                  className="accent-mainGreen"
                />
                {s}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* CRUST */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenCrust(!openCrust)}
        >
          <h3 className="font-bold text-lg">
            Crust <span className="text-gray-500 text-sm">(choose 1)</span>
          </h3>
          {openCrust ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </div>

        {openCrust && (
          <div className="mt-2 flex flex-wrap gap-6">
            {crusts.map((c) => (
              <label key={c} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="crust"
                  value={c}
                  checked={crust === c}
                  onChange={() => setCrust(c)}
                  className="accent-mainGreen"
                />
                {c}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* EXTRA SAUCE */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenSauce(!openSauce)}
        >
          <h3 className="font-bold text-lg">
            Extra sauce <span className="text-gray-500 text-sm">(max 4)</span>
          </h3>
          {openSauce ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </div>

        {openSauce && (
          <div className="mt-2 grid grid-cols-3 gap-y-4 gap-x-6">
            {sauceOptions.map((sauce) => (
              <label key={sauce} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={extraSauce.includes(sauce)}
                  onChange={() => toggleSauce(sauce)}
                  className="accent-mainGreen"
                />
                {sauce}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* WITHOUT */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setOpenWithout(!openWithout)}
        >
          <h3 className="font-bold text-lg">
            Without <span className="text-gray-500 text-sm">(optional)</span>
          </h3>
          {openWithout ? <IoIosArrowUp size={20} /> : <IoIosArrowDown size={20} />}
        </div>

        {openWithout && (
          <div className="mt-2 grid grid-cols-3 gap-y-4 gap-x-6">
            {withoutOptions.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={without.includes(item)}
                  onChange={() => toggleWithout(item)}
                  className="accent-mainGreen"
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mt-10">

        <button
          onClick={onBack}
          className="flex items-center justify-center w-32 py-3 font-medium text-xl"
        >
          <IoMdArrowBack size={30} className="mr-2 text-mainGreen" />
          GO BACK
        </button>

        <div className="mt-12 mb-32 flex items-center justify-end gap-6">
          <p className="text-mainGreen font-bold text-base">200EGP</p>

          <button
            disabled={!crust}
            onClick={onNext}
            className={`px-16 py-2 font-extrabold text-base rounded-full border uppercase
              ${crust 
                ? "bg-lightYellow border-black hover:bg-transparent" 
                : "bg-gray-200 cursor-not-allowed"}`}
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
}