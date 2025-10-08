import { Button } from "@/components/ui/button";
import { TextField } from "../../../components/TextField";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateCategory } from "./useCreateCategory";
import { useEffect } from "react";
import { setBackendErrors } from "@/utils/helpers";
import { Spinner } from "@/components/ui/spinner";

type AddCategoryProps = {
  parentId?: number;
  onSuccess?: () => void;
};

const FormSchema = z.object({
  name: z.string().min(3),
});

type FormType = z.infer<typeof FormSchema>;

export const AddCategory = ({ parentId, onSuccess }: AddCategoryProps) => {
  const { isPending, isSuccess, error, isError, createCategory } =
    useCreateCategory();
  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(FormSchema),
  });

  const onsubmit = async (data: FormType) => {
    await createCategory({
      name: data.name,
      parentCategoryId: parentId || null,
    });
  };

  useEffect(() => {
    if (isSuccess && onSuccess) {
      onSuccess();
    }
  }, [isSuccess, onSuccess]);

  useEffect(() => {
    if (isError && error?.errors) setBackendErrors(setError, error.errors);
  }, [error, isError, setError]);

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
        <TextField
          label="Category Name"
          {...register("name")}
          error={errors.name?.message}
        />

        <div className="flex justify-end gap-3">
          <Button type="reset" variant="outline" className="text-destructive">
            Cancel
          </Button>
          <Button type="submit" disabled={isPending}>
            {isPending && <Spinner className="mr-2" />}
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};
