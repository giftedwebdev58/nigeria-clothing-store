import Sidebar from "./sidebar";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/options";

export default function DashboardLayout({ children }) {
    const session = getServerSession(options);
    if (!session) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Please sign in</h1>
            </div>
        );
    }
    if (session.user.role !== "admin") {
        return (
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">You are not authorized to view this page</h1>
            </div>
        );
    }
    return (
        <div className="py-8">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <Sidebar />
                    <div className="lg:col-span-3">
                        <div className="bg-white border border-slate-200 rounded-lg p-6">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}