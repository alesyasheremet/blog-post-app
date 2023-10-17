const express = require('express');
const app = express();
const port = 3001; // Choose an available port

// Mock data
const pages = [
  // Mock page data
  { id: 1, title: 'Page 1' },
  { id: 2, title: 'Page 2' },
  // Add more mock data as needed
];

app.use(express.json());

// API route to fetch pages
app.get('/api/pages', (req, res) => {
  const page = parseInt(req.query.page, 10);
  const pageSize = 10; // Adjust the page size as needed
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPages = pages.slice(startIndex, endIndex);

  res.json({
    pages: paginatedPages,
    totalPages: Math.ceil(pages.length / pageSize),
  });
});

app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
