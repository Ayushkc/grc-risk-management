import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  Avatar,
  InputBase,
  IconButton,
} from '@mui/material';
import {
  Warning,
  Error,
  People,
  CheckCircle,
  Circle,
  Search as SearchIcon,
} from '@mui/icons-material';

const MetricCard = ({ icon, count, label, color }: any) => (
  <Paper
    elevation={0}
    sx={{
      p: 2.5,
      display: 'flex',
      alignItems: 'center',
      gap: 2.5,
      borderRadius: '24px',
      height: '100%',
      border: '1px solid rgba(0, 0, 0, 0.06)',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 12px 48px rgba(0, 0, 0, 0.12)',
      }
    }}
  >
    <Box
      sx={{
        backgroundColor: `${color}15`,
        borderRadius: '50%',
        p: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {icon}
    </Box>
    <Box>
      <Typography variant="h4" fontWeight="600" sx={{ mb: 0.5, fontSize: '1.75rem' }}>
        {count}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
        {label}
      </Typography>
    </Box>
  </Paper>
);

const SearchBar = () => (
  <Paper
    elevation={0}
    sx={{
      display: 'flex',
      alignItems: 'center',
      px: 2,
      py: 1,
      mb: 4,
      border: '1px solid rgba(0, 0, 0, 0.06)',
      borderRadius: 2,
      width: '100%',
      maxWidth: 400,
    }}
  >
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search..."
      inputProps={{ 'aria-label': 'search dashboard' }}
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
);

const RiskHeatmap = () => {
  const risks = [
    { 
      name: 'Data Breach Risk',
      likelihood: 'High',
      impact: 'Critical',
      color: '#DC3545',
      position: { top: '15%', right: '15%' }
    },
    {
      name: 'Vendor Compliance Gap',
      likelihood: 'Low',
      impact: 'Significant',
      color: '#FFC107',
      position: { top: '45%', left: '15%' }
    },
    {
      name: 'System Downtime Risk',
      likelihood: 'Low',
      impact: 'Moderate',
      color: '#28A745',
      position: { bottom: '15%', left: '5%' }
    }
  ];

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 4, 
        height: '100%',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        borderRadius: '16px',
        background: '#fff',
      }}
    >
      <Typography variant="h6" mb={4} sx={{ fontWeight: 500, color: '#2D3748' }}>
        Risk Heatmap
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 4,
          height: 'calc(100% - 60px)',
          position: 'relative',
        }}
      >
        {/* Y-axis with Impact Level */}
        <Box sx={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          pr: 2,
          pt: 1,
          pb: 6,
          position: 'relative',
          minWidth: '100px',
        }}>
          <Typography variant="body2" color="text.secondary">Critical</Typography>
          <Typography variant="body2" color="text.secondary">Significant</Typography>
          <Typography variant="body2" color="text.secondary">Moderate</Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              position: 'absolute',
              transform: 'rotate(-90deg)',
              left: -55,
              top: '50%',
              transformOrigin: 'center',
              color: '#4A5568',
              whiteSpace: 'nowrap',
            }}
          >
            Impact Level
          </Typography>
        </Box>

        {/* Heatmap Grid */}
        <Box sx={{ position: 'relative', pb: 6 }}>
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: 1.5,
            height: '100%',
            position: 'relative',
            border: 'none',
          }}>
            {/* Critical row */}
            <Box sx={{ bgcolor: '#FFF5F5', borderRadius: '8px' }} />
            <Box sx={{ bgcolor: '#FED7D7', borderRadius: '8px' }} />
            <Box sx={{ bgcolor: '#FEB2B2', borderRadius: '8px' }} />
            {/* Significant row */}
            <Box sx={{ bgcolor: '#FFFFF0', borderRadius: '8px' }} />
            <Box sx={{ bgcolor: '#FEFCBF', borderRadius: '8px' }} />
            <Box sx={{ bgcolor: '#FAF089', borderRadius: '8px' }} />
            {/* Moderate row */}
            <Box sx={{ bgcolor: '#F0FFF4', borderRadius: '8px' }} />
            <Box sx={{ bgcolor: '#C6F6D5', borderRadius: '8px' }} />
            <Box sx={{ bgcolor: '#9AE6B4', borderRadius: '8px' }} />

            {/* Risk dots */}
            {risks.map((risk) => (
              <Box
                key={risk.name}
                sx={{ 
                  position: 'absolute',
                  ...risk.position,
                  width: 12,
                  height: 12,
                  bgcolor: risk.color,
                  borderRadius: '50%',
                  boxShadow: `0 0 0 4px ${risk.color}20`,
                  zIndex: 2,
                }}
              />
            ))}
          </Box>

          {/* X-axis labels */}
          <Box sx={{ 
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'space-between',
            px: 2,
          }}>
            <Typography variant="body2" color="text.secondary">Low</Typography>
            <Typography variant="body2" color="text.secondary">Medium</Typography>
            <Typography variant="body2" color="text.secondary">High</Typography>
          </Box>

          {/* Likelihood label */}
          <Typography 
            variant="body2" 
            sx={{ 
              position: 'absolute',
              bottom: -24,
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#4A5568',
            }}
          >
            Likelihood
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

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
            <Error sx={{ color: '#DC3545', fontSize: '1.2rem' }} />
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
            <Warning sx={{ color: '#FFC107', fontSize: '1.2rem' }} />
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
            <Error sx={{ color: '#DC3545', fontSize: '1.2rem' }} />
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
            <Warning sx={{ color: '#FFC107', fontSize: '1.2rem' }} />
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

const ActionItems = () => (
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

const Dashboard = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#F8F9FA', 
        ml: '250px',
        width: 'calc(100vw - 250px)',
        boxSizing: 'border-box',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ 
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        p: { xs: 2, sm: 3, md: 4 },
      }}>
        {/* Header Section */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', 
          mb: { xs: 3, md: 4 },
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          gap: 2
        }}>
          <Box sx={{ flex: 1, minWidth: { xs: '100%', md: 0 }, order: { xs: 2, md: 1 } }} />
          <Box sx={{ 
            textAlign: 'center', 
            flex: 2,
            minWidth: { xs: '100%', md: 0 },
            order: { xs: 1, md: 2 }
          }}>
            <Typography variant="h4" sx={{ mb: 1, fontWeight: 600, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
              Welcome back, Anirban 👋
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Here's what's happening today in your risk profile.
            </Typography>
          </Box>
          <Box sx={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'flex-end',
            minWidth: { xs: '100%', md: 0 },
            order: { xs: 3, md: 3 }
          }}>
            <SearchBar />
          </Box>
        </Box>

        {/* Metric Cards */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ mb: { xs: 3, md: 4 } }}>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              icon={<Error sx={{ color: '#DC3545', fontSize: '1.5rem' }} />}
              count={6}
              label="High-Risk Alerts"
              color="#DC3545"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              icon={<Warning sx={{ color: '#FFC107', fontSize: '1.5rem' }} />}
              count={14}
              label="Open Issues"
              color="#FFC107"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              icon={<People sx={{ color: '#0D6EFD', fontSize: '1.5rem' }} />}
              count={3}
              label="Third-Party Reviews Pending"
              color="#0D6EFD"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <MetricCard
              icon={<CheckCircle sx={{ color: '#198754', fontSize: '1.5rem' }} />}
              count={85}
              label="Overall Risk Score"
              color="#198754"
            />
          </Grid>
        </Grid>

        {/* Main Content */}
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} sx={{ flex: 1 }}>
          <Grid item xs={12} lg={5}>
            <RiskHeatmap />
          </Grid>
          <Grid item xs={12} lg={7}>
            <Box sx={{ 
              display: 'flex', 
              gap: { xs: 2, sm: 3, md: 4 },
              height: '100%',
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
              <Box sx={{ flex: 1 }}>
                <AlertsTimeline />
              </Box>
              <Box sx={{ flex: 1 }}>
                <ActionItems />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard; 