const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001; // Choose an available port

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// Mock data
const pages = [
  // Mock page data
  { id: 1, title: "Page 1" },
  { id: 2, title: "Page 2" },
  // Add more mock data as needed
];

app.use(express.json());

// API route to fetch blog
app.get("/api/categories", (req, res) => {
  const page = parseInt(req.query.page, 10);
  const pageSize = 10; // Adjust the page size as needed
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPages = pages.slice(startIndex, endIndex);
  res.json([
    {
      id: 1,
      name: "Tech",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2,
      name: "Nieuws",
      created_at: null,
      updated_at: null,
    },
    {
      id: 3,
      name: "Sports",
      created_at: null,
      updated_at: null,
    },
    {
      id: 4,
      name: "Lokaal",
      created_at: null,
      updated_at: null,
    },
  ]);
});

// API route to fetch blog
app.post("/api/posts", (req, res) => {
  res.json([]);
});

app.get("/api/posts", (req, res) => {
  const page = parseInt(req.query.page, 10);
  const pageSize = 10; // Adjust the page size as needed
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedPages = pages.slice(startIndex, endIndex);
  res.json({
    current_page: 1,
    data: [
      {
        id: 2289,
        created_at: "2023-10-17T20:25:20.000000Z",
        updated_at: "2023-10-17T20:25:20.000000Z",
        title:
          "South Asians in Football Weekly: Suliman, Hamid and Nabi make Pakistan World Cup qualifying history ",
        content:
          "South Asians in Football Weekly: Suliman, Hamid and Nabi make Pakistan World Cup qualifying history ",
        category_id: 3,
        img_url: "images/gWfqODqnqZMwM6qd6GjFnbXQbX9LODzyhMeC4ZAb.png",
        category: {
          id: 3,
          name: "Sports",
          created_at: null,
          updated_at: null,
        },
      },
      {
        id: 2288,
        created_at: "2023-10-17T20:20:25.000000Z",
        updated_at: "2023-10-17T20:20:25.000000Z",
        title: "dont do that",
        content: "don't do that ",
        category_id: 1,
        img_url: "images/PSxreK7NH3bZkEpJza0crQVIJaXFKv0C1NPqcvSC.png",
        category: {
          id: 1,
          name: "Tech",
          created_at: null,
          updated_at: null,
        },
      },
      {
        id: 2287,
        created_at: "2023-10-17T20:18:08.000000Z",
        updated_at: "2023-10-17T20:18:08.000000Z",
        title: "Northern Ireland vs Slovenia - Latest score",
        content: "Northern Ireland vs Slovenia - Latest score",
        category_id: 3,
        img_url: "images/61hJ0Y91ae44AD0B5URJale8vHtEzjthD01NwGN9.png",
        category: {
          id: 3,
          name: "Sports",
          created_at: null,
          updated_at: null,
        },
      },
      {
        id: 2286,
        created_at: "2023-10-17T20:16:17.000000Z",
        updated_at: "2023-10-17T20:16:17.000000Z",
        title:
          "Euro 2024 Qualifying: Results, tables and fixtures | England, Wales, Scotland, Republic of Ireland and Northern Ireland schedules",
        content:
          "England grouped with Italy, Ukraine, North Macedonia and Malta; Scotland face Spain and Norway in Group A; Republic of Ireland with Netherlands and France; Wales pooled with Croatia in Group D; Northern Ireland up against Denmark and Finland",
        category_id: 1,
        img_url: "images/kPZCQuHnPTP2XtslJzRr23PsBjjrX8E3Q89wjqzA.png",
        category: {
          id: 1,
          name: "Tech",
          created_at: null,
          updated_at: null,
        },
      },
    ],
    first_page_url: "https://frontend-case-api.sbdev.nl/api/posts?page=1",
    from: 1,
    last_page: 573,
    last_page_url: "https://frontend-case-api.sbdev.nl/api/posts?page=573",
    links: [
      {
        url: null,
        label: "pagination.previous",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=1",
        label: "1",
        active: true,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=2",
        label: "2",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=3",
        label: "3",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=4",
        label: "4",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=5",
        label: "5",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=6",
        label: "6",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=7",
        label: "7",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=8",
        label: "8",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=9",
        label: "9",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=10",
        label: "10",
        active: false,
      },
      {
        url: null,
        label: "...",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=572",
        label: "572",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=573",
        label: "573",
        active: false,
      },
      {
        url: "https://frontend-case-api.sbdev.nl/api/posts?page=2",
        label: "pagination.next",
        active: false,
      },
    ],
    next_page_url: "https://frontend-case-api.sbdev.nl/api/posts?page=2",
    path: "https://frontend-case-api.sbdev.nl/api/posts",
    per_page: "4",
    prev_page_url: null,
    to: 4,
    total: 2289,
  });
});

app.listen(port, () => {
  //console.log(`Express server is running on port ${port}`);
});

//export const server = app;
