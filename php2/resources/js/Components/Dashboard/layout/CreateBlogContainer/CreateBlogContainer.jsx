import { ImageUpload } from "@/Components/ImageDnd/ImageUpload";
import React from "react";

export default function CreateBlogContainer() {
    return (
        <div className="container-fluid py-4">
            <div className="row">
                <div className="col-lg-9 col-12 mx-auto">
                    <div className="card card-body mt-4">
                        <h6 className="mb-0">New Blog</h6>
                        <p className="text-sm mb-0">Create new blog</p>
                        <hr className="horizontal dark my-3" />
                        <form>
                            <div className="form-group">
                                <label
                                    htmlFor="blogTitle"
                                    className="form-label"
                                >
                                    Blog Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="blogTitle"
                                    placeholder="Enter blog title ..."
                                />
                            </div>
                            <div class="form-group">
                                <label for="blogDesc">
                                    Blog Short Description
                                </label>
                                <textarea
                                    class="form-control"
                                    id="blogDesc"
                                    placeholder="Enter blog short description"
                                    rows="3"
                                ></textarea>
                            </div>
                        </form>
                        <ImageUpload />
                    </div>
                </div>
            </div>
        </div>
    );
}
