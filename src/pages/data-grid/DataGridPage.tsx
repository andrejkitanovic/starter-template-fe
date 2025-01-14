import { useMemo } from "react";
import { Paper, Stack } from "@mui/material";
import { type GridColDef } from "@mui/x-data-grid";
import { map, range } from "lodash";

import DataGrid from "components/DataGrid/DataGrid";

const rows = map(range(1, 201), (index) => ({
  _id: index,
  progress: 1,
  name: `Row ${index}`,
}));

const DataGridPage = () => {
  const columns = useMemo<GridColDef<any, any>[]>(
    () => [
      {
        field: "name",
        headerName: "Name",
        width: 140,
        sortable: true,
        editable: true,
      },
    ],
    [],
  );

  return (
    <Stack
      component={Paper}
      flexDirection="column"
      overflow="hidden"
      maxHeight="100%"
      flex={1}
      p={2}
    >
      <DataGrid
        columns={columns}
        data={rows}
        metaPagination={{
          page: 0,
          totalPages: 1,
          totalResults: rows.length,
        }}
        onPaginationChange={() => {}}
        status="success"
      />
    </Stack>
  );
};

export default DataGridPage;
