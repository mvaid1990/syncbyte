import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage = '/images/hero.jpg',
  ctaText = 'Get a Free Demo',
  ctaLink = '/contact',
  secondaryCtaText = 'Explore Solutions',
  secondaryCtaLink = '/solutions',
  maxWidth = 'lg',
}) => {
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
      <Container maxWidth={maxWidth} sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
              }}
            >
              {title}
            </Typography>
            {subtitle && (
              <Typography
                variant="h5"
                component="p"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  fontWeight: 400,
                  maxWidth: '90%',
                }}
              >
                {subtitle}
              </Typography>
            )}
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href={ctaLink}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(255, 143, 0, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(255, 143, 0, 0.4)',
                  }
                }}
              >
                {ctaText}
              </Button>
              {secondaryCtaText && (
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  href={secondaryCtaLink}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    textTransform: 'none',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {secondaryCtaText}
                </Button>
              )}
            </Box>
          </Box>
          
          {backgroundImage && (
            <Box sx={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: 6,
                  width: '100%',
                  '&:hover img': {
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <Image
                  src={backgroundImage}
                  alt={title}
                  width={800}
                  height={600}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                />
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default PageHeader;
