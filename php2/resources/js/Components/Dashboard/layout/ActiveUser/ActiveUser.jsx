import React from "react";

export default function ActiveUser() {
    return (
        <div className="col-lg-5 mb-lg-0 mb-4">
            <div className="card z-index-2">
                <div className="card-body p-3">
                    <div className="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3">
                        <div className="chart">
                            <canvas
                                id="chart-bars"
                                className="chart-canvas"
                                height="170"
                            ></canvas>
                        </div>
                    </div>
                    <h6 className="ms-2 mt-4 mb-0">Active Users</h6>
                    <p className="text-sm ms-2">
                        (<span className="font-weight-bolder">+23%</span>) than
                        last week
                    </p>
                    <div className="container border-radius-lg">
                        <div className="row">
                            <div className="col-3 py-3 ps-0">
                                <div className="d-flex mb-2">
                                    <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center"></div>
                                    <p className="text-xs mt-1 mb-0 font-weight-bold">
                                        Users
                                    </p>
                                </div>
                                <h4 className="font-weight-bolder">36K</h4>
                                <div className="progress w-75">
                                    <div
                                        className="progress-bar bg-dark w-60"
                                        role="progressbar"
                                        aria-valuenow="60"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <div className="col-3 py-3 ps-0">
                                <div className="d-flex mb-2">
                                    <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center me-2 d-flex align-items-center justify-content-center"></div>
                                    <p className="text-xs mt-1 mb-0 font-weight-bold">
                                        Clicks
                                    </p>
                                </div>
                                <h4 className="font-weight-bolder">2m</h4>
                                <div className="progress w-75">
                                    <div
                                        className="progress-bar bg-dark w-90"
                                        role="progressbar"
                                        aria-valuenow="90"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <div className="col-3 py-3 ps-0">
                                <div className="d-flex mb-2">
                                    <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center me-2 d-flex align-items-center justify-content-center"></div>
                                    <p className="text-xs mt-1 mb-0 font-weight-bold">
                                        Sales
                                    </p>
                                </div>
                                <h4 className="font-weight-bolder">435$</h4>
                                <div className="progress w-75">
                                    <div
                                        className="progress-bar bg-dark w-30"
                                        role="progressbar"
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <div className="col-3 py-3 ps-0">
                                <div className="d-flex mb-2">
                                    <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center me-2 d-flex align-items-center justify-content-center"></div>
                                    <p className="text-xs mt-1 mb-0 font-weight-bold">
                                        Items
                                    </p>
                                </div>
                                <h4 className="font-weight-bolder">43</h4>
                                <div className="progress w-75">
                                    <div
                                        className="progress-bar bg-dark w-50"
                                        role="progressbar"
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
