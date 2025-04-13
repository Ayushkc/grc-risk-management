import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Radio } from '@mui/material';

export default function ActionItems() {
  return (
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
        Action Items
      </Typography>
      <List sx={{ '& .MuiListItem-root': { py: 1 } }}>
        <ListItem>
          <ListItemIcon>
            <Radio 
              checked={false}
              sx={{ 
                color: 'rgba(0, 0, 0, 0.38)',
                '&.Mui-checked': { color: '#1976d2' }
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Review risk assessment report
              </Typography>
            }
            secondary={
              <Typography variant="caption" color="text.secondary">
                Due May 5
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Radio 
              checked={false}
              sx={{ 
                color: 'rgba(0, 0, 0, 0.38)',
                '&.Mui-checked': { color: '#1976d2' }
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Investigate security issue
              </Typography>
            }
            secondary={
              <Typography variant="caption" color="text.secondary">
                Due May 2
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Radio 
              checked={true}
              sx={{ 
                color: 'rgba(0, 0, 0, 0.38)',
                '&.Mui-checked': { color: '#1976d2' }
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                Complete compliance training
              </Typography>
            }
            secondary={
              <Typography variant="caption" color="text.secondary">
                Apr 23 • Completed
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Paper>
  );
} 