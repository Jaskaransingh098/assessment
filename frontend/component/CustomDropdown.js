import { useState, useRef, useEffect } from "react";

export default function CustomDropdown({ value, onChange }) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    const options = [
        "All",
        "Veg",
        "Non-Veg",
        "Dessert",
        "Main Course",
        "Snack",
        "Breakfast",
    ];


    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative w-48" ref={dropdownRef}>

            <button
                onClick={() => setOpen(!open)}
                className="w-full bg-gray-600 text-white border px-4 py-2 rounded-lg shadow flex justify-between items-center hover:bg-gray-500 transition"
            >
                <span>{value || "Select Category"}</span>

                
                <svg
                    className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </button>



            {open && (
                <div className="absolute z-20 mt-2 w-full bg-white text-black rounded-xl shadow-lg py-2 animate-fadeDown">
                    {options.map((opt) => (
                        <div
                            key={opt}
                            onClick={() => {
                                onChange(opt === "All" ? "" : opt);
                                setOpen(false);
                            }}
                            className={`px-4 py-2 cursor-pointer rounded-lg mx-1 hover:bg-gray-100 transition ${value === opt ? "bg-gray-200" : ""
                                }`}
                        >
                            {opt}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
