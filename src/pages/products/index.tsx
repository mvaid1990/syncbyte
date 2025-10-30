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
  alpha,
  Chip,
  Tabs,
  Tab
} from '@mui/material';
import { 
  ArrowForward as ArrowForwardIcon,
  Fingerprint as FingerprintIcon,
  Videocam as VideocamIcon,
  Lock as LockIcon,
  AccessTime as AccessTimeIcon
} from '@mui/icons-material';
import Image from 'next/image';
import Layout from '../../components/Layout';
import PageHeader from '../../components/PageHeader';

// Types
interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  features: string[];
  image: string;
  badge?: string;
}

// Sample Products Data
const products: Product[] = [
  {
    id: 1,
    name: 'Syncbyte Pro X1',
    description: 'Advanced fingerprint scanner with AI-powered recognition technology.',
    category: 'Biometric Devices',
    price: '$599',
    features: [
      'Fingerprint capacity: 10,000',
      'Recognition speed: <0.5s',
      'False acceptance rate: <0.001%',
      'IP65 weatherproof'
    ],
    image: '/images/products/fingerprint-scanner.jpg',
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'FaceGuard 4K',
    description: 'High-resolution facial recognition system with temperature screening.',
    category: 'Access Control',
    price: '$899',
    features: [
      'Face capacity: 50,000',
      'Temperature detection',
      'Mask detection',
      'Touchless operation'
    ],
    image: '/images/products/face-recognition.jpg',
    badge: 'New'
  },
  {
    id: 3,
    name: 'SecureView Pro',
    description: '4K IP camera with AI analytics and night vision capabilities.',
    category: 'Surveillance',
    price: '$449',
    features: [
      '4K Ultra HD resolution',
      'AI motion detection',
      'Night vision up to 30m',
      'Cloud storage support'
    ],
    image: '/images/products/ip-camera.jpg'
  },
  {
    id: 4,
    name: 'TimeTrack Elite',
    description: 'Biometric time attendance system with cloud synchronization.',
    category: 'Time & Attendance',
    price: '$399',
    features: [
      'Multi-biometric support',
      'Real-time sync',
      'Payroll integration',
      'Mobile app included'
    ],
    image: '/images/products/time-attendance.jpg'
  },
  {
    id: 5,
    name: 'SmartLock Pro',
    description: 'Intelligent door lock with multiple access methods.',
    category: 'Access Control',
    price: '$299',
    features: [
      'Fingerprint + PIN + Card',
      'Remote access',
      'Auto-lock function',
      'Battery backup'
    ],
    image: '/images/products/smart-lock.jpg'
  },
  {
    id: 6,
    name: 'AccessGate X2',
    description: 'Full-height turnstile with biometric integration.',
    category: 'Physical Security',
    price: '$2,499',
    features: [
      'Stainless steel construction',
      'Biometric integration',
      'Emergency release',
      'Visitor management'
    ],
    image: '/images/products/turnstile.jpg'
  }
];

export default function Products() {
  const theme = useTheme();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Biometric Devices', 'Access Control', 'Surveillance', 'Time & Attendance', 'Physical Security'];

  const handleCategoryChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedCategory(newValue);
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <PageHeader
        title="Our Products"
        subtitle="Discover our comprehensive range of security products designed with cutting-edge technology"
        backgroundImage="/images/products-hero.jpg"
        ctaText="Request a Quote"
        ctaLink="/contact"
        secondaryCtaText="View Solutions"
        secondaryCtaLink="/solutions"
      />

      {/* Products Grid Section */}
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
              Featured Products
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
            >
              Industry-leading security products trusted by businesses worldwide
            </Typography>

            {/* Category Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
              <Tabs
                value={selectedCategory}
                onChange={handleCategoryChange}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                  '& .MuiTab-root': {
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '1rem',
                    minWidth: 120,
                  },
                  '& .Mui-selected': {
                    color: 'primary.main',
                  },
                }}
              >
                {categories.map((category) => (
                  <Tab key={category} label={category} value={category} />
                ))}
              </Tabs>
            </Box>
          </Box>

          <Grid container spacing={4}>
            {filteredProducts.map((product) => (
              <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  onMouseEnter={() => setHoveredCard(product.id)}
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
                      paddingTop: '75%',
                      overflow: 'hidden',
                      bgcolor: alpha(theme.palette.primary.main, 0.05),
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out',
                        transform: hoveredCard === product.id ? 'scale(1.1)' : 'scale(1)',
                      }}
                    />
                    {product.badge && (
                      <Chip
                        label={product.badge}
                        color="secondary"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          fontWeight: 600,
                          boxShadow: 2,
                        }}
                      />
                    )}
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: 16,
                        bgcolor: 'rgba(255, 255, 255, 0.95)',
                        px: 2,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'primary.main',
                      }}
                    >
                      {product.category}
                    </Box>
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', mb: 2 }}>
                      <Typography 
                        variant="h5" 
                        component="h3"
                        sx={{ 
                          fontWeight: 600,
                          color: 'text.primary'
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'primary.main',
                          fontWeight: 700,
                        }}
                      >
                        {product.price}
                      </Typography>
                    </Box>
                    
                    <Typography 
                      variant="body2" 
                      color="text.secondary"
                      sx={{ mb: 2, lineHeight: 1.7 }}
                    >
                      {product.description}
                    </Typography>

                    <Box component="ul" sx={{ pl: 2, mt: 2, mb: 0 }}>
                      {product.features.slice(0, 3).map((feature, index) => (
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

                  <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      fullWidth
                      endIcon={<ArrowForwardIcon />}
                      href={`/products/${product.id}`}
                      sx={{
                        fontWeight: 600,
                        textTransform: 'none',
                      }}
                    >
                      View Details
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      fullWidth
                      href="/contact"
                      sx={{
                        fontWeight: 600,
                        textTransform: 'none',
                      }}
                    >
                      Get Quote
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
            Need Help Choosing?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Our security experts are here to help you find the perfect products for your needs
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
              Talk to an Expert
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href="/solutions"
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
              View Solutions
            </Button>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}
