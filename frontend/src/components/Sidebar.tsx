import { List, ListItem, ListItemIcon, ListItemText, Box, Typography } from '@mui/material';
import {
  Dashboard,
  Assessment,
  Report,
  Security,
  People,
  Settings,
  BugReport,
} from '@mui/icons-material';

const navItems = [
  { text: 'Dashboard', icon: <Dashboard /> },
  { text: 'Risk Assessments', icon: <Assessment /> },
  { text: 'Issues', icon: <BugReport /> },
  { text: 'Third-Party Risks', icon: <Security /> },
  { text: 'Reports', icon: <Report /> },
  { text: 'User Management', icon: <People /> },
  { text: 'Settings', icon: <Settings /> },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: '#1C2536',
        height: '100vh',
        color: 'white',
        padding: '24px 16px',
        position: 'fixed',
        left: 0,
        top: 0,
        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, pl: 1 }}>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            fontSize: '1.25rem',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>🛡️</span> RiskGuard
        </Typography>
      </Box>
      <List sx={{ mt: 1 }}>
        {navItems.map((item) => (
          <ListItem
            key={item.text}
            button
            sx={{
              borderRadius: 1,
              mb: 0.5,
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'rgba(255, 255, 255, 0.7)', minWidth: 40 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText 
              primary={item.text} 
              sx={{ 
                '& .MuiListItemText-primary': {
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar; 