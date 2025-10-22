import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import Calender from "../Calendar";
import { useDispatch } from "react-redux";
import { addToDo } from "../../ridux/todoSlice";
type FormData = {
  id: string;
  Title: string;
  Discription: string;
  isImportant: boolean;
  isDone: boolean;
  isToday: boolean;
};
const AddToDoForm = () => {
    const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    const toDoWithId = {...data,id:uuidv4()}
dispatch(addToDo(toDoWithId))
reset()
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("Title", {
          required: "Title is required",
        })}
        placeholder="Title"
      />

      <input />
      <Calender />

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
        <input className="" type="checkbox" {...register("isImportant")} /> Mark
        as important
      </label>

      <label className="">
        <input className="" type="checkbox" {...register("isDone")} /> Mark as
        completed
      </label>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddToDoForm;
