import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Members = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!isAuthenticated || !loggedInUser || loggedInUser.role !== "admin") {
      navigate("/signin"); 
    } else {
      setUsers(storedUsers);
    }
  }, [navigate]);

  const handleDelete = (email) => {
    const updatedUsers = users.filter((user) => user.email !== email);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div style={{height:"auto", width:"400px",border:"2px solid gray", padding:"20px", margin:"50px", gap:"20px"}} className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">User List</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wider">
              <th className="py-3 px-6 border">ID</th>
              <th className="py-3 px-6 border text-left">Name</th>
              <th className="py-3 px-6 border text-left">Email</th>
              <th className="py-3 px-6 border text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={index}
                  className={`text-gray-800 text-sm ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition-all`}
                >
                  <td className="py-4 px-6 text-center border">{index + 1}</td>
                  <td className="py-4 px-6 border">{user.name}</td>
                  <td className="py-4 px-6 border">{user.email}</td>
                  <td className="py-4 px-6 text-center border">
                    <button
                      onClick={() => handleDelete(user.email)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600 transition-all"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 px-6 text-center border">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;