import Calculator from "./components/Calculator/Calculator";
import { useState } from "react";
import Total from "./components/Total";

function App() {
  const [total, setTotal] = useState<number | null>(0);
  return (
    <div className="flex pt-20 items-center h-screen bg-gray-100 flex-col">
      {/* Component To Display Total */}
      <Total total={total} />

      <div className="pt-24 w-96">
        {/* Component To Display Calculator */}
        <Calculator onTotalChange={(newTotal) => setTotal(newTotal)} />
      </div>
    </div>
  );
}

export default App;
