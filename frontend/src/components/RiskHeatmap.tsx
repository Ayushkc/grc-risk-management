import { Box, Typography } from '@mui/material';

interface HeatmapCell {
  value: number;
  color: string;
}

const heatmapData: HeatmapCell[][] = [
  [
    { value: 1, color: '#54D62C' },
    { value: 2, color: '#FFC107' },
    { value: 3, color: '#FF4842' },
  ],
  [
    { value: 4, color: '#54D62C' },
    { value: 5, color: '#FFC107' },
    { value: 6, color: '#FF4842' },
  ],
  [
    { value: 7, color: '#54D62C' },
    { value: 8, color: '#FFC107' },
    { value: 9, color: '#FF4842' },
  ],
];

const impactLabels = ['Low', 'Medium', 'High'];
const likelihoodLabels = ['Low', 'Medium', 'High'];

export default function RiskHeatmap() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {/* Y-axis labels */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', py: 2 }}>
        <Typography variant="body2" color="text.secondary">
          High
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Medium
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Low
        </Typography>
      </Box>

      {/* Heatmap grid */}
      <Box sx={{ flex: 1 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
          {heatmapData.map((row, i) =>
            row.map((cell, j) => (
              <Box
                key={`${i}-${j}`}
                sx={{
                  width: 60,
                  height: 60,
                  bgcolor: cell.color,
                  borderRadius: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.8,
                  transition: 'opacity 0.2s',
                  '&:hover': {
                    opacity: 1,
                    cursor: 'pointer',
                  },
                }}
              />
            ))
          )}
        </Box>

        {/* X-axis labels */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          {likelihoodLabels.map((label) => (
            <Typography key={label} variant="body2" color="text.secondary">
              {label}
            </Typography>
          ))}
        </Box>

        {/* X-axis title */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center', mt: 1 }}
        >
          Impact
        </Typography>
      </Box>
    </Box>
  );
}
