import React, { createContext, useContext, useState, type FC } from "react";

import type { WithChildren } from "utils/types";

type Row = {
  _id: string;
  [key: string]: any;
};

export const DataGridSelectionContext = createContext({
  selectedRows: [] as Row[],
  setSelectedRows: (_ids: Row[]) => {},
});

const DataGridSelectionProvider: FC<WithChildren<{}>> = ({ children }) => {
  const [selectedRows, setSelectedRows] = useState<Row[]>([]);

  return (
    <DataGridSelectionContext.Provider
      value={{
        selectedRows,
        setSelectedRows,
      }}
    >
      {children}
    </DataGridSelectionContext.Provider>
  );
};

export const useDataGridSelection = () => {
  const { selectedRows, setSelectedRows } = useContext(
    DataGridSelectionContext,
  ) || {
    selectedRows: [],
    setSelectedRows: () => {},
  };

  return { selectedRows, setSelectedRows };
};

export default DataGridSelectionProvider;
