import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/dataActions";

const TableShow = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const [rowHeight, setRowHeight] = useState(52);

  React.useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 720) {
        setRowHeight(104);
      } else {
        setRowHeight(52);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const columns = [
    { field: "id", headerName: "ID", width: "70", flex: 0.5 },
    {
      field: "userId",
      headerName: "User ID",
      flex: 0.5,
    },
    { field: "title", headerName: "Title", width: "70", flex: 1 },

    { field: "body", headerName: "Body", width: "70", flex: 1 },
  ];

  return (
    <div
      style={{
        margin: "32px",
      }}
    >
      {data && (
        <Box>
          <DataGrid
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.white,
                borderBottom: "none",
              },
              "& .MuiDataGrid-footerContainer": {
                backgroundColor: theme.palette.primary.light,
                color: theme.palette.white,
                borderTop: "none",
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${theme.palette.white} `,
              },
            }}
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  page: 0,
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5, 10]}
            rowHeight={rowHeight}
          />
        </Box>
      )}
    </div>
  );
};

export default TableShow;
