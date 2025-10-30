import { 
  Typography, 
  Container, 
  Box, 
  Grid,
  Card,
  CardContent,
  useTheme,
  alpha
} from '@mui/material';
import { 
  Security as SecurityIcon,
  EmojiEvents as AwardIcon,
  People as PeopleIcon,
  TrendingUp as GrowthIcon
} from '@mui/icons-material';
import Image from 'next/image';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const stats = [
  { icon: <PeopleIcon />, value: '500+', label: 'Happy Clients', image: '/images/stats-clients.jpg' },
  { icon: <SecurityIcon />, value: '10K+', label: 'Installations', image: '/images/stats-installations.jpg' },
  { icon: <AwardIcon />, value: '15+', label: 'Years Experience', image: '/images/stats-experience.jpg' },
  { icon: <GrowthIcon />, value: '99%', label: 'Client Satisfaction', image: '/images/stats-satisfaction.jpg' },
];

const values = [
  {
    title: 'Innovation',
    description: 'We constantly push the boundaries of security technology to deliver cutting-edge solutions.',
    icon: '🚀',
  },
  {
    title: 'Reliability',
    description: 'Our systems are built to perform flawlessly, ensuring your security is never compromised.',
    icon: '🛡️',
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our products and services.',
    icon: '⭐',
  },
  {
    title: 'Customer Focus',
    description: 'Your success is our priority. We work closely with you to meet your unique needs.',
    icon: '🤝',
  },
];

export default function About() {
  const theme = useTheme();

  return (
    <Layout>
      {/* Hero Section */}
      <PageHeader
        title="About Syncbyte Security"
        subtitle="Leading the future of biometric security solutions with innovation, reliability, and excellence"
        backgroundImage="/images/about-hero.jpg"
        ctaText="Get in Touch"
        ctaLink="/contact"
        secondaryCtaText="View Products"
        secondaryCtaLink="/products"
      />

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid key={index} size={{ xs: 6, md: 3 }}>
                <Card
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                    transition: 'transform 0.3s ease-in-out',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: '120px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={stat.image}
                      alt={stat.label}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'rgba(21, 101, 192, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 2,
                          borderRadius: '50%',
                          bgcolor: 'rgba(255, 255, 255, 0.2)',
                          color: 'white',
                        }}
                      >
                        {stat.icon}
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
                Our Story
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Founded in 2009, Syncbyte Security has been at the forefront of biometric security innovation. 
                What started as a small team of passionate engineers has grown into a leading provider of 
                advanced security solutions trusted by businesses worldwide.
              </Typography>
              <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Our mission is simple: to make the world more secure through innovative biometric technology. 
                We believe that security should be seamless, reliable, and accessible to organizations of all sizes.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                Today, we serve over 500 clients across various industries, from small businesses to large 
                enterprises, helping them protect their assets, employees, and data with state-of-the-art 
                security solutions.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: 6,
                  height: { xs: '300px', md: '400px' },
                }}
              >
                <Image
                  src="/images/about-team.jpg"
                  alt="Our Team"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main' }}>
              Our Values
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto' }}>
              The principles that guide everything we do
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Typography variant="h2" sx={{ mb: 2 }}>
                    {value.icon}
                  </Typography>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                    {value.description}
                  </Typography>
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
            Join Our Growing Family
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Partner with us to secure your business with the best biometric solutions
          </Typography>
        </Container>
      </Box>
    </Layout>
  );
}
