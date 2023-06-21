/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcPlugins: [["next-superjson-plugin", {}]]
  },
  images: {
    domains: [
      'res.cloudinary.com', 
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      "misc.scdn.co", "i.scdn.co", "geo-media.beatsource.com", "i1.sndcdn.com",
      "media.pitchfork.com", "seed-mix-image.spotifycdn.com",
      "tjnfrzwjpkxeotlsebhz.supabase.co"
    ]
  }
}

module.exports = nextConfig
