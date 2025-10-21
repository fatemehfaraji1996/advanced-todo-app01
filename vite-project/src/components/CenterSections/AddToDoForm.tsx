import { useForm } from "react-hook-form";
// import { v4 as uuidv4 } from "uuid";

type FormData = {
  id: string;
  Title: string;
  Discription: string;
  isImportant: boolean;
  isDone: boolean;
  isToday: boolean;
};
const AddToDoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("Title", {
          required: "Title is required",
        })}
        placeholder="Title"
      />
      {errors.Title && <p>{errors.Title.message}</p>}

      <input
        {...register("Discription", {
          required: "Description is required",
          minLength: {
            value: 10,
            message: "Must be at least 10 characters",
          },
        })}
        placeholder="Description"
      />
      {errors.Discription && <p>{errors.Discription.message}</p>}

       <label className="">
  <input className="" type="checkbox" {...register("isImportant")} /> Mark as important
</label>

       <label className="">
  <input className="" type="checkbox" {...register("isDone")} /> Mark as completed
</label>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddToDoForm;
