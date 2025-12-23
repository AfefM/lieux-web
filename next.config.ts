const nextConfig = {
  async redirects() {
    return [{ source: '/', destination: '/fr', permanent: true }];
  },
};