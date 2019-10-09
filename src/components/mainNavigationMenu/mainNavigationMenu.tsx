import React from 'react';
import {Link} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import EventNoteIcon from '@material-ui/icons/EventNote';
import CommuteIcon from '@material-ui/icons/Commute';
import AppsIcon from '@material-ui/icons/Apps';

import TabPanel from "./TabPanel/TabPanel";

function a11yProps(index: number) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function MainNavigationMenu() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
            >
                <Tab label="Home" component={Link} to="/" icon={<AppsIcon/>} {...a11yProps(0)} />
                <Tab label="Trip pages" component={Link} to="/tripPage" icon={<CommuteIcon/>} {...a11yProps(1)} />
                <Tab label="Notes" component={Link} to="/notes" icon={<EventNoteIcon/>} {...a11yProps(2)} />
            </Tabs>
        </AppBar>
      <TabPanel value={value} index={0}>
          Page Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        Page Trip
      </TabPanel>
      <TabPanel value={value} index={2}>
        Page Notes
      </TabPanel>
    </div>
  );
}
