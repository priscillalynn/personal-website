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
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
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
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
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
  height: 300

}));

const TabsContainer = styled(Tabs)(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.divider}`
}));

const JobsList = () => {
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    BankUnited: {
        jobTitle: "Digital Banking Intern @",
        duration: "MAY 2023 - PRESENT",
        desc: [
          "Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring innovative products and services to market.",
          "Design and build innovative technologies in a large distributed computing environment and help lead fundamental changes in the industry.",
          "Build distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use."
        ]
      },
      "American Express": {
        jobTitle: "Software Engineering Intern @",
        duration: "MAY 2023",
        desc: [
          "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
          "Iteratively built web experiences for 80 million users across high-traffic pages.",
          "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations."
        ]
      },
      "Ultimate Kronos Group": {
        jobTitle: "Print Production Associate II @",
        duration: "AUG 2021 - MAY 2023",
        desc: [
          "Developing and researching an NLP-based framework using state-of-the-art tools like Spacy and Stanza to facilitate the derivation of requirements from health data by leveraging syntactic dependencies, entity-recognition and rule-based match-making.",
          " Application selected for DCS Research Award ($4,000) as part of the ”Visualizing Privacy Analysis Results” project led by Professor Marsha Chechik."
        ]
      },
      "Starbucks": {
        jobTitle: "Senior Barista @",
        duration: "MAY 2019 - MAY 2022",
        desc: [
          "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
          "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
          "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
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
