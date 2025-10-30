import { promises as fs } from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create necessary directories
const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');
const productsDir = path.join(imagesDir, 'products');

// Product images to download
const productImages = [
  {
    url: 'https://www.esslsecurity.com/wp-content/uploads/2023/05/essl-x1-pro-biometric-terminal.jpg',
    filename: 'biometric-terminal.jpg'
  },
  {
    url: 'https://www.esslsecurity.com/wp-content/uploads/2023/05/secureaccess-enterprise.jpg',
    filename: 'secure-access.jpg'
  },
  {
    url: 'https://www.esslsecurity.com/wp-content/uploads/2023/05/timetrack-360.jpg',
    filename: 'timetrack.jpg'
  }
];

// Download a file from URL
async function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, async (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: Status ${response.statusCode}`));
        return;
      }
      
      try {
        const chunks = [];
        for await (const chunk of response) {
          chunks.push(chunk);
        }
        const buffer = Buffer.concat(chunks);
        await fs.writeFile(filepath, buffer);
        console.log(`Downloaded: ${url} -> ${filepath}`);
        resolve(true);
      } catch (err) {
        reject(err);
      }
    }).on('error', (err) => {
      console.error(`Error downloading ${url}:`, err.message);
      reject(err);
    });
  });
}

// Main function
async function setupImages() {
  try {
    // Create directories if they don't exist
    await fs.mkdir(productsDir, { recursive: true });
    console.log('Created directories');

    // Download product images
    for (const { url, filename } of productImages) {
      const filePath = path.join(productsDir, filename);
      try {
        await downloadFile(url, filePath);
      } catch (error) {
        console.error(`Failed to download ${url}:`, error.message);
      }
    }

    console.log('✅ Image setup complete!');
  } catch (error) {
    console.error('Error setting up images:', error);
    process.exit(1);
  }
}

// Run the script
setupImages();
