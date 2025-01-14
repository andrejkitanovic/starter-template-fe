import React, { useEffect, useMemo, useState } from "react";
import {
  alpha,
  Pagination,
  PaginationItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid, type DataGridProps } from "@mui/x-data-grid";
import type { QueryStatus } from "@tanstack/react-query";
import type { OnChangeFn, PaginationState } from "@tanstack/react-table";
import { find, map } from "lodash";

import AsyncComponent from "components/AsyncComponent/AsyncComponent";

import { useDataGridSelection } from "./DataGridSelectionProvider";

type DataGridWrapperProps<T> = Omit<DataGridProps, "rows"> & {
  data: T[];
  metaPagination: {
    page: number;
    totalPages: number | undefined;
    totalResults: number | undefined;
  };
  status: QueryStatus;
  onPaginationChange: OnChangeFn<PaginationState>;
  reloadState?: any;
};

export const PAGE_SIZE = 20;
const DataGridWrapper = <T,>({
  data,
  metaPagination,
  status,
  onPaginationChange,
  reloadState,
  columns,
  ...rest
}: DataGridWrapperProps<T>): JSX.Element => {
  // [LOADERS]
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setInitialLoading(status === "loading");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadState]);

  useEffect(() => {
    if (!initialLoading || status === "loading") return;
    setInitialLoading(false);
  }, [initialLoading, status]);

  // [PAGINATION]
  const [pagination, setPagination] = useState<{
    page: number;
    totalPages: number;
    totalResults: number;
  }>({
    page: 1,
    totalPages: 1,
    totalResults: 1,
  });

  const showing = useMemo(() => {
    if (pagination.page + 1 < Math.ceil(pagination.totalResults / PAGE_SIZE)) {
      return PAGE_SIZE;
    }

    return pagination.totalResults % PAGE_SIZE;
  }, [pagination]);

  useEffect(() => {
    if (
      metaPagination.totalPages === undefined ||
      metaPagination.totalResults === undefined
    )
      return;
    // @ts-expect-error
    setPagination(metaPagination);
  }, [metaPagination]);

  // [SELECTION]
  const { selectedRows, setSelectedRows } = useDataGridSelection();

  return (
    <DataGrid
      columns={map(columns, (column) => {
        return {
          ...(column?.field !== "actions"
            ? {
                minWidth: 180,
              }
            : {}),
          ...column,
        };
      })}
      disableColumnMenu
      disableRowSelectionOnClick
      disableColumnSorting
      getRowId={(row) => row._id}
      slotProps={{
        loadingOverlay: {
          variant: "linear-progress",
          noRowsVariant: "skeleton",
        },
      }}
      slots={{
        // baseCheckbox: ThemeCheckbox,
        footer: () => (
          <Stack
            direction="row"
            height={65}
            minHeight={65}
            bgcolor="#FFF"
            borderTop="1px solid #e3e3e3"
            justifyContent="space-between"
            alignItems="center"
            px={2}
          >
            <Typography color="#1c1c1c" fontStyle="italic" fontWeight={500}>
              Showing{" "}
              <AsyncComponent
                loading={initialLoading}
                SkeletonComponent={
                  <Skeleton
                    component="span"
                    variant="text"
                    width={30}
                    sx={{
                      display: "inline-block",
                    }}
                  />
                }
              >
                {showing.toLocaleString("en-US")}
              </AsyncComponent>{" "}
              of{" "}
              <AsyncComponent
                loading={initialLoading}
                SkeletonComponent={
                  <Skeleton
                    component="span"
                    variant="text"
                    width={80}
                    sx={{
                      display: "inline-block",
                    }}
                  />
                }
              >
                {pagination.totalResults.toLocaleString("en-US")}
              </AsyncComponent>{" "}
              items
            </Typography>

            <AsyncComponent
              loading={initialLoading}
              SkeletonComponent={
                <Stack
                  direction="row"
                  spacing={0.75}
                  sx={{
                    "& .MuiSkeleton-root": {
                      borderRadius: "10px",
                    },
                  }}
                  alignItems="center"
                >
                  <PaginationItem page="Previous" disabled />
                  <Skeleton variant="rounded" height={36} width={40} />
                  <Skeleton variant="rounded" height={36} width={40} />
                  <Skeleton variant="rounded" height={36} width={40} />
                  <PaginationItem page="Next" disabled />
                </Stack>
              }
            >
              <Pagination
                variant="outlined"
                shape="rounded"
                count={pagination.totalPages}
                page={pagination.page + 1}
                onChange={(_, page) => {
                  setPagination({
                    ...pagination,
                    page: page - 1,
                  });

                  onPaginationChange({
                    pageSize: PAGE_SIZE,
                    pageIndex: page - 1,
                  });
                }}
                renderItem={(item) => (
                  <PaginationItem
                    slots={{
                      previous: () => <Typography>Previous</Typography>,
                      next: () => <Typography>Next</Typography>,
                    }}
                    {...item}
                    page={
                      typeof item.page === "number"
                        ? item.page?.toLocaleString("en-US")
                        : item.page
                    }
                  />
                )}
              />
            </AsyncComponent>
          </Stack>
        ),
      }}
      sx={{
        borderRadius: "12px",
        bgcolor: "#FFF",

        // Column
        "& .MuiDataGrid-columnHeaderTitle": {
          fontSize: 14,
          fontWeight: 400,
        },
        "& .MuiDataGrid-columnHeader": {
          bgcolor: "#FFF",
          borderRight: "1px solid #e3e3e3",

          "&:nth-of-type(2)": {
            borderTopLeftRadius: "11px!important",
          },
          "&:nth-last-of-type(3)": {
            borderTopRightRadius: "11px!important",
          },
        },
        // Row
        "& .MuiDataGrid-row": {
          transition: "background-color 100ms",
          cursor: rest.onRowClick ? "pointer" : "default",

          "&.even": {
            bgcolor: "#fff",
          },
          "&.odd": {
            bgcolor: "#fafafa",
          },
          "&.Mui-selected": {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.05),
          },
        },
        // Cell
        "& .MuiDataGrid-cell": {
          color: "#1c1c1c",
          borderRight: "1px solid #e3e3e3",

          "&:last-of-type": {
            borderRight: "none",
          },
        },
        "& .MuiDataGrid-cellCheckbox, & .MuiDataGrid-cell[data-field='actions']":
          {
            cursor: "default",
          },
      }}
      getRowClassName={({ indexRelativeToCurrentPage }) => {
        return `${indexRelativeToCurrentPage % 2 === 0 ? "odd" : "even"}`;
      }}
      rows={data || []}
      loading={status === "loading"}
      // ROW SELECTION
      onRowSelectionModelChange={(rowsIds) => {
        const rows = map(rowsIds, (id) => {
          const properties =
            find(selectedRows, { _id: id }) || find(data, { _id: id }) || {};

          return {
            ...properties,
            _id: id,
          };
        });

        setSelectedRows(rows as any);
      }}
      rowSelectionModel={selectedRows.map((row) => row._id)}
      keepNonExistentRowsSelected
      // PAGINATION
      // pagination
      // paginationMode="server"
      // paginationMeta={{
      //   hasNextPage: pagination.page + 1 < pagination.totalPages,
      // }}
      // pageSizeOptions={[PAGE_SIZE]}
      // paginationModel={{
      //   page: pagination.page,
      //   pageSize: PAGE_SIZE,
      // }}
      // rowCount={pagination.totalResults}
      {...rest}
    />
  );
};

export default DataGridWrapper;
