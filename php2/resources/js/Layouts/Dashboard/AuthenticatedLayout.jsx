import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Sidebar from "@/Components/Dashboard/layout/Sidebar/Sidebar";
import DashboardHeader from "@/Components/Dashboard/layout/Header/DashboardHeader";
import "../../../css/soft-ui-dashboard.css";
import DashboardFooter from "@/Components/Dashboard/layout/Footer/DashboardFooter";

export default function Authenticated({ children }) {
    return (
        <div>
            <Head title="Dashboard" />
            <Sidebar />
            <DashboardHeader namePage={"Dashboard"} />
            <div
                style={{
                    marginLeft: "17.125rem",
                }}
            >
                {children}
            </div>
        </div>
    );
}
