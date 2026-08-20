import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

// Read the built index.html
const indexHtmlPath = path.join(root, 'dist', 'index.html');
const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// A simple manual extraction of the posts from the raw TSX file (since it contains JSX which is hard to require in raw Node)
// For each post, we'll extract slug, title, and the first image.
const postsContent = fs.readFileSync(path.join(root, 'src', 'data', 'blogPosts.tsx'), 'utf8');

const posts = [];
const slugRegex = /slug:\s*"([^"]+)"/g;
const matches = [...postsContent.matchAll(slugRegex)];

for (let i = 0; i < matches.length; i++) {
  const match = matches[i];
  const slug = match[1];
  
  // Find the title for this slug
  const titleMatch = postsContent.substring(match.index).match(/title:\s*"([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : 'QuantivaX Blog';

  // Extract content for this post to find its first image
  const nextMatch = matches[i + 1];
  const nextSlugIndex = nextMatch ? nextMatch.index : postsContent.length;
  const thisPostContent = postsContent.substring(match.index, nextSlugIndex);

  let imageUrl = '/thumbnail.png'; // default
  const imgMatch = thisPostContent.match(/<img\s+[^>]*src=\{([a-zA-Z0-9_]+)\}/);
  if (imgMatch) {
    const imgVarName = imgMatch[1];
    const urlMatch = postsContent.match(new RegExp(`const ${imgVarName} = "([^"]+)"`));
    if (urlMatch) {
      imageUrl = urlMatch[1];
    }
  }

  // Prepend domain if available in Vercel environment
  const host = process.env.VERCEL_PROJECT_PRODUCTION_URL 
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` 
    : (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '');
  
  const fullImageUrl = host ? `${host}${imageUrl}` : imageUrl;
  
  posts.push({ slug, title, imageUrl: fullImageUrl });
}

// Generate an HTML file for each post
const blogDir = path.join(root, 'dist', 'blog');
if (!fs.existsSync(blogDir)) {
  fs.mkdirSync(blogDir, { recursive: true });
}

for (const post of posts) {
  let customHtml = indexHtml;
  
  // Replace OG tags
  // Replace title
  customHtml = customHtml.replace(/<title>.*?<\/title>/g, `<title>${post.title} - QuantivaX</title>`);
  customHtml = customHtml.replace(/<meta property="og:title" content=".*?" \/>/g, `<meta property="og:title" content="${post.title}" />`);
  customHtml = customHtml.replace(/<meta name="twitter:title" content=".*?" \/>/g, `<meta name="twitter:title" content="${post.title}" />`);
  
  // Replace image
  customHtml = customHtml.replace(/<meta property="og:image" content=".*?" \/>/g, `<meta property="og:image" content="${post.imageUrl}" />`);
  customHtml = customHtml.replace(/<meta name="twitter:image" content=".*?" \/>/g, `<meta name="twitter:image" content="${post.imageUrl}" />`);
  
  // Write to dist/blog/[slug].html
  // Also dist/blog/[slug]/index.html so Vercel can serve it
  const postDir = path.join(blogDir, post.slug);
  if (!fs.existsSync(postDir)) {
    fs.mkdirSync(postDir, { recursive: true });
  }
  fs.writeFileSync(path.join(postDir, 'index.html'), customHtml);
  fs.writeFileSync(path.join(blogDir, `${post.slug}.html`), customHtml);
}

console.log(`Generated ${posts.length} dynamic OG HTML files for blog posts.`);
