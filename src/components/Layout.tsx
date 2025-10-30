import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Button, 
  Container, 
  CssBaseline, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Toolbar, 
  Typography, 
  useTheme,
  useMediaQuery,
  Stack,
  styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const drawerWidth = 280;

interface Props {
  children: React.ReactNode;
  window?: () => Window;
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// Styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&.scrolled': {
    background: 'rgba(26, 35, 126, 0.98)',
    backdropFilter: 'blur(10px)',
    padding: '0.5rem 0',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '0.95rem',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&.active': {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    fontWeight: 600,
  },
}));

export default function Layout({ children, window }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Handle scroll effect
  useEffect(() => {
    if (typeof globalThis.window === 'undefined') return;
    
    const handleScroll = () => {
      setScrolled(globalThis.window.scrollY > 10);
    };
    
    globalThis.window.addEventListener('scroll', handleScroll);
    return () => {
      globalThis.window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set active link based on current path
  useEffect(() => {
    if (typeof globalThis.window !== 'undefined') {
      setActiveLink(globalThis.window.location.pathname);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        color: 'text.primary',
      }}
      onClick={handleDrawerToggle}
    >
      <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Image
          src="/images/logo.svg"
          alt="Syncbyte Security"
          width={150}
          height={45}
          style={{ objectFit: 'contain' }}
        />
      </Box>
      <Box sx={{ overflowY: 'auto', flexGrow: 1, p: 2 }}>
        {navItems.map((item) => (
          <ListItem 
            key={item.name}
            disablePadding 
            sx={{ 
              display: 'block',
              mb: 1,
              '&:last-child': { mb: 0 }
            }}
          >
            <ListItemButton 
              href={item.href}
              selected={activeLink === item.href}
              sx={{
                borderRadius: 1,
                '&.Mui-selected': {
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
              }}
            >
              <ListItemText 
                primary={item.name} 
                primaryTypographyProps={{
                  fontWeight: activeLink === item.href ? 600 : 'normal',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>
      <Box sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider' }}>
        <Button 
          fullWidth 
          variant="contained" 
          color="secondary" 
          href="/contact"
          sx={{ mb: 1 }}
        >
          Contact Sales
        </Button>
        <Button 
          fullWidth 
          variant="outlined" 
          color="primary" 
          href="/contact"
        >
          Request Demo
        </Button>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Head>
        <title>Syncbyte Security - Advanced Security Solutions</title>
        <meta name="description" content="Advanced biometric security solutions for modern businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Navigation */}
      <StyledAppBar 
        position="sticky" 
        elevation={0}
        className={scrolled ? 'scrolled' : ''}
      >
        <Container maxWidth="xl">
          <Toolbar 
            disableGutters 
            sx={{ 
              py: scrolled ? 0.5 : 1.5,
              transition: 'all 0.3s ease',
            }}
          >
            {/* Mobile menu button */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleDrawerToggle}
                color="inherit"
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo */}
            <Box 
              component="a" 
              href="/" 
              sx={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
                mr: { xs: 'auto', md: 4 },
              }}
            >
              <Image
                src="/images/logo.svg"
                alt="Syncbyte Security"
                width={scrolled ? 140 : 160}
                height={scrolled ? 42 : 48}
                style={{ 
                  objectFit: 'contain',
                  transition: 'all 0.3s ease',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Box>

            {/* Desktop Navigation */}
            <Box sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 1,
            }}>
              {navItems.map((item) => (
                <NavButton
                  key={item.name}
                  href={item.href}
                  className={activeLink === item.href ? 'active' : ''}
                >
                  {item.name}
                </NavButton>
              ))}
            </Box>

            {/* Action Buttons */}
            <Box sx={{ 
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 2,
              ml: 2
            }}>
              <Button 
                variant="outlined" 
                color="inherit"
                href="/contact"
                sx={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Request Demo
              </Button>
              <Button 
                variant="contained" 
                color="secondary" 
                href="/contact"
                sx={{
                  fontWeight: 600,
                  textTransform: 'none',
                  boxShadow: '0 4px 14px rgba(255, 152, 0, 0.4)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(255, 152, 0, 0.5)',
                  },
                }}
              >
                Contact Sales
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
      </Box>

      <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'white', py: 6, mt: 'auto' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ mb: { xs: 4, md: 0 } }}>
              <Image
                src="/images/logo.svg"
                alt="Syncbyte Security"
                width={150}
                height={45}
                style={{ 
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  marginBottom: '1rem'
                }}
              />
              <Typography variant="body2" sx={{ maxWidth: '300px', opacity: 0.8 }}>
                Advanced biometric security solutions for modern businesses
              </Typography>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>Quick Links</Typography>
              <Stack spacing={1}>
                {navItems.slice(0, 4).map((item) => (
                  <Link key={item.name} href={item.href} style={{ color: 'inherit', textDecoration: 'none' }}>
                    <Typography variant="body2" sx={{ opacity: 0.8, '&:hover': { opacity: 1 } }}>
                      {item.name}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Box>
            
            <Box>
              <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>Contact Us</Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                123 Security Street
                <br />
                Tech City, TC 12345
                <br />
                Phone: +1 (555) 123-4567
                <br />
                Email: info@syncbytesecurity.com
              </Typography>
            </Box>
          </Box>
          
          <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © {new Date().getFullYear()} Syncbyte Security. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
