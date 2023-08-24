import Card from "@/Components/card";

export default function Home() {
  return (
    <>
      <form className="ml-[30%] mt-4 p-4 rounded-xl">
        <h3 className="text-3xl font-extrabold">Add a Task</h3>
        <div className="flex">
          <div className="flex flex-col w-[60%] ">
            <input
              name="title"
              className="w-[60%] rounded-xl p-3 text-black "
              type="text"
              placeholder="Task Title"
            />

            <input
              className="w-[80%] p-2 text-black rounded-lg mt-2 "
              placeholder="About Task"
              title="description"
              type="text"
              name="description"
            />
          </div>
          <button
            title="Add New"
            className="group cursor-pointer hover:rotate-90 active:scale-100 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              className="stroke-slate-200 fill-none group-active:fill-slate-600 duration-200"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke-width="1.5"
              ></path>
              <path d="M8 12H16" stroke-width="1.5"></path>
              <path d="M12 16V8" stroke-width="1.5"></path>
            </svg>
          </button>
        </div>
      </form>
  
        <Card />
        <Card />
        <Card />
        <Card />
     
    </>
  );
}
