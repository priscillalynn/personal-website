import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const RootContainer = styled('div')(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.black,
  display: 'flex',
  height: 300,
  // mobile styles
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    height: 'auto',
  },
}));

const TabsContainer = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`,
  // mobile styles
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
  },
}));

const JobsList = () => {
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    BankUnited: {
        jobTitle: "Digital Banking Intern @",
        duration: "MAY 2023 - PRESENT",
        desc: [
          "Collaborated with a team of data analysts to analyze and interpret large datasets related to customer behavior and product usage.",
          "Analyzed large datasets to identify specific areas where customers tend to drop off during the online account opening process.",
          "Created interactive visualizations to present findings, enabling the team to make data-driven decisions and enhance the overall application experience."
        ]
      },
      "American Express": {
        jobTitle: "Software Engineering Intern @",
        duration: "MAY 2023",
        desc: [
          "Collaborated with the Deposits and Checking team to develop a full-stack web application using React.js and Node.js.",
          "Integrated ServiceNow and GitHub APIs to enable the application to monitor and track releases efficiently.",
          "Gained valuable hands-on experience in web development, API integration, and teamwork during the internship."
        ]
      },
      "Ultimate Kronos Group": {
        jobTitle: "Print Production Associate II @",
        duration: "AUG 2021 - MAY 2023",
        desc: [
          "Responsible for executing print production tasks, including operating printing machinery, managing print jobs, and ensuring high-quality outputs.",
          "Exercised exceptional attention to detail while utilizing Microsoft Excel to accurately input and organize data into logs."
        ]
      },
      "Starbucks": {
        jobTitle: "Senior Barista @",
        duration: "MAY 2019 - MAY 2022",
        desc: [
          "Demonstrated exceptional barista skills, efficiently preparing and serving a wide range of high-quality coffee beverages to maintain customer satisfaction and loyalty.",
          "Assumed a leadership role by training and mentoring junior baristas, ensuring adherence to Starbucks' quality standards and fostering a positive team environment."
        ]
      }
    };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <RootContainer>
      <TabsContainer
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </TabsContainer>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i} key={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection key={i} delay={`${i + 1}00ms`}>
                  <li>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </RootContainer>
  );
};

export default JobsList;
