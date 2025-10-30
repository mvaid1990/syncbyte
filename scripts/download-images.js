import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs/promises';
import https from 'https';
import path from 'path';
import { promisify } from 'util';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import site config using dynamic import
const { siteConfig } = await import('../src/config/site.js');

const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const exists = promisify(fs.exists);

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images/products');

// List of image URLs to download
const imageUrls = [
  'https://www.esslsecurity.com/wp-content/uploads/2023/05/essl-x1-pro-biometric-terminal.jpg',
  'https://www.esslsecurity.com/wp-content/uploads/2023/05/secureaccess-enterprise.jpg',
  'https://www.esslsecurity.com/wp-content/uploads/2023/05/timetrack-360.jpg',
  // Add more image URLs as needed
];

// Download a single file
const downloadFile = async (url, filepath) => {
  if (await exists(filepath)) {
    console.log(`File already exists: ${filepath}`);
    return true;
  }

  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`Downloaded: ${url} -> ${filepath}`);
          resolve(true);
        });
      } else {
        console.error(`Failed to download ${url}: Status ${response.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err.message);
      resolve(false);
    });
  });
};

// Main function to download all images
const downloadAllImages = async () => {
  try {
    // Create images directory if it doesn't exist
    if (!(await exists(imagesDir))) {
      await mkdir(imagesDir, { recursive: true });
      console.log(`Created directory: ${imagesDir}`);
    }

    // Download each image
    const results = await Promise.all(
      imageUrls.map(async (url, index) => {
        const filename = `product-${index + 1}${path.extname(url).split('?')[0]}`;
        const filepath = path.join(imagesDir, filename);
        const success = await downloadFile(url, filepath);
        return { url, filename, success };
      })
    );

    // Generate image mapping for the site config
    const imageMapping = results.reduce((acc, { url, filename, success }, index) => {
      if (success) {
        acc[url] = `/images/products/${filename}`;
      }
      return acc;
    }, {});

    console.log('\nImage mapping for site config:');
    console.log(JSON.stringify(imageMapping, null, 2));

    // Update site config with local image paths
    if (Object.keys(imageMapping).length > 0) {
      const siteConfigPath = path.join(__dirname, '../src/config/site.ts');
      let configContent = fs.readFileSync(siteConfigPath, 'utf8');
      
      // Replace image URLs with local paths
      Object.entries(imageMapping).forEach(([url, localPath]) => {
        configContent = configContent.replace(
          new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
          localPath
        );
      });
      
      // Write updated config back to file
      await writeFile(siteConfigPath, configContent);
      console.log('\n✅ Updated site config with local image paths');
    }

    console.log('\n✅ Image download complete!');
  } catch (error) {
    console.error('Error downloading images:', error);
    process.exit(1);
  }
};

// Run the script
downloadAllImages();
