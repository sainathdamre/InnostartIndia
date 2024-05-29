import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
    const { currentUser } = useSelector((state) => state.user);
    const [users, setUsers] = useState([]);
    const [pendingRequests, setPendingRequests] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`/api/auth/users`);
                if (res.ok) {
                    const data = await res.json();
                    setUsers(data);
                } else {
                    throw new Error('Failed to fetch users');
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchPendingRequests = async () => {
            try {
                const res = await fetch(`/api/auth/pending-requests`);
                if (res.ok) {
                    const data = await res.json();
                    setPendingRequests(data);
                } else {
                    throw new Error('Failed to fetch pending requests');
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchPendingRequests();
    }, []);

    const sendConnectionRequest = async (receiverId) => {
        try {
            const res = await fetch('/api/auth/send-connection-request', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    senderId: currentUser._id,
                    receiverId,
                    message: 'Hello, let\'s connect!', // Optional message
                }),
            });
            if (res.ok) {
                // Update the pendingRequests state to mark this user as pending
                setPendingRequests([...pendingRequests, receiverId]);
            } else {
                throw new Error('Failed to send connection request');
            }
        } catch (error) {
            console.log(error.message);
            // Handle error, e.g., show an error message
        }
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="container mx-auto py-8">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-3">
                        <img
                            src={currentUser.image}
                            alt="Profile Picture"
                            className="w-12 h-12 rounded-full"
                        />
                        <h1 className="text-3xl font-bold">{currentUser.fName}</h1>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Search here..."
                        />
                        <button className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Search
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Display pending requests */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h2 className="text-xl font-bold mb-4">Pending Requests</h2>
                        {pendingRequests.length > 0 ? (
                            pendingRequests.map((request, index) => (
                                <div key={index} className="flex items-center mb-2">
                                    {/* Display pending request information */}
                                    <p className="text-black">{request.senderName}</p>
                                    {/* Add option to accept or decline */}
                                </div>
                            ))
                        ) : (
                            <p>No pending requests</p>
                        )}
                    </div>

                    {/* Display other users */}
                    {users.map((user, index) => (
                        <div className="bg-white rounded-lg shadow p-4" key={index}>
                            <div className="flex items-center mb-4">
                                <img
                                    src={user.image}
                                    alt="Profile Picture"
                                    className="w-12 h-12 rounded-full"
                                />
                                <h2 className="ml-3 text-xl text-black font-bold">{user.fName}</h2>
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                onClick={() => sendConnectionRequest(user._id)}
                                disabled={pendingRequests.includes(user._id)} // Disable button if request is pending
                            >
                                {pendingRequests.includes(user._id) ? "Pending" : "Connect"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
