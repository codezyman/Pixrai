# Stripe Payment Gateway Setup Guide

## Environment Variables Required

### Server (.env file in server directory)
```
PORT=4000
MONGODB_URI=mongodb://localhost:27017/imagify
JWT_SECRET=your_jwt_secret_key_here
CLIPDROP_API_KEY=your_clipdrop_api_key_here
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
```

### Client (.env file in client directory)
```
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
```
