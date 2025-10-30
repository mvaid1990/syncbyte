import { createCanvas } from 'canvas';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');
const productsDir = path.join(imagesDir, 'products');

// Create a placeholder image
async function createPlaceholderImage(filename, text, width = 800, height = 600) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background color
  ctx.fillStyle = '#f0f4f8';
  ctx.fillRect(0, 0, width, height);
  
  // Border
  ctx.strokeStyle = '#1976d2';
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, width - 2, height - 2);
  
  // Text
  ctx.fillStyle = '#1976d2';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw title
  ctx.font = 'bold 40px Arial';
  ctx.fillText(text, width / 2, height / 2 - 30);
  
  // Draw dimensions
  ctx.font = '16px Arial';
  ctx.fillText(`${width} × ${height}`, width / 2, height / 2 + 30);
  
  // Save the image
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
  const filePath = path.join(productsDir, filename);
  await fs.writeFile(filePath, buffer);
  console.log(`Created placeholder: ${filePath}`);
}

// Main function
async function generatePlaceholders() {
  try {
    // Create directories if they don't exist
    await fs.mkdir(productsDir, { recursive: true });
    
    // Generate placeholder images
    await createPlaceholderImage('biometric-terminal.jpg', 'Biometric Terminal');
    await createPlaceholderImage('secure-access.jpg', 'Secure Access');
    await createPlaceholderImage('timetrack.jpg', 'TimeTrack 360°');
    
    console.log('✅ Placeholder images generated successfully!');
  } catch (error) {
    console.error('Error generating placeholders:', error);
    process.exit(1);
  }
}

// Run the script
generatePlaceholders();
