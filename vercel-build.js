const { execSync } = require('child_process');

try {
  // Run prisma generate during the build
  execSync('npx prisma generate', { stdio: 'inherit' });

  // Add any other build commands you need here

} catch (error) {
  console.error('Error during build:', error);
  process.exit(1);
}
