import React, { useEffect, useState } from "react";
import Row from "./Row";
import Button from "../Element/Button";

interface ICalculatorProps {
  onTotalChange: (newTotal: number | null) => void;
}

const Calculator: React.FC<ICalculatorProps> = ({ onTotalChange }) => {
  const [rows, setRows] = useState([{ sign: "+", value: "", enabled: true }]);

  const handleSignChange = (index: number, newSign: string): void => {
    const newRows = [...rows];
    newRows[index].sign = newSign;
    setRows(newRows);
  };

  const handleValueChange = (index: number, newValue: string): void => {
    const newRows = [...rows];
    newRows[index].value = newValue;
    setRows(newRows);
  };

  const handleRowToggle = (index: number): void => {
    const newRows = [...rows];
    newRows[index].enabled = !newRows[index].enabled;
    setRows(newRows);
  };

  const calculateTotal = (): number => {
    let total = 0;
    for (const row of rows) {
      if (row.enabled && row.value !== "") {
        total += (row.sign === "+" ? 1 : -1) * parseFloat(row.value);
      }
    }
    return total;
  };

  const addRow = (): void => {
    const newRows = [...rows, { sign: "+", value: "", enabled: true }];
    setRows(newRows);
  };

  const removeRow = (index: number): void => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  useEffect(() => {
    const total = calculateTotal();
    onTotalChange(total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  return (
    <div>
      {/* BUTTON TO  ADD NEW ROW */}
      <Button onClick={addRow}>Add New</Button>

      {/* Dynamic Row Rendering */}
      {rows.map((row, index) => (
        <Row
          key={index}
          row={row}
          onSignChange={(newSign) => handleSignChange(index, newSign)}
          onValueChange={(newValue) => handleValueChange(index, newValue)}
          onRowToggle={() => handleRowToggle(index)}
          onRemoveRow={() => removeRow(index)}
        />
      ))}
    </div>
  );
};

export default Calculator;
