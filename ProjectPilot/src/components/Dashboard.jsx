// import Sidebar from "./Sidebar";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const initialTasks = {
  todo: [
    { id: "1", content: "Design login page" },
    { id: "2", content: "Set up database schema" }
  ],
  inProgress: [{ id: "3", content: "Develop authentication API" }],
  done: [{ id: "4", content: "Create project repository" }]
};

const burndownData = [
  { day: "Day 1", tasksLeft: 20 },
  { day: "Day 2", tasksLeft: 18 },
  { day: "Day 3", tasksLeft: 15 },
  { day: "Day 4", tasksLeft: 12 },
  { day: "Day 5", tasksLeft: 8 },
  { day: "Day 6", tasksLeft: 4 },
  { day: "Day 7", tasksLeft: 0 }
];

const recentActivities = [
  { id: 1, type: "task", content: "Task 'Develop API' moved to 'In Progress'" },
  { id: 2, type: "comment", content: "John commented on 'Database Schema': 'Looks good!'" },
  { id: 3, type: "deployment", content: "Version 1.0 deployed successfully" }
];

const Dashboard = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [draggedTask, setDraggedTask] = useState(null);

  const onDragStart = (task, sourceColumn) => {
    setDraggedTask({ task, sourceColumn });
  };

  const onDrop = (targetColumn) => {
    if (!draggedTask) return;

    const { task, sourceColumn } = draggedTask;
    if (sourceColumn === targetColumn) return;

    setTasks((prev) => {
      const updatedSource = prev[sourceColumn].filter((t) => t.id !== task.id);
      const updatedTarget = [...prev[targetColumn], task];
      return { ...prev, [sourceColumn]: updatedSource, [targetColumn]: updatedTarget };
    });

    setDraggedTask(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Component */}
      {/* <Sidebar /> */}
      
      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold text-gray-800">Scrum Dashboard</h1>
        
        {/* Sprint Overview Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Sprint Progress</h2>
            <p className="text-gray-600">70% Completed</p>
            <div className="w-full bg-gray-200 h-2 mt-2 rounded">
              <div className="bg-green-500 h-2 rounded" style={{ width: "70%" }}></div>
            </div>
          </div>
          
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Next Scrum Meeting</h2>
            <p className="text-gray-600">Tomorrow at 10:00 AM</p>
          </div>
          
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-semibold">Active Tasks</h2>
            <p className="text-gray-600">15 Tasks in Progress</p>
          </div>
        </div>
        
        {/* Kanban Board */}
        <div className="mt-6 p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Kanban Board</h2>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(tasks).map(([columnId, columnTasks]) => (
              <div 
                key={columnId}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => onDrop(columnId)}
                className="bg-gray-200 p-4 rounded-lg min-h-[200px]"
              >
                <h3 className="text-md font-semibold capitalize mb-2">
                  {columnId.replace("inProgress", "In Progress")}
                </h3>
                {columnTasks.map((task) => (
                  <div 
                    key={task.id} 
                    draggable
                    onDragStart={() => onDragStart(task, columnId)}
                    className="bg-white p-2 rounded shadow mb-2 cursor-grab"
                  >
                    {task.content}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Burndown Chart */}
        <div className="mt-6 p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Burndown Chart</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={burndownData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="tasksLeft" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="mt-6 p-4 bg-white shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="text-gray-600">
            {recentActivities.map((activity) => (
              <li key={activity.id} className="mb-2 p-2 bg-gray-100 rounded">
                {activity.content}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Sidebar (Quick Actions) */}
      <div className="w-64 p-4 bg-white shadow-md">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <button className="w-full bg-blue-500 text-white p-2 rounded mb-2">Add New Task</button>
        <div className="mb-4">
          <h3 className="text-md font-semibold">Sprint Timeline</h3>
          <p className="text-gray-600">Remaining Days: 7</p>
        </div>
        <div className="mb-4">
          <h3 className="text-md font-semibold">Scrum Discussion</h3>
          <p className="text-gray-600">(Chat section placeholder)</p>
        </div>
        <div>
          <h3 className="text-md font-semibold">Sprint Retrospective Notes</h3>
          <p className="text-gray-600">(Insights on improvements will be displayed here)</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
