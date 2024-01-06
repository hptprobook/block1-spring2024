import React from "react";

export default function ReportCard({ name, quantity, percent, icon }) {
    return (
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div className="card">
                <div className="card-body p-3">
                    <div className="row">
                        <div className="col-9">
                            <div className="numbers">
                                <p className="text-sm mb-0 text-capitalize font-weight-bold">
                                    {name}
                                </p>
                                <h5 className="font-weight-bolder mb-0">
                                    {quantity}
                                    <span className="text-success text-sm font-weight-bolder">
                                        +{percent}%
                                    </span>
                                </h5>
                            </div>
                        </div>
                        <div className="col-3 text-end">
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#fff",
                                }}
                                className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                            >
                                {icon}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
