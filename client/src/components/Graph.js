import React from "react";
import { MDBContainer } from "mdbreact";
import { HorizontalBar } from "react-chartjs-2";

const Graph = () => {


    const data = {
        labels: ["Everett", "Seattle", "Lynnwood", "Bothhell", "Mukilteo", "Edmonds"],
        datasets: [
            {
                label: "Revenue By Job Location",
                data: [100000, 80000, 49000, 47000, 46000, 34000],
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

export default Graph;