import { Box, Typography } from '@mui/material';
import { Security as SecurityIcon } from '@mui/icons-material';

export default function RiskGuardLogo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <SecurityIcon sx={{ fontSize: 32, color: '#3366FF' }} />
      <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
        RiskGuard
      </Typography>
    </Box>
  );
} 