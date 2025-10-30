import * as React from 'react';
import { Box, Container, useTheme, Typography, Button, Grid } from '@mui/material';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Layout from '../components/Layout';

// Dynamically import components with no SSR
const HeroSection = dynamic(() => import('../components/HeroSection'), { ssr: false });
const FeaturesSection = dynamic(() => import('../components/FeaturesSection'), { ssr: false });
const CustomerSection = dynamic(() => import('../components/CustomerSection'), { ssr: false });

// Create a consistent section container component
const Section = ({ children, bgColor = 'background.default' }: { 
  children: React.ReactNode; 
  bgColor?: string;
}) => (
  <Box 
    component="section" 
    sx={{ 
      py: { xs: 8, md: 12 },
      backgroundColor: bgColor,
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Container maxWidth="lg">
      {children}
    </Container>
  </Box>
);

export default function Home() {
  const theme = useTheme();

  return (
    <Layout>
      <Head>
        <title>Syncbyte Security | Advanced Security Solutions</title>
        <meta name="description" content="Advanced biometric security solutions for modern businesses" />
      </Head>
      
      <HeroSection />
      
      <FeaturesSection />
      
      <CustomerSection />
      
      {/* CTA Section with Image */}
      <Section bgColor={theme.palette.background.paper}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontWeight: 700,
                color: 'primary.main',
                mb: 3,
              }}
            >
              Ready to Secure Your Business?
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ mb: 4, lineHeight: 1.7 }}
            >
              Get in touch with our security experts to find the perfect solution for your needs. 
              We offer free consultations and customized security assessments.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large" 
                color="primary"
                href="/contact"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  borderRadius: 2,
                  fontWeight: 600,
                }}
              >
                Contact Sales
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                color="primary"
                href="/products"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  borderRadius: 2,
                  fontWeight: 600,
                }}
              >
                View Products
              </Button>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 6,
                height: { xs: '300px', md: '400px' },
                width: '100%',
              }}
            >
              <Image
                src="/images/cta-section.jpg"
                alt="Secure Your Business"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </Grid>
        </Grid>
      </Section>
    </Layout>
  );
}
