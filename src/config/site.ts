export const siteConfig = {
  company: {
    name: 'Syncbyte Security',
    shortName: 'Syncbyte',
    tagline: 'Advanced Security Solutions',
    description: 'Syncbyte Security is an industry leader in advanced biometric security solutions, providing cutting-edge access control, time attendance, and identity management systems for businesses of all sizes. Our innovative technology ensures secure, reliable, and efficient security solutions tailored to your needs.',
    logo: '/images/logo.svg',
    logoDark: '/images/logo-dark.svg',
    favicon: '/favicon.ico',
    contact: {
      email: 'info@syncbytesecurity.com',
      phone: '+1 (800) 123-4567',
      tollFree: '1-800-SYNCBYTE',
      address: '123 Security Plaza, Suite 500, Tech City, TC 12345',
    },
    social: {
      facebook: 'https://facebook.com/syncbytesecurity',
      twitter: 'https://twitter.com/syncbytesecurity',
      linkedin: 'https://linkedin.com/company/syncbytesecurity',
      instagram: 'https://instagram.com/syncbytesecurity',
      youtube: 'https://youtube.com/syncbytesecurity',
    },
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products', subItems: [
      { name: 'Biometric Terminals', href: '/products#biometric-terminals' },
      { name: 'Access Control', href: '/products#access-control' },
      { name: 'Time & Attendance', href: '/products#time-attendance' },
      { name: 'Visitor Management', href: '/products#visitor-management' },
    ]},
    { name: 'Solutions', href: '/solutions', subItems: [
      { name: 'Enterprise Security', href: '/solutions/enterprise' },
      { name: 'SMB Solutions', href: '/solutions/smb' },
      { name: 'Government', href: '/solutions/government' },
      { name: 'Healthcare', href: '/solutions/healthcare' },
      { name: 'Education', href: '/solutions/education' },
    ]},
    { name: 'Industries', href: '/industries', subItems: [
      { name: 'Corporate', href: '/industries/corporate' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Education', href: '/industries/education' },
      { name: 'Retail', href: '/industries/retail' },
      { name: 'Manufacturing', href: '/industries/manufacturing' },
      { name: 'Hospitality', href: '/industries/hospitality' },
    ]},
    { name: 'Resources', href: '/resources', subItems: [
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Whitepapers', href: '/resources/whitepapers' },
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
    ]},
    { name: 'Support', href: '/support', subItems: [
      { name: 'Documentation', href: '/support/documentation' },
      { name: 'Downloads', href: '/support/downloads' },
      { name: 'Knowledge Base', href: '/support/knowledge-base' },
      { name: 'Contact Support', href: '/support/contact' },
    ]},
    { name: 'About Us', href: '/about', subItems: [
      { name: 'Our Story', href: '/about#story' },
      { name: 'Leadership', href: '/about#leadership' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Events', href: '/news' },
    ]},
    { name: 'Contact', href: '/contact' },
  ],
  products: [
    {
      id: 1,
      name: 'Syncbyte X1 Pro',
      description: 'Next-generation biometric terminal with multi-modal authentication and AI-powered recognition.',
      image: '/images/products/biometric-terminal.jpg',
      features: [
        'Multi-modal authentication (Face + Fingerprint + PIN)',
        '5-inch touchscreen display',
        'Bluetooth 5.0 & Wi-Fi connectivity',
        'IP67 weatherproof rating',
        '10,000+ fingerprint capacity',
        'Real-time alerts and monitoring'
      ],
      category: 'Biometric Terminals',
      price: '$499',
      specs: {
        'Dimensions': '145 x 145 x 65mm',
        'Weight': '650g',
        'Power': 'DC 12V/2A',
        'Operating Temperature': '-20°C to 60°C',
        'Humidity': '20% to 80% (non-condensing)'
      }
    },
    {
      id: 2,
      name: 'SecureAccess Enterprise',
      description: 'Cloud-based access control system with advanced security features and centralized management.',
      image: '/images/products/secure-access.jpg',
      features: [
        'Cloud-based management portal',
        'Multi-site support',
        'Real-time monitoring and alerts',
        'Mobile app access',
        'Integration with existing security systems',
        'Customizable access levels'
      ],
      category: 'Access Control',
      price: 'Contact for pricing',
      specs: {
        'Users': 'Unlimited',
        'Sites': 'Unlimited',
        'Mobile App': 'iOS & Android',
        'API Access': 'REST API available',
        'Compliance': 'GDPR, HIPAA, SOC 2'
      }
    },
    {
      id: 3,
      name: 'TimeTrack 360°',
      description: 'Comprehensive workforce management solution with advanced analytics and reporting.',
      image: '/images/products/timetrack.jpg',
      features: [
        'Biometric time tracking',
        'Automated payroll processing',
        'Mobile check-in/out',
        'Geofencing capabilities',
        'Custom report generation',
        'Overtime management'
      ],
      category: 'Time & Attendance',
      price: '$8.99/user/month',
      specs: {
        'Deployment': 'Cloud or On-premise',
        'Integration': 'AD, HRMS, Payroll',
        'Biometric Options': 'Fingerprint, Face, Card',
        'Mobile App': 'iOS & Android',
        'Support': '24/7 Premium Support'
      }
    },
    {
      id: 4,
      name: 'VisionGuard AI',
      description: 'AI-powered surveillance system with facial recognition and behavior analysis.',
      image: 'https://www.esslsecurity.com/wp-content/uploads/2023/05/visionguard-ai.jpg',
      features: [
        '4K resolution with night vision',
        'AI-powered object detection',
        'Face recognition database',
        'Real-time alerts',
        'Cloud storage & backup',
        'Smart search functionality'
      ],
      category: 'Video Surveillance',
      price: 'Contact for pricing',
      specs: {
        'Resolution': '4K Ultra HD',
        'Field of View': '110° wide angle',
        'Storage': 'Cloud & Local (up to 2TB)',
        'Connectivity': 'Wi-Fi & Ethernet',
        'Weatherproof': 'IP66 rated'
      }
    }
  ],
  features: [
    {
      title: 'AI-Powered Security',
      description: 'Leverage cutting-edge artificial intelligence for proactive threat detection and prevention.',
      icon: 'ai',
      gradient: 'from-blue-500 to-cyan-400',
      stats: '98% Accuracy'
    },
    {
      title: 'Cloud-Based Management',
      description: 'Access and control your security systems from anywhere with our intuitive cloud platform.',
      icon: 'cloud',
      gradient: 'from-purple-500 to-pink-500',
      stats: '99.9% Uptime'
    },
    {
      title: 'Multi-Modal Authentication',
      description: 'Combine fingerprint, face recognition, and mobile credentials for maximum security.',
      icon: 'fingerprint',
      gradient: 'from-amber-500 to-orange-500',
      stats: '3x More Secure'
    },
    {
      title: 'Seamless Integration',
      description: 'Easily integrate with your existing security infrastructure and business applications.',
      icon: 'sync_alt',
      gradient: 'from-green-500 to-emerald-500',
      stats: '50+ Integrations'
    },
  ],
  testimonials: [
    {
      quote: 'Syncbyte Security has transformed our access control system. The biometric devices are reliable and easy to use.',
      author: 'John Smith',
      position: 'IT Director, TechCorp',
    },
    {
      quote: 'Excellent service and support. The team at Syncbyte is knowledgeable and responsive to our needs.',
      author: 'Sarah Johnson',
      position: 'Operations Manager, SecureSystems Inc.',
    },
  ],
  partners: [
    { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
    { name: 'Dell', logo: '/images/partners/dell.png' },
    { name: 'Cisco', logo: '/images/partners/cisco.png' },
    { name: 'Honeywell', logo: '/images/partners/honeywell.png' },
  ],
} as const;
