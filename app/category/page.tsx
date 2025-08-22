import Heading from "@/components/my-components/heading";
import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { getCategory } from "@/lib/category-service";

async function page() {
  const data = await getCategory();

  return (
    <div className="flex flex-col gap-6">
      <Heading>Category</Heading>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default page;
