import React from 'react';
import {
  Button,
  Card,
  Text,
  Input,
  Label,
  Dropdown,
  Option,
  TabList,
  Tab,
  makeStyles,
  tokens,
  Divider,
} from '@fluentui/react-components';
import { 
  PersonRegular,
  SettingsRegular,
  HomeRegular,
  DocumentRegular 
} from '@fluentui/react-icons';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    padding: tokens.spacingHorizontalL,
    maxWidth: '800px',
    margin: '0 auto',
  },
  card: {
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalS,
    marginTop: tokens.spacingVerticalM,
  },
});

const App = () => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = React.useState('home');

  const onTabSelect = (event, data) => {
    setSelectedTab(data.value);
  };

  return (
    <div className={styles.container}>
      <TabList selectedValue={selectedTab} onTabSelect={onTabSelect}>
        <Tab icon={<HomeRegular />} value="home">Home</Tab>
        <Tab icon={<DocumentRegular />} value="docs">Documentation</Tab>
        <Tab icon={<SettingsRegular />} value="settings">Settings</Tab>
      </TabList>

      <Card className={styles.card}>
        <Text as="h1" size={800} weight="semibold">Welcome to Fluent Foundation</Text>
        <Text size={300}>This template includes common Fluent UI components and patterns.</Text>
        
        <Divider style={{ margin: '20px 0' }} />
        
        <div className={styles.form}>
          <Label htmlFor="name" size="medium">Name</Label>
          <Input id="name" placeholder="Enter your name" />
          
          <Label htmlFor="role" size="medium">Role</Label>
          <Dropdown id="role" placeholder="Select a role">
            <Option>Developer</Option>
            <Option>Designer</Option>
            <Option>Manager</Option>
          </Dropdown>
          
          <Button 
            icon={<PersonRegular />} 
            appearance="primary"
            style={{ marginTop: tokens.spacingVerticalM }}
          >
            Get Started
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default App;
