// import DataTable from "../components/DataTable";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import DataTable from "../components/DataTable2";
import { login } from "../services/jira/jiraSlice";

function createColumn() {
  return ["Calories", "Fat", "Protein", "Sugar"];
}

function createRow(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

function Dashboard() {
  const rows = [
    createRow("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createRow("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createRow("Eclair", 262, 16.0, 24, 6.0),
    createRow("Cupcake", 305, 3.7, 67, 4.3),
    createRow("Gingerbread", 356, 16.0, 49, 3.9)
  ];

  return (
    <Box>
      <DataTable header="Nutrition" rows={rows} columns={createColumn()} />
      <Divider variant="middle" />
      <DataTable header="Nutrition" rows={rows} columns={createColumn()} />
      <Divider variant="middle" />
      <DataTable header="Nutrition" rows={rows} columns={createColumn()} />
      <Divider variant="middle" />
      <DataTable header="Nutrition" rows={rows} columns={createColumn()} />
    </Box>
  );
}

export default Dashboard;
