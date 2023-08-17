import * as React from "react";
import Input from "../Element/Input";
import Button from "../Element/Button";

interface IRowProps {
  row: {
    sign: string;
    value: number | string;
    enabled: boolean;
  };
  onSignChange: (newSign: string) => void;
  onValueChange: (newValue: string) => void;
  onRowToggle: () => void;
  onRemoveRow: () => void;
}

const Row: React.FC<IRowProps> = ({
  row,
  onSignChange,
  onValueChange,
  onRowToggle,
  onRemoveRow,
}) => {
  return (
    <div className="w-full mt-6 flex md:flex-row gap-2 flex-col pt-4 md:pt-0">
      <Input
        type="number"
        value={row.value}
        placeholder="Write a number"
        onChange={(e) => onValueChange(e as unknown as string)}
        disabled={!row.enabled}
        sign={row.sign}
        onSignChange={onSignChange}
      />
      <Button variant="secondary" onClick={onRemoveRow}>
        Delete
      </Button>
      {row.enabled ? (
        <Button variant="disabled" onClick={onRowToggle}>
          Disable
        </Button>
      ) : (
        <Button variant="enable" onClick={onRowToggle}>
          Enable
        </Button>
      )}
    </div>
  );
};

export default Row;
