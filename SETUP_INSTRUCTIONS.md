# Romantic Proposal Website - Setup Instructions

Welcome! This is a beautiful, romantic proposal website created for Khushi. Follow these instructions to add your personal images and music before deploying to GitHub.

## 🎵 Adding Background Music

### Option 1: Download from YouTube
1. Go to: https://youtu.be/1f18irP--O8
2. Use a YouTube to MP3 converter (like ytmp3.cc or y2mate.com)
3. Download the audio file
4. Rename it to `background-music.mp3`
5. Place it in: `public/audio/background-music.mp3`

### Option 2: Use Your Own Song
1. Get any romantic MP3 file you want
2. Rename it to `background-music.mp3`
3. Place it in: `public/audio/background-music.mp3`

**Important:** The file MUST be named exactly `background-music.mp3` and placed in the `public/audio/` folder.

---

## 📸 Adding Images

The website has multiple image placeholders. Add your photos to make it personal!

### Required Images:

#### **Home Page - Rose Petals (8 images)**
These appear on the rose petals that can be hovered over:
- `public/images/khushi-1.jpg` - Your Smile
- `public/images/khushi-2.jpg` - Your Eyes
- `public/images/khushi-3.jpg` - Your Laugh
- `public/images/khushi-4.jpg` - Your Voice (can be any photo)
- `public/images/khushi-5.jpg` - Your Heart
- `public/images/khushi-6.jpg` - Your Love
- `public/images/khushi-7.jpg` - Your Soul
- `public/images/khushi-8.jpg` - Your Beauty

#### **Celebration Screen (1 image)**
This appears when she says "Yes":
- `public/images/couple-photo.jpg` - A photo of both of you together (or your favorite photo)

#### **Memories Page (6 images)**
These appear in "The Day I Met You" section:
- `public/images/memory-1.jpg` - The Instagram Group Chat moment
- `public/images/memory-2.jpg` - Your First Voice Note
- `public/images/memory-3.jpg` - Our First Call
- `public/images/memory-4.jpg` - Sharing Songs & Dreams
- `public/images/memory-5.jpg` - Late Night Conversations
- `public/images/memory-6.jpg` - When I Knew (moment you realized you loved her)

### Image Guidelines:
- **Format:** JPG or JPEG (PNG also works)
- **Size:** Recommended 800x800 pixels or larger (square images work best)
- **Quality:** Use high-resolution photos for best results
- **Naming:** MUST match exactly the filenames above (case-sensitive)

---

## 🚀 GitHub Setup

### Before Pushing to GitHub:

1. **Add all your images** to `public/images/` folder
2. **Add your music** to `public/audio/` folder
3. The `.gitignore` file is already configured to NOT upload these personal files to GitHub

### What Gets Uploaded to GitHub:
✅ All code and components
✅ Empty placeholder folders
❌ Your personal images (private)
❌ Your music file (private)

### To Deploy After Adding Images:

```bash
# Install dependencies
npm install

# Test locally first
npm run dev

# Build for production
npm run build

# Commit and push to GitHub
git add .
git commit -m "Initial commit - Proposal website for Khushi"
git push origin main
```

---

## 🎨 Customization (Optional)

### Change Names or Text:
1. Open `src/components/LoadingScreen.tsx` to change loading messages
2. Open `src/components/HomePage.tsx` to edit the letter content
3. Open `src/components/MemoriesPage.tsx` to customize memories
4. Open `src/components/ReasonsPage.tsx` to edit the 100 reasons

### Change Colors:
The website uses rose/pink theme by default. To change:
- Edit Tailwind classes in any component file
- Look for `from-rose-`, `to-pink-`, `bg-rose-` etc.

---

## 📁 File Structure

```
project/
├── public/
│   ├── images/              # Your photos go here
│   │   ├── khushi-1.jpg     # Add these files
│   │   ├── khushi-2.jpg
│   │   └── ...
│   └── audio/               # Your music goes here
│       └── background-music.mp3  # Add this file
├── src/
│   ├── components/          # All website components
│   └── App.tsx              # Main app orchestrator
└── SETUP_INSTRUCTIONS.md    # This file
```

---

## ✨ Website Flow

1. **Loading Screen** - Beautiful rose bloom animation with messages
2. **Letter Opening** - Vintage letter that opens to reveal your message
3. **Proposal Questions** - 4 funny/romantic questions (No button runs away!)
4. **Celebration** - Confetti and ring animation when she says Yes
5. **Home Page** - Rose with photo petals, love letter, Bengali quotes
6. **Memories Page** - Your love story timeline
7. **100 Reasons Page** - All the reasons you love her

---

## 🎯 Quick Checklist Before Launching

- [ ] Downloaded/added background music to `public/audio/background-music.mp3`
- [ ] Added 8 photos to `public/images/khushi-1.jpg` through `khushi-8.jpg`
- [ ] Added couple photo to `public/images/couple-photo.jpg`
- [ ] Added 6 memory photos to `public/images/memory-1.jpg` through `memory-6.jpg`
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Ready to push to GitHub!

---

## ❤️ Tips for Best Results

1. **Test First:** Always run `npm run dev` and check everything works locally
2. **High Quality:** Use the best quality photos you have of Khushi
3. **Variety:** Use different photos that show different moments/expressions
4. **Music:** Choose a song that's meaningful to both of you
5. **Mobile:** The website is fully responsive - test on your phone too!

---

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Make sure files are in `public/images/` folder
- Check file format is JPG, JPEG, or PNG

**Music not playing?**
- Check file is named `background-music.mp3`
- Make sure it's in `public/audio/` folder
- Try clicking the play button in the bottom-right corner
- Some browsers block autoplay - user interaction may be needed

**Build errors?**
- Run `npm install` first
- Check that all component files are present
- Make sure Node.js version is 18 or higher

---

## 🎉 Ready to Deploy!

Once everything is set up and tested, your romantic proposal website is ready to sweep Khushi off her feet!

Good luck, Krishna! May she say YES! 💕

---

**Note:** Remember, the images and audio files won't be uploaded to GitHub (they're in .gitignore for privacy). If you want to share the complete website with images, you'll need to deploy it to a hosting service and upload the assets there.
