import { Box, Typography, Tooltip, Paper } from '@mui/material';

interface HeatmapCell {
  color: string;
  label: string;
  description: string;
  hasRisk?: boolean;
  riskColor?: string;
}

const heatmapData: HeatmapCell[][] = [
  [
    { 
      color: '#E8F5E9',
      label: 'Low Risk',
      description: 'Minimal impact, easily manageable'
    },
    { 
      color: '#FFF8E1',
      label: 'Medium Risk',
      description: 'Moderate impact, requires attention'
    },
    { 
      color: '#FFEBEE',
      label: 'High Risk',
      description: 'Significant impact, immediate action required',
      hasRisk: true,
      riskColor: '#FF4842'
    },
  ],
  [
    { 
      color: '#E8F5E9',
      label: 'Low Risk',
      description: 'Minimal impact, easily manageable'
    },
    { 
      color: '#FFF8E1',
      label: 'Medium Risk',
      description: 'Moderate impact, requires attention',
      hasRisk: true,
      riskColor: '#FFC107'
    },
    { 
      color: '#FFEBEE',
      label: 'High Risk',
      description: 'Significant impact, immediate action required',
      hasRisk: true,
      riskColor: '#FF4842'
    },
  ],
  [
    { 
      color: '#E8F5E9',
      label: 'Low Risk',
      description: 'Minimal impact, easily manageable'
    },
    { 
      color: '#FFF8E1',
      label: 'Medium Risk',
      description: 'Moderate impact, requires attention'
    },
    { 
      color: '#FFEBEE',
      label: 'High Risk',
      description: 'Significant impact, immediate action required'
    },
  ],
];

const impactLabels = ['High', 'Medium', 'Low'];
const likelihoodLabels = ['High', 'Medium', 'Low'];

export default function RiskHeatmap() {
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 3,
        borderRadius: '24px',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        background: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
      }}
    >
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Risk Heatmap
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Y-axis labels */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: 1.5,
          minWidth: '40px',
          position: 'relative',
          marginRight: '8px'
        }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ 
              position: 'absolute',
              left: -40,
              top: '50%',
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
              fontWeight: 500
            }}
          >
            Impact
          </Typography>
          {impactLabels.map((label) => (
            <Typography 
              key={label}
              variant="body2" 
              color="text.secondary"
              sx={{ 
                fontWeight: 500,
                textAlign: 'right',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end'
              }}
            >
              {label}
            </Typography>
          ))}
        </Box>

        {/* Heatmap grid */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: 1.5,
            position: 'relative'
          }}>
            {heatmapData.map((row, i) =>
              row.map((cell, j) => (
                <Tooltip 
                  key={`${i}-${j}`}
                  title={
                    <Box sx={{ p: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        {cell.label}
                      </Typography>
                      <Typography variant="caption">
                        {cell.description}
                      </Typography>
                    </Box>
                  }
                  arrow
                >
                  <Box
                    sx={{
                      width: '100%',
                      aspectRatio: '1/1',
                      bgcolor: cell.hasRisk ? cell.riskColor : cell.color,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0.8,
                      transition: 'all 0.2s',
                      position: 'relative',
                      '&:hover': {
                        opacity: 1,
                        cursor: 'pointer',
                        transform: 'scale(1.05)',
                        boxShadow: `0 0 20px ${cell.hasRisk ? cell.riskColor : cell.color}40`,
                      },
                    }}
                  />
                </Tooltip>
              ))
            )}
          </Box>

          {/* X-axis labels */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            mt: 2,
            px: 1
          }}>
            {likelihoodLabels.map((label) => (
              <Typography 
                key={label} 
                variant="body2" 
                color="text.secondary"
                sx={{ fontWeight: 500 }}
              >
                {label}
              </Typography>
            ))}
          </Box>

          {/* X-axis title */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ 
              textAlign: 'center', 
              mt: 1,
              fontWeight: 500
            }}
          >
            Likelihood
          </Typography>
        </Box>
      </Box>

      {/* Legend */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: 2, 
        mt: 3,
        flexWrap: 'wrap'
      }}>
        {['Low Risk', 'Medium Risk', 'High Risk'].map((label, index) => (
          <Box 
            key={label}
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1 
            }}
          >
            <Box
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                bgcolor: index === 0 ? '#E8F5E9' : index === 1 ? '#FFF8E1' : '#FFEBEE',
              }}
            />
            <Typography variant="caption" color="text.secondary">
              {label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}
