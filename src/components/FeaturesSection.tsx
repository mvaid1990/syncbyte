import React from 'react';
import { Box, Typography, Container, Grid, useTheme, alpha } from '@mui/material';
import { 
  Security as SecurityIcon,
  Fingerprint as FingerprintIcon,
  CloudQueue as CloudIcon,
  Analytics as AnalyticsIcon,
  Devices as DevicesIcon,
  Support as SupportIcon
} from '@mui/icons-material';

type Feature = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    id: 1,
    icon: <FingerprintIcon fontSize="large" />,
    title: 'Biometric Authentication',
    description: 'Advanced fingerprint, facial, and iris recognition for secure access control.'
  },
  {
    id: 2,
    icon: <SecurityIcon fontSize="large" />,
    title: 'Enterprise Security',
    description: 'End-to-end encryption and multi-factor authentication for maximum protection.'
  },
  {
    id: 3,
    icon: <CloudIcon fontSize="large" />,
    title: 'Cloud Integration',
    description: 'Seamless integration with your existing cloud infrastructure and services.'
  },
  {
    id: 4,
    icon: <AnalyticsIcon fontSize="large" />,
    title: 'Real-time Analytics',
    description: 'Comprehensive monitoring and reporting tools for security insights.'
  },
  {
    id: 5,
    icon: <DevicesIcon fontSize="large" />,
    title: 'Cross-Platform',
    description: 'Works across all devices and platforms with consistent performance.'
  },
  {
    id: 6,
    icon: <SupportIcon fontSize="large" />,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services.'
  },
];

const FeaturesSection = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Powerful Features
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            maxWidth="800px"
            mx="auto"
          >
            Discover how our comprehensive security solutions can protect your business
          </Typography>
        </Box>

        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 4,
            width: '100%',
          }}
        >
          {features.map((feature) => (
            <Box key={feature.id} sx={{ width: '100%' }}>
              <Box 
                sx={{ 
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                    borderColor: 'primary.main',
                    backgroundColor: alpha(theme.palette.primary.main, 0.02),
                  },
                }}
              >
                <Box 
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    color: 'primary.main',
                    backgroundColor: alpha(theme.palette.primary.main, 0.1),
                    '& svg': {
                      fontSize: '2rem',
                    },
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography 
                  variant="h5" 
                  component="h3" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    color: 'text.primary',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
