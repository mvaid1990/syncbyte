import React from 'react';
import { Box, Typography, Container, Grid, useTheme, alpha } from '@mui/material';
import Image from 'next/image';

type Customer = {
  id: number;
  name: string;
  logo: string;
  description: string;
};

const customers: Customer[] = [
  {
    id: 1,
    name: 'Enterprise Corp',
    logo: '/images/customers/enterprise-corp.svg',
    description: 'Fortune 500 company using our security solutions for global operations.'
  },
  {
    id: 2,
    name: 'Tech Innovators',
    logo: '/images/customers/tech-innovators.svg',
    description: 'Leading tech firm securing their R&D facilities with our solutions.'
  },
  {
    id: 3,
    name: 'Global Finance',
    logo: '/images/customers/global-finance.svg',
    description: 'Financial institution ensuring compliance and security with our systems.'
  },
  {
    id: 4,
    name: 'Healthcare Plus',
    logo: '/images/customers/healthcare-plus.svg',
    description: 'Healthcare provider protecting sensitive patient data with our solutions.'
  },
];

const CustomerSection = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: alpha(theme.palette.primary.main, 0.03),
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Trusted by Industry Leaders
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            maxWidth="800px"
            mx="auto"
          >
            Join thousands of businesses that trust Syncbyte Security to protect their most valuable assets.
          </Typography>
        </Box>

        <Box 
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 4,
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {customers.map((customer) => (
            <Box key={customer.id} sx={{ width: '100%' }}>
              <Box 
                sx={{ 
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 2,
                  backgroundColor: 'background.paper',
                  boxShadow: 1,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 3,
                  },
                }}
              >
                <Box 
                  sx={{ 
                    width: 120, 
                    height: 80, 
                    position: 'relative',
                    mb: 3,
                    '& img': {
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      opacity: 0.8,
                      transition: 'all 0.3s ease',
                    },
                    '&:hover img': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                    },
                  }}
                >
                  <Image 
                    src={customer.logo} 
                    alt={customer.name} 
                    fill 
                    sizes="(max-width: 600px) 100vw, 50vw"
                  />
                </Box>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  gutterBottom
                  sx={{ fontWeight: 600 }}
                >
                  {customer.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {customer.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default CustomerSection;
