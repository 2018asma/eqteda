import * as React from "react";
import { Tabs, Tab, Typography, Box, Grid } from "@material-ui/core";

import OrganizersList from "./organizer/OrganizersList";
import CreateOrganizer from "./organizer/CreateOrganizer";

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const OrganizerTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleTab = (event, tabValue) => {
    setValue(tabValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleTab}
          aria-label="basic tabs example"
        >
              <Tab label="جميع المنظمون" />
              <Tab label="إضافة منظم" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OrganizersList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CreateOrganizer />
      </TabPanel>
    </Box>
  );
};

export default OrganizerTabs;
