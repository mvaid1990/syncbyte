const fs = require('fs').promises;
const path = require('path');
const { siteConfig } = require('../src/config/site');

const homepagePath = path.join(__dirname, '../src/pages/index.tsx');

const heroSection = `
// Hero Section Component
const HeroSection = () => {
  return (
    <Box 
      sx={{
        position: 'relative',
        bgcolor: 'primary.main',
        color: 'common.white',
        pt: { xs: 16, md: 20 },
        pb: { xs: 12, md: 16 },
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.9) 0%, rgba(0, 75, 160, 0.9) 100%)',
          zIndex: 1,
        }
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backgroundImage: 'url("/images/patterns/circuit-board.svg")',
          backgroundSize: 'cover',
          opacity: 0.1,
          zIndex: 2,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                lineHeight: 1.2,
              }}
            >
              {siteConfig.company.tagline}
            </Typography>
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
              {siteConfig.company.description}
            </Typography>
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
            
            {/* Trust indicators */}
            <Box sx={{ mt: 6, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', mr: 1 }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} sx={{ color: 'warning.main', fontSize: '1.2rem' }} />
                  ))}
                </Box>
                <Typography variant="body2">4.9/5 (1,200+ reviews)</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{
                  width: 24,
                  height: 24,
                  borderRadius: '50%',
                  bgcolor: 'success.main',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 1,
                }}>
                  <CheckIcon sx={{ color: 'common.white', fontSize: '1rem' }} />
                </Box>
                <Typography variant="body2">Trusted by 5,000+ businesses</Typography>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 6,
                '&:hover img': {
                  transform: 'scale(1.03)',
                },
              }}
            >
              <img
                src="/images/hero-dashboard-preview.png"
                alt="BioMax Security Dashboard Preview"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              {/* Floating elements */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  bgcolor: 'secondary.main',
                  color: 'common.white',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  boxShadow: 3,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <SecurityIcon sx={{ mr: 1 }} />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>AI-Powered Security</Typography>
              </Box>
            </Box>
            
            {/* Stats */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                mt: 4,
                '& > div': {
                  textAlign: 'center',
                  p: 2,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 2,
                  flex: 1,
                  mx: 1,
                  backdropFilter: 'blur(8px)',
                },
              }}
            >
              <div>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'secondary.main' }}>99.9%</Typography>
                <Typography variant="body2">Uptime</Typography>
              </div>
              <div>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'success.main' }}>24/7</Typography>
                <Typography variant="body2">Support</Typography>
              </div>
              <div>
                <Typography variant="h4" sx={{ fontWeight: 700, color: 'warning.main' }}>5,000+</Typography>
                <Typography variant="body2">Clients</Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
`;

const enhanceHomepage = async () => {
  try {
    // Read the current homepage content
    let content = await fs.readFile(homepagePath, 'utf-8');
    
    // Add necessary imports if they don't exist
    if (!content.includes('import StarIcon from')) {
      const importsToAdd = `
import StarIcon from '@mui/icons-material/Star';
import CheckIcon from '@mui/icons-material/Check';
import SecurityIcon from '@mui/icons-material/Security';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
`;
      
      // Add imports after the last import statement
      const lastImportIndex = content.lastIndexOf('import') + content.split('import').pop().indexOf(';') + 1;
      content = content.slice(0, lastImportIndex) + importsToAdd + content.slice(lastImportIndex);
    }
    
    // Add HeroSection component if it doesn't exist
    if (!content.includes('const HeroSection')) {
      // Find the main component's return statement
      const mainComponentMatch = content.match(/export default function (\w+)\(/);
      if (mainComponentMatch) {
        const componentName = mainComponentMatch[1];
        const componentStart = content.indexOf(`export default function ${componentName}(`);
        const componentEnd = content.indexOf('}', componentStart) + 1;
        
        // Get the component's return statement
        const returnStart = content.indexOf('return (', componentStart) + 'return ('.length;
        const returnEnd = content.lastIndexOf(')', componentEnd - 1);
        
        if (returnStart > 0 && returnEnd > returnStart) {
          const beforeReturn = content.slice(0, returnStart);
          const afterReturn = content.slice(returnEnd);
          
          // Insert the HeroSection component
          content = `${beforeReturn}
      <>
        <HeroSection />
        ${content.slice(returnStart, returnEnd).trim()}
      </>${afterReturn}`;
          
          // Add the HeroSection component definition before the main component
          const lastImportIndex = content.lastIndexOf('import') + content.split('import').pop().indexOf(';') + 1;
          content = content.slice(0, lastImportIndex) + '\n' + heroSection + '\n' + content.slice(lastImportIndex);
        }
      }
    }
    
    // Write the updated content back to the file
    await fs.writeFile(homepagePath, content);
    console.log('✅ Enhanced homepage with new hero section');
  } catch (error) {
    console.error('Error enhancing homepage:', error);
  }
};

enhanceHomepage();
