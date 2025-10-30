import { useState } from 'react';
import { 
  Typography, 
  Container, 
  Box, 
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  useTheme,
  alpha
} from '@mui/material';
import { 
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon
} from '@mui/icons-material';
import Image from 'next/image';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

const contactInfo = [
  {
    icon: <PhoneIcon />,
    title: 'Phone',
    details: ['+1 (555) 123-4567', '+1 (555) 123-4568'],
    color: '#1565C0',
  },
  {
    icon: <EmailIcon />,
    title: 'Email',
    details: ['info@biomaxsecurity.com', 'support@biomaxsecurity.com'],
    color: '#FF9800',
  },
  {
    icon: <LocationIcon />,
    title: 'Address',
    details: ['123 Security Street', 'Tech City, TC 12345'],
    color: '#1565C0',
  },
  {
    icon: <TimeIcon />,
    title: 'Business Hours',
    details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
    color: '#FF9800',
  },
];

export default function Contact() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHeader
        title="Get in Touch"
        subtitle="Have questions? We're here to help. Reach out to our team for expert guidance on security solutions"
        backgroundImage="/images/contact-hero.jpg"
        ctaText="Call Us Now"
        ctaLink="tel:+15551234567"
        secondaryCtaText="View Products"
        secondaryCtaLink="/products"
      />

      {/* Contact Info Cards */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {contactInfo.map((info, index) => (
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
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      bgcolor: alpha(info.color, 0.1),
                      color: info.color,
                      mb: 2,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {info.title}
                  </Typography>
                  {info.details.map((detail, idx) => (
                    <Typography key={idx} variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                      {detail}
                    </Typography>
                  ))}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            {/* Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', mb: 2 }}>
                Send Us a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                Fill out the form below and our team will get back to you within 24 hours.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      sx={{
                        px: 6,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        textTransform: 'none',
                        borderRadius: 2,
                        boxShadow: '0 4px 14px rgba(21, 101, 192, 0.3)',
                        '&:hover': {
                          boxShadow: '0 6px 20px rgba(21, 101, 192, 0.4)',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Map/Image */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Card sx={{ height: '100%', minHeight: '500px' }}>
                <Box
                  sx={{
                    position: 'relative',
                    height: '100%',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src="/images/contact-hero.jpg"
                    alt="Contact Us"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      bgcolor: 'rgba(21, 101, 192, 0.9)',
                      color: 'white',
                      p: 3,
                    }}
                  >
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                      Visit Our Office
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Schedule a visit to our headquarters and see our security solutions in action.
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, color: 'primary.main', textAlign: 'center', mb: 6 }}>
            Frequently Asked Questions
          </Typography>

          <Grid container spacing={3}>
            {[
              {
                q: 'What are your response times?',
                a: 'We typically respond to all inquiries within 24 hours during business days.',
              },
              {
                q: 'Do you offer on-site consultations?',
                a: 'Yes, we provide free on-site consultations to assess your security needs.',
              },
              {
                q: 'What industries do you serve?',
                a: 'We serve various industries including corporate offices, healthcare, education, retail, and manufacturing.',
              },
              {
                q: 'Do you provide installation services?',
                a: 'Yes, we offer professional installation and ongoing support for all our products.',
              },
            ].map((faq, index) => (
              <Grid key={index} size={{ xs: 12 }}>
                <Card sx={{ p: 3 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {faq.q}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {faq.a}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
