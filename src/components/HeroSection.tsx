import { Box, Container, Typography, Button, Fade, Slide } from '@mui/material';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Security, Speed, Verified, TrendingUp } from '@mui/icons-material';

const rotatingContent = [
  {
    title: 'Advanced Security Solutions',
    subtitle: 'for the Modern World',
    description: 'Protect your business with our cutting-edge biometric security solutions. Experience seamless access control and advanced threat detection.',
    image: '/images/hero.jpg',
  },
  {
    title: 'Biometric Innovation',
    subtitle: 'Powered by AI',
    description: 'Next-generation facial recognition and fingerprint scanning technology. Secure your premises with intelligent automation.',
    image: '/images/products/face-recognition.jpg',
  },
  {
    title: 'Enterprise-Grade Protection',
    subtitle: 'Trusted Worldwide',
    description: 'Join 500+ companies securing their facilities with Syncbyte. Industry-leading reliability and 24/7 support.',
    image: '/images/about-hero.jpg',
  },
];

const stats = [
  { icon: Security, value: '500+', label: 'Clients Worldwide' },
  { icon: Speed, value: '<0.5s', label: 'Recognition Speed' },
  { icon: Verified, value: '99.9%', label: 'Accuracy Rate' },
  { icon: TrendingUp, value: '15+', label: 'Years Experience' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingContent.length);
        setFadeIn(true);
      }, 500);
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentContent = rotatingContent[currentIndex];
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'primary.main',
        color: 'common.white',
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.9) 0%, rgba(0, 60, 143, 0.9) 100%)',
          zIndex: 1,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Fade in={fadeIn} timeout={800}>
              <Box>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 1,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                  }}
                >
                  {currentContent.title}
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontWeight: 300,
                    mb: 3,
                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                    color: 'secondary.main',
                  }}
                >
                  {currentContent.subtitle}
                </Typography>
                <Typography
                  variant="h5"
                  component="p"
                  sx={{
                    mb: 4,
                    opacity: 0.9,
                    fontWeight: 400,
                    maxWidth: '90%',
                    lineHeight: 1.6,
                  }}
                >
                  {currentContent.description}
                </Typography>
              </Box>
            </Fade>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
                  boxShadow: '0 4px 14px rgba(255, 143, 0, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(255, 143, 0, 0.4)',
                  }
                }}
              >
                Get a Free Demo
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
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Explore Solutions
              </Button>
            </Box>
          </Box>
          
          <Box sx={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Fade in={fadeIn} timeout={1000}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                  '&:hover img': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Image
                  src={currentContent.image}
                  alt="Syncbyte Security Solutions"
                  width={800}
                  height={600}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.6s ease-in-out',
                  }}
                />
                {/* Animated overlay indicators */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: 1,
                  }}
                >
                  {rotatingContent.map((_, index) => (
                    <Box
                      key={index}
                      sx={{
                        width: index === currentIndex ? 40 : 12,
                        height: 12,
                        borderRadius: 6,
                        bgcolor: index === currentIndex ? 'secondary.main' : 'rgba(255,255,255,0.5)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        setFadeIn(false);
                        setTimeout(() => {
                          setCurrentIndex(index);
                          setFadeIn(true);
                        }, 300);
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Fade>
          </Box>
        </Box>

        {/* Animated Statistics */}
        <Slide direction="up" in={true} timeout={1000}>
          <Box
            sx={{
              mt: 8,
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Box
                  key={index}
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.15)',
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Icon sx={{ fontSize: 40, mb: 1, color: 'secondary.main' }} />
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 0.5,
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.9,
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Slide>
      </Container>
    </Box>
  );
}
