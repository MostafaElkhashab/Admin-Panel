import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "./../../components/Header";
import { mockDataTeam } from "../../data/mockData";
const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();
  const accessLabels = {
    admin: t("team.access.admin"),
    manager: t("team.access.manager"),
    user: t("team.access.user"),
  };

  const columns = [
    { field: "id", headerName: t("team.columns.id") },
    {
      field: "name",
      headerName: t("team.columns.name"),
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: t("team.columns.age"),
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: t("team.columns.phone"),
      flex: 1,
    },
    {
      field: "email",
      headerName: t("team.columns.email"),
      flex: 1,
    },
    {
      field: "access",
      headerName: t("team.columns.accessLevel"),
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {accessLabels[access] ?? access}
            </Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <>
      <Box m="20px">
        <Header title={t("team.title")} subtitle={t("team.subtitle")} />
        <Box
          sx={{
            height: "75vh",
            m: "40px 0 0 0",
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-cell.MuiDataGrid-cell--textLeft": {
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: `${colors.blueAccent[700]} !important`,
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid checkboxSelection columns={columns} rows={mockDataTeam} />
        </Box>
      </Box>
    </>
  );
};

export default Team;
