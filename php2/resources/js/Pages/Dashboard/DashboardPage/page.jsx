import Authenticated from "@/Layouts/Dashboard/AuthenticatedLayout";
import React from "react";
import "/resources/css/soft-ui-dashboard.css";
import DashboardContainer from "@/Components/Dashboard/layout/DashboardContainer/DashboardContainer";

export default function DashboardPage() {
    return (
        <Authenticated>
            <DashboardContainer />
        </Authenticated>
    );
}
