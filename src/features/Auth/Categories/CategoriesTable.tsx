import { useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Category } from "../../../types/apiTypes";
import { CategoriesTableMenu } from "./CategoriesTableMenu";

type CategoriesTableProps = {
  categories: Category[];
};

export const CategoriesTable = ({ categories }: CategoriesTableProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border-2">
      <Table className="w-full table-fixed">
        <TableHeader className="bg-muted/70">
          <TableRow>
            <TableHead className="w-[50%] text-base font-semibold">
              NAME
            </TableHead>
            <TableHead className="w-[25%] text-base font-semibold">
              CREATED DATE
            </TableHead>
            <TableHead className="w-[25%] text-right text-base font-semibold" />
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((cat) => (
            <CategoryRow key={cat.id} category={cat} level={0} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

type CategoryRowProps = {
  category: Category;
  level: number;
};

const CategoryRow = ({ category, level }: CategoryRowProps) => {
  const [isExpanded, seIsExpanded] = useState(false);
  const hasSubCategories = category.subCategories.length > 0;

  return (
    <>
      <TableRow
        onClick={() => hasSubCategories && seIsExpanded(!isExpanded)}
        className="hover:bg-muted/50 cursor-pointer text-base transition-colors"
      >
        <TableCell className="truncate">
          <div
            className="flex items-center transition-all duration-300"
            style={{
              marginLeft: `${level * 24}px`, // ✅ only inner content shifts
            }}
          >
            {hasSubCategories ? (
              <span
                className={`mr-2 transition-transform ${
                  isExpanded ? "rotate-90" : ""
                }`}
              >
                <ChevronRight className="h-4 w-4 shrink-0" />
              </span>
            ) : (
              <span className="inline-block w-4" />
            )}
            {category.name}
          </div>
        </TableCell>

        <TableCell>{category.createdAt}</TableCell>

        <TableCell className="mr-4 flex justify-end text-right">
          <CategoriesTableMenu category={category} />
        </TableCell>
      </TableRow>

      {isExpanded &&
        category.subCategories.map((sub) => (
          <CategoryRow key={sub.id} category={sub} level={level + 1} />
        ))}
    </>
  );
};
