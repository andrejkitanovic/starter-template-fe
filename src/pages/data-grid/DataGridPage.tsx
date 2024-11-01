import React, { useCallback, useMemo, useState } from "react";
import {
  CancelOutlined,
  DeleteOutline,
  EditOutlined,
  SaveOutlined,
} from "@mui/icons-material";
import { Paper, Stack } from "@mui/material";
import {
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
  GridRowModes,
  type GridColDef,
  type GridEventListener,
  type GridRowId,
  type GridRowModel,
  type GridRowModesModel,
} from "@mui/x-data-grid";
import { map, range } from "lodash";

import { renderEditProgress } from "components/datagrid/renderer/renderEditProgress";
import { renderProgress } from "components/datagrid/renderer/renderProgress";

const initialRows = map(range(1, 201), (index) => ({
  id: index,
  progress: 1,
  name: `Row ${index}`,
}));

const DataGridPage = () => {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event,
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = useCallback(
    (id: GridRowId) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    },
    [rowModesModel],
  );

  const handleSaveClick = useCallback(
    (id: GridRowId) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    },
    [rowModesModel],
  );

  const handleDeleteClick = useCallback(
    (id: GridRowId) => () => {
      setRows(rows.filter((row) => row.id !== id));
    },
    [rows],
  );

  const handleCancelClick = useCallback(
    (id: GridRowId) => () => {
      setRowModesModel({
        ...rowModesModel,
        [id]: { mode: GridRowModes.View, ignoreModifications: true },
      });

      const editedRow = rows.find((row) => row.id === id) as any;
      if (editedRow!.isNew) {
        setRows(rows.filter((row) => row.id !== id));
      }
    },
    [rowModesModel, rows],
  );

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    //@ts-expect-error
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const isLoading = false;

  const columns = useMemo<GridColDef<any, any>[]>(
    () => [
      {
        field: "name",
        headerName: "Name",
        width: 140,
        sortable: true,
        editable: true,
        // id: "name",
        // accessorKey: "name",
        // header: "Name",
        // minSize: 140,
        // cell: ({ getValue }) => <TextFormatter value={getValue()} />,
      },
      {
        field: "progress",
        headerName: "Progress",
        renderCell: renderProgress,
        renderEditCell: renderEditProgress,
        type: "number",
        width: 120,
        editable: true,
      },
      {
        field: "actions",
        type: "actions",
        headerName: "Actions",
        width: 120,
        cellClassName: "actions",
        getActions: ({ id }) => {
          const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

          if (isInEditMode) {
            return [
              <GridActionsCellItem
                icon={<SaveOutlined />}
                label="Save"
                color="primary"
                onClick={handleSaveClick(id)}
              />,
              <GridActionsCellItem
                icon={<CancelOutlined />}
                label="Cancel"
                onClick={handleCancelClick(id)}
                color="error"
              />,
            ];
          }

          return [
            <GridActionsCellItem
              icon={<EditOutlined />}
              label="Edit"
              onClick={handleEditClick(id)}
              color="primary"
            />,
            <GridActionsCellItem
              icon={<DeleteOutline />}
              label="Delete"
              onClick={handleDeleteClick(id)}
              color="error"
            />,
          ];
        },
      },
    ],
    [
      handleCancelClick,
      handleDeleteClick,
      handleEditClick,
      handleSaveClick,
      rowModesModel,
    ],
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
        rows={rows}
        columns={columns}
        loading={isLoading}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        disableColumnMenu
      />
    </Stack>
  );
};

export default DataGridPage;
