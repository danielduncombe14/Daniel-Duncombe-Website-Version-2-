# Favicon Setup - From Boardrooms to Backroads Logo

## Files Created

1. **`src/app/icon.tsx`** - Generates the 32x32 favicon dynamically
2. **`src/app/apple-icon.tsx`** - Generates the 180x180 Apple touch icon
3. **`public/favicon.svg`** - SVG version of your logo
4. **`public/favicon.ico`** - Placeholder ICO file (needs replacement)

## How It Works

Next.js 14+ automatically detects these special files:
- `icon.tsx` → generates `/icon.png` at 32x32
- `apple-icon.tsx` → generates `/apple-icon.png` at 180x180

The browser will automatically use these icons based on device/context.

## Production Recommendation

For the best quality across all devices, I recommend:

1. **Use a favicon generator service:**
   - Go to https://realfavicongenerator.net/
   - Upload your high-resolution logo image
   - Download the generated package
   
2. **Replace `public/favicon.ico`** with the generated ICO file
   - This provides support for older browsers

3. **Optional:** Add additional sizes if needed:
   - 192x192 for Android
   - 512x512 for PWA
   
## Current Setup

✅ Browser tab icon (favicon)
✅ Apple touch icon (when saved to home screen)
✅ Modern browsers (PNG with transparency)
✅ Fallback for older browsers (ICO)

## Testing

After deployment, test the favicon by:
1. Opening the site in a new browser tab
2. Checking the browser tab icon
3. Saving to home screen on mobile devices
4. Testing in different browsers (Chrome, Firefox, Safari, Edge)

## Brand Colors Used

- **Navy Blue (#0d1321)**: Background, primary dark color
- **Steel Blue (#1a3a52)**: Briefcase color
- **Olive Green (#4a5f3a)**: Backpack color
- **Brand Orange (#D1824F)**: Accent color

These match your existing theme system.
