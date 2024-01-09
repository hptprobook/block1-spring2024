import BlogListContainer from "@/Components/Dashboard/layout/BlogListContainer/BlogListContainer";
import Authenticated from "@/Layouts/Dashboard/AuthenticatedLayout";
import React from "react";

export default function ListPage() {
    return (
        <Authenticated>
            <BlogListContainer />
        </Authenticated>
    );
}
