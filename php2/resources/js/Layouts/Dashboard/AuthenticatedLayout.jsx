import { useState } from "react";
import { Head, Link } from "@inertiajs/react";
import Sidebar from "@/Components/Dashboard/layout/Sidebar/Sidebar";

export default function Authenticated({ children }) {
    return (
        <div>
            <Head title="Dashboard" />
            <Sidebar />
            <div>{children}</div>
        </div>
    );
}
