import { AppBar, Toolbar, Container, Button, Box, useScrollTrigger, Slide } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Header() {
  return (
    <HideOnScroll>
      <AppBar 
        position="sticky" 
        elevation={0}
        sx={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          py: 1
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Link href="/" passHref>
                <Box 
                  component="a" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    textDecoration: 'none',
                    '&:hover': { opacity: 0.9 }
                  }}
                >
                  <Image 
                    src="/images/logo.svg" 
                    alt="Syncbyte Security" 
                    width={180} 
                    height={50} 
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              </Link>
            </Box>
            
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
              <Button 
                component={Link} 
                href="/products" 
                color="inherit" 
                sx={{ 
                  color: 'text.primary',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Products
              </Button>
              <Button 
                component={Link} 
                href="/solutions" 
                color="inherit" 
                sx={{ 
                  color: 'text.primary',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Solutions
              </Button>
              <Button 
                component={Link} 
                href="/industries" 
                color="inherit" 
                sx={{ 
                  color: 'text.primary',
                  fontWeight: 500,
                  '&:hover': { color: 'primary.main' }
                }}
              >
                Industries
              </Button>
              <Button 
                variant="contained" 
                color="primary" 
                component={Link} 
                href="/contact"
                sx={{ 
                  ml: 2,
                  px: 3,
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(21, 101, 192, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(21, 101, 192, 0.4)',
                  }
                }}
              >
                Get a Demo
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
