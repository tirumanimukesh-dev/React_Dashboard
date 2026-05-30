

import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
      style={{ color: colors.grey[100] }}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const SidebarComponent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar collapsed={collapsed} backgroundColor={colors.primary[400]}>
        <Menu>

          {/* HEADER */}
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => setCollapsed(!collapsed)}
          >
            {!collapsed && (
              <Box display="flex" justifyContent="space-between" width="100%">
                <Typography variant="h4">ADMINIS</Typography>
                <IconButton onClick={() => setCollapsed(!collapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* ITEMS */}
          <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />

          <Typography sx={{ m: "10px" }}>Data</Typography>
          <Item title="Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
          <Item title="Contacts" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
          <Item title="Invoices" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />

          <Typography sx={{ m: "10px" }}>Pages</Typography>
          <Item title="Form" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
          <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
          <Item title="FAQ" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />

          <Typography sx={{ m: "10px" }}>Charts</Typography>
          <Item title="Bar" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
          <Item title="Pie" to="/pie" icon={<PieChartOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
          <Item title="Line" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
          <Item title="Geography" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />

        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;