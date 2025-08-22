"use client";

import { CategoryType } from "@/lib/category-service";
import { ColumnDef } from "@tanstack/react-table";
import TableRowActions from "./table-actions";
import { DataTableColumnHeader } from "./data-table-column-header";

export const columns: ColumnDef<CategoryType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
    size: 50,
  },

  {
    accessorKey: "name",
    header: "Name",
    size: 250,
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.getValue("isActive");
      return (
        <div className="flex items-center justify-start">
          <span
            className={
              isActive
                ? "bg-green-800 text-white py-1 px-1.5 rounded"
                : "bg-red-800 p-1.5 rounded text-white py-1 px-1.5"
            }
          >
            {isActive ? "Active" : "Inactive"}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    id: "actions",
    cell: TableRowActions,
  },
];
