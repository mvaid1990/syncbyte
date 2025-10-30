import { useRouter } from 'next/router';
import { 
  Typography, 
  Container, 
  Box, 
  Button, 
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider,
  useTheme,
  alpha
} from '@mui/material';
import { 
  CheckCircle as CheckIcon,
  ArrowBack as ArrowBackIcon,
  ShoppingCart as CartIcon
} from '@mui/icons-material';
import Image from 'next/image';
import Layout from '../../components/Layout';

// Sample product data (in real app, this would come from API/database)
const productData: { [key: string]: any } = {
  '1': {
    id: 1,
    name: 'Syncbyte Pro X1',
    category: 'Biometric Devices',
    price: '$599',
    description: 'Advanced fingerprint scanner with AI-powered recognition technology for enterprise-level security.',
    longDescription: 'The Syncbyte Pro X1 represents the pinnacle of biometric security technology. Featuring advanced AI-powered recognition algorithms, this fingerprint scanner delivers unmatched accuracy and speed. Perfect for high-security environments, it combines cutting-edge hardware with intelligent software to provide seamless access control.',
    features: [
      'Fingerprint capacity: 10,000 users',
      'Recognition speed: <0.5 seconds',
      'False acceptance rate: <0.001%',
      'IP65 weatherproof rating',
      'Multi-language support',
      'USB and TCP/IP connectivity',
      'Built-in backup battery',
      'Tamper detection system'
    ],
    specifications: {
      'Sensor Type': 'Optical',
      'Resolution': '500 DPI',
      'Verification Speed': '<0.5 seconds',
      'Operating Temperature': '-20°C to 60°C',
      'Humidity': '20% to 80%',
      'Power Supply': 'DC 12V',
      'Dimensions': '180 x 135 x 45 mm',
      'Weight': '500g'
    },
    image: '/images/products/fingerprint-scanner.jpg',
    badge: 'Best Seller'
  },
  '2': {
    id: 2,
    name: 'FaceGuard 4K',
    category: 'Access Control',
    price: '$899',
    description: 'High-resolution facial recognition system with temperature screening capabilities.',
    longDescription: 'FaceGuard 4K combines advanced facial recognition with temperature screening in a single, elegant device. Perfect for the post-pandemic world, it ensures both security and health safety. The 4K camera provides crystal-clear image capture even in challenging lighting conditions.',
    features: [
      'Face capacity: 50,000 users',
      'Temperature detection (±0.3°C accuracy)',
      'Mask detection and recognition',
      'Touchless operation',
      '4K ultra-high definition camera',
      'Anti-spoofing technology',
      'Real-time alerts',
      'Cloud connectivity'
    ],
    specifications: {
      'Camera': '4K UHD',
      'Recognition Distance': '0.3m - 2m',
      'Recognition Speed': '<1 second',
      'Temperature Range': '30°C - 45°C',
      'Display': '8-inch touchscreen',
      'Storage': '128GB',
      'Network': 'WiFi, Ethernet',
      'Dimensions': '250 x 180 x 50 mm'
    },
    image: '/images/products/face-recognition.jpg',
    badge: 'New'
  },
  // Add more products as needed
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const theme = useTheme();

  const product = id ? productData[id as string] : null;

  if (!product) {
    return (
      <Layout>
        <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
          <Typography variant="h4">Product not found</Typography>
          <Button 
            startIcon={<ArrowBackIcon />}
            href="/products"
            sx={{ mt: 4 }}
          >
            Back to Products
          </Button>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Back Button */}
        <Button 
          startIcon={<ArrowBackIcon />}
          href="/products"
          sx={{ mb: 4 }}
        >
          Back to Products
        </Button>

        <Grid container spacing={6}>
          {/* Product Image */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 6,
                height: { xs: '400px', md: '500px' },
                bgcolor: alpha(theme.palette.primary.main, 0.05),
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
              />
              {product.badge && (
                <Chip
                  label={product.badge}
                  color="secondary"
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    fontWeight: 600,
                    fontSize: '1rem',
                    px: 2,
                    py: 3,
                  }}
                />
              )}
            </Box>
          </Grid>

          {/* Product Info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip label={product.category} color="primary" sx={{ mb: 2 }} />
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
              {product.name}
            </Typography>
            <Typography variant="h4" color="primary.main" sx={{ fontWeight: 700, mb: 3 }}>
              {product.price}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
              {product.longDescription}
            </Typography>

            <Box sx={{ my: 4 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<CartIcon />}
                href="/contact"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  mr: 2,
                }}
              >
                Request Quote
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="/contact"
                sx={{
                  px: 6,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                }}
              >
                Contact Sales
              </Button>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Key Features
            </Typography>
            <List dense>
              {product.features.slice(0, 4).map((feature: string, index: number) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <CheckIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        {/* Features & Specifications */}
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {/* All Features */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Complete Features
                </Typography>
                <List>
                  {product.features.map((feature: string, index: number) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Specifications */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                  Technical Specifications
                </Typography>
                <Box>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Grid container spacing={2}>
                        <Grid size={{ xs: 6 }}>
                          <Typography variant="body2" sx={{ fontWeight: 600 }}>
                            {key}
                          </Typography>
                        </Grid>
                        <Grid size={{ xs: 6 }}>
                          <Typography variant="body2" color="text.secondary">
                            {value as string}
                          </Typography>
                        </Grid>
                      </Grid>
                      {index < Object.entries(product.specifications).length - 1 && (
                        <Divider sx={{ mt: 2 }} />
                      )}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            mt: 8,
            p: 6,
            borderRadius: 4,
            bgcolor: 'primary.main',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
            Interested in {product.name}?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Contact our team for a personalized demo and pricing
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/contact"
            sx={{
              px: 6,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none',
            }}
          >
            Get in Touch
          </Button>
        </Box>
      </Container>
    </Layout>
  );
}
