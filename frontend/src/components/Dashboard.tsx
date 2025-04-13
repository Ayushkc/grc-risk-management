import { 
  Box, 
  Grid, 
  Paper, 
  Typography, 
  InputBase, 
  IconButton
} from '@mui/material';
import { CheckCircle } from 'lucide-react';
import RiskHeatmap from './RiskHeatmap';
import AlertsTimeline from './AlertsTimeline';
import ActionItems from './ActionItems';
import { Error, Warning, People, Search as SearchIcon } from '@mui/icons-material';

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
              icon={<CheckCircle className="w-6 h-6 text-[#198754]" />}
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