import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Avatar, Box } from '@mui/material';
import { Error as ErrorIcon, Warning as WarningIcon } from '@mui/icons-material';

const AlertsTimeline = () => (
  <Paper 
    elevation={0} 
    sx={{ 
      p: 3, 
      height: '100%',
      border: '1px solid rgba(0, 0, 0, 0.06)',
      borderRadius: '24px',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
    }}
  >
    <Typography variant="h6" mb={2} sx={{ fontWeight: 600 }}>
      Alerts & Issues
    </Typography>
    <List sx={{ '& .MuiListItem-root': { py: 1.5 } }}>
      <ListItem>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <Avatar sx={{ bgcolor: '#DC354520', width: 32, height: 32 }}>
            <ErrorIcon sx={{ color: '#DC3545', fontSize: '1.2rem' }} />
          </Avatar>
        </ListItemIcon>
        <ListItemText
          primary={
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}>
              <Typography variant="body2" sx={{ fontWeight: 500, flex: 1 }}>
                High-risk vulnerability detected
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ ml: 2, width: '100px', textAlign: 'right' }}>
                29 minutes ago
              </Typography>
            </Box>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <Avatar sx={{ bgcolor: '#FFC10720', width: 32, height: 32 }}>
            <WarningIcon sx={{ color: '#FFC107', fontSize: '1.2rem' }} />
          </Avatar>
        </ListItemIcon>
        <ListItemText
          primary={
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}>
              <Typography variant="body2" sx={{ fontWeight: 500, flex: 1 }}>
                Policy violation reported
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ ml: 2, width: '100px', textAlign: 'right' }}>
                35 minutes ago
              </Typography>
            </Box>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <Avatar sx={{ bgcolor: '#DC354520', width: 32, height: 32 }}>
            <ErrorIcon sx={{ color: '#DC3545', fontSize: '1.2rem' }} />
          </Avatar>
        </ListItemIcon>
        <ListItemText
          primary={
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}>
              <Typography variant="body2" sx={{ fontWeight: 500, flex: 1 }}>
                New issue: Data breach
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ ml: 2, width: '100px', textAlign: 'right' }}>
                3 hours ago
              </Typography>
            </Box>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <Avatar sx={{ bgcolor: '#FFC10720', width: 32, height: 32 }}>
            <WarningIcon sx={{ color: '#FFC107', fontSize: '1.2rem' }} />
          </Avatar>
        </ListItemIcon>
        <ListItemText
          primary={
            <Box sx={{ 
              display: 'flex',
              alignItems: 'center',
              width: '100%',
            }}>
              <Typography variant="body2" sx={{ fontWeight: 500, flex: 1 }}>
                Third-party risk assessment due
              </Typography>
              <Typography variant="caption" color="text.secondary" sx={{ ml: 2, width: '100px', textAlign: 'right' }}>
                5 hours ago
              </Typography>
            </Box>
          }
        />
      </ListItem>
    </List>
  </Paper>
);

export default AlertsTimeline; 