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
        duration: "MAY 2023 - OCT 2023",
        desc: [
          "Led frontend development of a generative AI chatbot, designing and implementing user-friendly interactive features using HTML, CSS, and JavaScript.",
          "Partnered with a team of data analysts and engineers to analyze and interpret large datasets to identify key areas where applicants are dropping off when going through an online account opening process.",
          "Created interactive Power BI visualizations to present findings, enabling teams to make data-driven decisions and enhance overall application experience."
        ]
      },
      "American Express": {
        jobTitle: "Software Engineering Intern @",
        duration: "MAY 2023",
        desc: [
          "Collaborated with the Deposits and Checking engineering team to design and implement a new webpage that integrates with GitHub and ServiceNow APIs in order to improve tracking GitHub releases.",
          "Led the creation of frontend components and assisted with backend, leveraging JavaScript, React.js, Node.js, and Postman, to develop a seamless solution for the project.",
          "Improved engineering team processes by identifying existing application pain points and establishing the foundation for future enhancements in our application."
        ]
      },
      "Ultimate Kronos Group": {
        jobTitle: "Print Production Associate II @",
        duration: "AUG 2021 - MAY 2023",
        desc: [
          "Executed printing, secure sealing, and timely dispatch of payroll checks to ensure efficient salary distribution.",
          "Captured payroll mail shipment data in Excel logs, emphasizing precision and accuracy in every entry.",
          "Assumed role of team leader during tax season, providing comprehensive training to temporary employees on mail shipping procedures and ensuring smooth and efficient operations."
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
