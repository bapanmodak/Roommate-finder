import React from 'react';
import { LayoutGrid, Home, MessageSquare, User, PlusCircle, Settings } from 'lucide-react';

// You can make this data dynamic by fetching from your API
const userStats = {
    activeListings: 4,
    messages: 12,
    profileViews: 257,
};

const Dashboard = () => {
    return (
        // Main container with padding and a background color that matches your theme
        <div className="p-6 max-w-10/12 mx-auto md:p-10 bg-base-100 text-base-content min-h-screen">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold flex items-center gap-3">
                    <LayoutGrid className="text-warning" />
                    Dashboard
                </h1>
                <p className="text-base-content/70 mt-2">Welcome! Here is a summary of your activity.</p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

                {/* Stat Card 1: Active Listings */}
                <div className="stat bg-base-300 rounded-lg shadow-md">
                    <div className="stat-figure text-warning">
                        <Home size={32} />
                    </div>
                    <div className="stat-title">Active Listings</div>
                    <div className="stat-value text-warning">{userStats.activeListings}</div>
                    <div className="stat-desc">Your posts that are currently visible</div>
                </div>

                {/* Stat Card 2: Messages */}
                <div className="stat bg-base-300 rounded-lg shadow-md">
                    <div className="stat-figure text-warning">
                        <MessageSquare size={32} />
                    </div>
                    <div className="stat-title">Messages</div>
                    <div className="stat-value text-warning">{userStats.messages}</div>
                    <div className="stat-desc">Unread messages in your inbox</div>
                </div>

                {/* Stat Card 3: Profile Views */}
                <div className="stat bg-base-300 rounded-lg shadow-md">
                    <div className="stat-figure text-warning">
                        <User size={32} />
                    </div>
                    <div className="stat-title">Profile Views</div>
                    <div className="stat-value text-warning">{userStats.profileViews}</div>
                    <div className="stat-desc">How many people viewed your profile</div>
                </div>

            </div>

            {/* Quick Actions Section */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Action Card 1: Add New Listing */}
                    <div className="card bg-base-300 shadow-md hover:bg-base-200 transition-colors duration-300 cursor-pointer">
                        <div className="card-body items-center text-center">
                            <PlusCircle className="text-warning mb-2" size={40} />
                            <h2 className="card-title">Add New Listing</h2>
                            <p>Create a new post to find a roommate.</p>
                        </div>
                    </div>

                    {/* Action Card 2: Manage Listings */}
                    <div className="card bg-base-300 shadow-md hover:bg-base-200 transition-colors duration-300 cursor-pointer">
                        <div className="card-body items-center text-center">
                            <Settings className="text-warning mb-2" size={40} />
                            <h2 className="card-title">Manage Listings</h2>
                            <p>Update or delete your existing posts.</p>
                        </div>
                    </div>

                    {/* Action Card 3: View Messages */}
                    <div className="card bg-base-300 shadow-md hover:bg-base-200 transition-colors duration-300 cursor-pointer">
                        <div className="card-body items-center text-center">
                            <MessageSquare className="text-warning mb-2" size={40} />
                            <h2 className="card-title">View Messages</h2>
                            <p>Check your inbox for new inquiries.</p>
                        </div>
                    </div>

                    {/* Action Card 4: Edit Profile */}
                    <div className="card bg-base-300 shadow-md hover:bg-base-200 transition-colors duration-300 cursor-pointer">
                        <div className="card-body items-center text-center">
                            <User className="text-warning mb-2" size={40} />
                            <h2 className="card-title">Edit Profile</h2>
                            <p>Keep your personal information updated.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;