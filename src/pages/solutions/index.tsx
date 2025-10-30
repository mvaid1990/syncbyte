import { useState } from 'react';
import { 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Box, 
  Button, 
  Grid,
  CardMedia,
  CardActions,
  useTheme,
  alpha
} from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import Image from 'next/image';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';

// Types
interface Solution {
  id: number;
  title: string;
  description: string;
  category: string;
  features: string[];
  image: string;
}

// Sample Solutions Data
const solutions: Solution[] = [
  {
    id: 1,
    title: 'Biometric Access Control',
    description: 'Advanced fingerprint and facial recognition systems for secure access management.',
    category: 'Access Control',
    features: [
      'Multi-factor authentication',
      'Real-time monitoring',
      'Cloud-based management',
      'Integration with existing systems'
    ],
    image: '/images/solutions/access-control.jpg'
  },
  {
    id: 2,
    title: 'Time & Attendance',
    description: 'Automated time tracking and attendance management with biometric verification.',
    category: 'Workforce Management',
    features: [
      'Accurate time tracking',
      'Automated reports',
      'Payroll integration',
      'Mobile app support'
    ],
    image: '/images/solutions/time-attendance.jpg'
  },
  {
    id: 3,
    title: 'Video Surveillance',
    description: 'High-definition video surveillance systems with AI-powered analytics.',
    category: 'Surveillance',
    features: [
      '4K video quality',
      'Motion detection',
      'Cloud storage',
      'Mobile viewing'
    ],
    image: '/images/solutions/video-surveillance.jpg'
  },
  {
    id: 4,
    title: 'Visitor Management',
    description: 'Streamline visitor check-in and enhance security with digital visitor management.',
    category: 'Access Control',
    features: [
      'Digital check-in',
      'Badge printing',
      'Pre-registration',
      'Host notifications'
    ],
    image: '/images/solutions/visitor-management.jpg'
  },
  {
    id: 5,
    title: 'Door Locks & Controllers',
    description: 'Smart door locks and access controllers for enhanced physical security.',
    category: 'Access Control',
    features: [
      'Remote control',
      'Multiple access methods',
      'Audit trails',
      'Emergency override'
    ],
    image: '/images/solutions/door-locks.jpg'
  },
  {
    id: 6,
    title: 'Security Analytics',
    description: 'AI-powered security analytics for threat detection and prevention.',
    category: 'Analytics',
    features: [
      'Real-time alerts',
      'Behavioral analysis',
      'Predictive insights',
      'Custom dashboards'
    ],
    image: '/images/solutions/security-analytics.jpg'
  }
];

export default function Solutions() {
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <PageHeader
        title="Security Solutions"
        subtitle="Comprehensive security solutions designed to protect your business with cutting-edge technology"
        backgroundImage="/images/solutions-hero.jpg"
        ctaText="Get a Free Consultation"
        ctaLink="/contact"
        secondaryCtaText="View Products"
        secondaryCtaLink="/products"
      />

      {/* Solutions Grid Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 700,
                color: 'primary.main',
                mb: 2
              }}
            >
              Our Solutions
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto' }}
            >
              Explore our comprehensive range of security solutions tailored to meet your organization's unique needs
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {solutions.map((solution) => (
              <Grid key={solution.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  onMouseEnter={() => setHoveredCard(solution.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[12],
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      paddingTop: '60%',
                      overflow: 'hidden',
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                    }}
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        transform: hoveredCard === solution.id ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        bgcolor: 'primary.main',
                        color: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      {solution.category}
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h3"
                      sx={{ 
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary'
                      }}
                    >
                      {solution.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.7 }}
                    >
                      {solution.description}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mt: 2, mb: 0 }}>
                      {solution.features.slice(0, 3).map((feature, index) => (
                        <Typography
                          key={index}
                          component="li"
                          variant="body2"
                          sx={{
                            mb: 0.5,
                            color: 'text.secondary',
                            fontSize: '0.875rem',
                          }}
                        >
                          {feature}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>

                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      size="small"
                      endIcon={<ArrowForwardIcon />}
                      href="/contact"
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        '&:hover': {
                          bgcolor: alpha(theme.palette.primary.main, 0.1),
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.95) 0%, rgba(0, 60, 143, 0.95) 100%)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Secure Your Business?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Get in touch with our security experts to find the perfect solution for your needs
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              href="/contact"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 2,
                boxShadow: '0 4px 14px rgba(255, 143, 0, 0.3)',
                '&:hover': {
                  boxShadow: '0 6px 20px rgba(255, 143, 0, 0.4)',
                },
              }}
            >
              Request a Demo
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href="/products"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: 2,
                borderWidth: 2,
                borderColor: 'white',
                '&:hover': {
                  borderWidth: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              View All Products
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
