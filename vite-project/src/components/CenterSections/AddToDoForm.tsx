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
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    const toDoWithId = { ...data, id: uuidv4() };
    dispatch(addToDo(toDoWithId));
    reset({
      Title: "",
      Discription: "",
      isImportant: false,
      isDone: false,
      isToday: false,
    });
  };

  return (
    <div className="bg-gray-200 flex flex-wrap h-[550px] p-2 rounded-xl ">
      <p>Add a task</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col ">
          <p className="">Title</p>
          <input
            className=" mb-5 bg-white rounded-sm  w-[99%] p-2 motion-reduce:not-even:"
            {...register("Title", {
              required: "Title is required",
            })}
            placeholder="e.q study for the test"
          />
<p className=" ">Date</p>

          <Calender />

          {errors.Title && <p>{errors.Title.message}</p>}
 <p  className=" ">Discription</p>
          <input
            className=" mb-5 bg-white rounded-sm w-[99%] p-2 motion-reduce:not-even:"
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

<p className=" ">Select the directory</p>

<select
  className="mb-5 bg-white rounded-sm w-[99%] p-2"
>
  <option value="">Choose a directory</option>
  <option value="work">Work</option>
  <option value="personal">Personal</option>
  <option value="shopping">Shopping</option>
  <option value="university">University</option>
</select>




          <label className="flex items-center gap-2 cursor-pointer p-2 rounded-md  hover:bg-gray-200">
            <input
              type="checkbox"
              {...register("isImportant")}
              className="accent-purple-500 w-4 h-4"
            />
            <span className="text-sm text-gray-700 font-medium">
              Mark as important
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer p-2   hover:bg-gray-200">
            <input
              type="checkbox"
              {...register("isDone")}
              className="accent-purple-500 w-4 h-4"
            />{" "}
            Mark as completed
          </label>
        </div>

        <button
          className="bg-purple-400 w-[90%] m-2 p-2 rounded-md "
          type="submit"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddToDoForm;
