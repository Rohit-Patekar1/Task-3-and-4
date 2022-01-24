import React from "react";
import { MDBContainer } from "mdbreact";
import { HorizontalBar } from "react-chartjs-2";

const Graph1 = () => {


    const data = {
        labels: ["Service Plumbing", "Bid Work HVAC", "Service HVAC", "Bid Work Plumbing", "HWT Replacement", "Maintenance", "Material sale"],
        datasets: [
            {
                label: "Revenue By Job Type",
                data: [161000, 130000, 80000, 78000, 43000, 42000, 3000],
                fill: true,
                backgroundColor: "rgba(6, 156,51, .3)",
                borderColor: "#02b844",
            }
        ]
    }

    return (
        <MDBContainer>
            <HorizontalBar data={data} />
        </MDBContainer>
    );
}

export default Graph1;