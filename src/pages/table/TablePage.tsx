import React, { useMemo } from "react";
import { Paper, Stack } from "@mui/material";
import type { ColumnDef } from "@tanstack/react-table";
import { map, range } from "lodash";

import DefaultTanstackTable from "components/Table/Default/Table";
import TextFormatter from "components/Table/formatters/TextFormatter";
import { useTable } from "components/Table/useTable";

const TablePage = () => {
  const data = map(range(1, 201), (index) => ({
    id: index,
    name: `Row ${index}`,
  }));

  const columns = useMemo<ColumnDef<any, any>[]>(
    () => [
      {
        id: "name",
        accessorKey: "name",
        header: "Name",
        minSize: 140,
        cell: ({ getValue }) => <TextFormatter value={getValue()} />,
      },
    ],
    [],
  );

  const { table } = useTable({
    data,
    columns,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 20,
      },
    },
  });

  return (
    <Stack
      component={Paper}
      flexDirection="column"
      overflow="hidden"
      maxHeight="100%"
      flex={1}
      p={2}
    >
      <DefaultTanstackTable
        table={table}
        status="success"
        totalResults={data.length}
      />
    </Stack>
  );
};

export default TablePage;
