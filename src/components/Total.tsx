import * as React from "react";

interface ITotalProps {
  total: number | null;
}

const Total: React.FC<ITotalProps> = ({ total }) => {
  return (
    <div className="bg-white px-16 py-4 rounded shadow-sm">
      <h2 className="font-base text-2xl text-slate-400">Total</h2>
      <p className="text-center font-bold text-3xl text-black">{total}</p>
    </div>
  );
};

export default Total;
