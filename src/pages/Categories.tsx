import { Button } from "@/components/ui/button";
import { Loader } from "../components/Loader";
import { CategoriesTable } from "../features/Auth/Categories/CategoriesTable";
import { useCategories } from "../features/Auth/Categories/useCategories";
import { AddCategory } from "@/features/Auth/Categories/AddCategory";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { useState } from "react";
import { Plus } from "lucide-react";

export const Categories = () => {
  const { categories, isLoading } = useCategories();
  const [addOpen, setAddOpen] = useState(false);

  if (isLoading) return <Loader />;

  return (
    <div className="space-y-3 p-4">
      <div className="flex justify-end gap-3">
        <Button onClick={() => setAddOpen(true)}>
          <Plus /> Add Category
        </Button>
      </div>
      <CategoriesTable categories={categories!} />
      {/* Dialogs */}

      <Dialog open={addOpen} onOpenChange={setAddOpen}>
        <DialogContent>
          <DialogHeader>New category</DialogHeader>
          <AddCategory onSuccess={() => setAddOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
