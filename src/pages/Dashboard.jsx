import { createRef } from "react";
import Pdf from "react-to-pdf";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import DataTable from "../components/DataTable";
import Toolbar from "../components/Toolbar";
import Button from "@mui/material/Button";
import { login } from "../services/report/reportSlice";

function createColumn() {
  return ["Calories", "Fat", "Protein", "Sugar"];
}

function createRow(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const ref = createRef();

const exportPDF = () => {
  console.log("Export PDF!");
};
const exportPDF2 = () => {
  console.log("Export PDF2!");
};

function Dashboard() {
  const rows = [
    createRow("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createRow("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createRow("Eclair", 262, 16.0, 24, 6.0),
    createRow("Cupcake", 305, 3.7, 67, 4.3),
    createRow("Gingerbread", 356, 16.0, 49, 3.9)
  ];

  return (
    <>
      <Toolbar
        buttons={[
          <Pdf targetRef={ref} filename="code-example.pdf" scale={0.8}>
            {({ toPdf }) => (
              <Button
                key={4}
                variant="outlined"
                onClick={toPdf}
                color="primary"
              >
                Export Pdf
              </Button>
            )}
          </Pdf>
        ]}
      />
      <Box ref={ref}>
        <DataTable
          header="Module Based Report"
          rows={rows}
          columns={createColumn()}
        />
        <DataTable
          header="Team Based Report"
          rows={rows}
          columns={createColumn()}
        />
        <DataTable header="Work On Hand" rows={rows} columns={createColumn()} />
        <DataTable
          header="Person Based Report"
          rows={rows}
          columns={createColumn()}
        />
      </Box>
    </>
  );
}

export default Dashboard;
