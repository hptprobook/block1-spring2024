import CreateBlogContainer from "@/Components/Dashboard/layout/CreateBlogContainer/CreateBlogContainer";
import Authenticated from "@/Layouts/Dashboard/AuthenticatedLayout";
import React from "react";

export default function CreatePage() {
    return (
        <Authenticated>
            <CreateBlogContainer />
        </Authenticated>
    );
}
