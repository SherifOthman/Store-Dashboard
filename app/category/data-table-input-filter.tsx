import { Input } from "@/components/ui/input";
import { Table } from "@tanstack/react-table";
import React from "react";

interface DataTableInputFilterProps<T> {
  table: Table<T>;
  filterBy: string;
  placeholder: string;
}

function DataTableInputFilter<T>({
  table,
  filterBy,
  placeholder,
}: DataTableInputFilterProps<T>) {
  return (
    <Input
      className="max-w-xs"
      placeholder={placeholder}
      value={(table.getColumn(filterBy)?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn(filterBy)?.setFilterValue(event.target.value)
      }
    />
  );
}

export default DataTableInputFilter;
