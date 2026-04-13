import { useState, useEffect } from "react";
import Customer_Support from "../Customer_Support/Customer_Support";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Main_part = ({
  customerSupports,
  setCount,
  setComplateCount,
  setCustomerSupport,
}) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState([]);
  const [resolved, setResolved] = useState([]);
  const [currentTab, setCurrentTab] = useState("Customer Tickets"); // Mobile tab

  // Initialize all tasks as Open
  useEffect(() => {
    setTasks((prevTasks) => {
      return customerSupports.map((task) => {
        const existing = prevTasks.find((t) => t.id === task.id);
        return existing ? existing : { ...task, status: "Open" };
      });
    });
  }, [customerSupports]);

  // Keep banner counts updated
  useEffect(() => {
    const inProgressCount = tasks.filter((t) => t.status === "In Progress").length;
    setCount(inProgressCount);
    setComplateCount(resolved.length);
  }, [tasks, resolved, setCount, setComplateCount]);

  // When a task moves to "In Progress"
  const handleStatusChange = (id) => {
    setTasks((prev) => {
      const taskToUpdate = prev.find((t) => t.id === id);
      if (taskToUpdate?.status === "In Progress") return prev;

      const updated = prev.map((task) =>
        task.id === id ? { ...task, status: "In Progress" } : task
      );

      const inProgressTask = updated.find((t) => t.id === id);

      toast.info(`#${id} th ticket in progress`, {
        autoClose: 1500,
        closeOnClick: true,
        toastId: `inprogress-${id}`,
      });

      setSelectedTitle((prev) => {
        if (!prev.includes(inProgressTask.title)) {
          return [...prev, inProgressTask.title];
        }
        return prev;
      });

      return updated;
    });
  };

  // Task completion popup
  const completeBtn = (id) =>
    toast.success(`Resolved #${id} th ticket`, {
      autoClose: 1500,
      closeOnClick: true,
    });

  return (
    <div className="max-w-[1300px] mx-auto flex flex-col md:flex-row gap-5 w-full">
      {/* Mobile Tabs */}
      <div className="flex justify-around mb-4 md:hidden">
        {["Customer Tickets", "Task Status", "Resolved Task"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 rounded-md font-semibold ${
              currentTab === tab ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
            }`}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Customer Tickets */}
      <div
        className={`w-full md:w-3/4 ${
          currentTab === "Customer Tickets" ? "block" : "hidden"
        } md:block`}
      >
        <h3 className="text-black font-bold text-[20px] py-2 pl-2">
          Customer Tickets
        </h3>

        <div className="t-2 mb-16 grid grid-cols-1 md:grid-cols-2 w-full gap-10">
          {[...tasks]
            .sort((a, b) => {
              if (a.status === "Open" && b.status === "In Progress") return -1;
              if (a.status === "In Progress" && b.status === "Open") return 1;
              return 0;
            })
            .map((item) => (
              <Customer_Support
                key={item.id}
                support_Card={item}
                onStatusChange={handleStatusChange}
              />
            ))}
        </div>
      </div>

      {/* Task Status + Resolved Task (right side on desktop, stacked) */}
      <div
        className={`md:flex-1 w-full flex flex-col gap-5 ${
          currentTab !== "Customer Tickets" ? "" : "hidden md:flex"
        }`}
      >
        {/* Task Status */}
        <div
          className={`w-full ${
            currentTab === "Task Status" ? "block" : "hidden md:block"
          }`}
        >
          <h3 className="text-black font-bold text-[20px] py-2 pl-2">
            Task Status
          </h3>
          {selectedTitle.length === 0 ? (
            <p className="text-black pl-2">Select a ticket to add to Task Status</p>
          ) : (
            selectedTitle.map((item, index) => {
              const task = tasks.find((t) => t.title === item);
              const id = task ? task.id : index + 1;
              return (
                <div
                  key={index}
                  className="my-4 mx-2 rounded-md bg-[#FFFFFF] shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
                  style={{ padding: "20px 16px" }}
                >
                  <p className="text-black font-semibold text-[18px] pb-1">{item}</p>
                  <button
                    onClick={() => {
                      completeBtn(id);
                      setComplateCount((prev) => prev + 1);
                      setCount((prev) => prev - 1);
                      setSelectedTitle((prev) =>
                        prev.filter((title) => title !== item)
                      );
                      setCustomerSupport((prev) =>
                        prev.filter((support) => support.title !== item)
                      );
                      setTasks((prev) => prev.filter((t) => t.title !== item));
                      setResolved((prev) => [...prev, item]);
                    }}
                    className="w-full bg-green-500 text-white py-1 mt-2 rounded-md"
                  >
                    Complete
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Resolved Task */}
        <div
          className={`w-full ${
            currentTab === "Resolved Task" ? "block" : "hidden md:block"
          }`}
        >
          <h3 className="text-black font-bold text-[20px] py-2 pl-2">
            Resolved Task
          </h3>
          {resolved.length === 0 ? (
            <p className="text-black pl-2">No resolved tasks yet.</p>
          ) : (
            resolved.map((task, index) => (
              <div
                key={index}
                className="shadow-[0_4px_10px_rgba(0,0,0,0.08)] rounded-md my-4 mx-2"
                style={{ backgroundColor: "#E0E7FF", padding: "20px 16px" }}
              >
                <p className="text-[#1b2127] font-semibold" style={{ fontSize: "18px" }}>
                  {task}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Main_part;
