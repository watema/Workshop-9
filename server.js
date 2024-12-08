const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Sample data
let listings = [
    { id: 1, name: 'Cozy Cottage', location: 'Countryside', price: 100 },
    { id: 2, name: 'Modern Apartment', location: 'City Center', price: 150 }
];

// Get all listings
app.get('/api/listings', (req, res) => {
    res.json(listings);
});

// Get a single listing
app.get('/api/listings/:id', (req, res) => {
    const listing = listings.find(l => l.id === parseInt(req.params.id));
    if (!listing) return res.status(404).send('Listing not found');
    res.json(listing);
});

// Create a new listing
app.post('/api/listings', (req, res) => {
    const newListing = {
        id: listings.length + 1,
        name: req.body.name,
        location: req.body.location,
        price: req.body.price
    };
    listings.push(newListing);
    res.status(201).json(newListing);
});

// Update a listing
app.put('/api/listings/:id', (req, res) => {
    const listing = listings.find(l => l.id === parseInt(req.params.id));
    if (!listing) return res.status(404).send('Listing not found');

    listing.name = req.body.name;
    listing.location = req.body.location;
    listing.price = req.body.price;
    res.json(listing);
});

// Delete a listing
app.delete('/api/listings/:id', (req, res) => {
    const listingIndex = listings.findIndex(l => l.id === parseInt(req.params.id));
    if (listingIndex === -1) return res.status(404).send('Listing not found');

    const deletedListing = listings.splice(listingIndex, 1);
    res.json(deletedListing);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
