import Authenticated from "@/Layouts/Dashboard/AuthenticatedLayout";
import React from "react";
import DashboardContainer from "@/Components/Dashboard/layout/DashboardContainer/DashboardContainer";

export default function DashboardPage() {
    return (
        <Authenticated>
            <DashboardContainer />
        </Authenticated>
    );
}
