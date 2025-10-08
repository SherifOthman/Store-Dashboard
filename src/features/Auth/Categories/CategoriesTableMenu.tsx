import { CirclePlus, Edit, Trash, EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { AddCategory } from "./AddCategory";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { Category } from "@/types/apiTypes";
import { useDeleteCategory } from "./useDeleteCategory";
import { Spinner } from "@/components/ui/spinner";
import { useState } from "react";

type CategoriesTableMenuProps = {
  category: Category;
};

export const CategoriesTableMenu = ({ category }: CategoriesTableMenuProps) => {
  const { deleteCategory, isPending } = useDeleteCategory();
  const [addOpen, setAddOpen] = useState(false);

  const onDelete = async () => {
    await deleteCategory(category.id);
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="lIcon" className="rounded-full">
            <EllipsisVertical className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() => setAddOpen(true)}
            onSelect={(e) => e.preventDefault()}
          >
            <CirclePlus className="mr-2 h-4 w-4" />
            Add Sub Category
          </DropdownMenuItem>

          {/* Edit Action */}
          <DropdownMenuItem onClick={() => console.log("Edit")}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>

          {/* Delete Action */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <DropdownMenuItem className="!text-destructive hover:!bg-destructive/10 focus:!bg-destructive/10 focus:!text-destructive transition-colors">
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This category will be
                  permanently deleted.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onDelete} disabled={isPending}>
                  {isPending && <Spinner className="ml-2" />}
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          {/* Dialogs */}
          <Dialog open={addOpen} onOpenChange={setAddOpen}>
            <DialogContent className="w-96">
              <AddCategory
                parentId={category.id}
                onSuccess={() => setAddOpen(false)}
              />
            </DialogContent>
          </Dialog>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
