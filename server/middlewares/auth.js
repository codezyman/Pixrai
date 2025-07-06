import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  // Debug: Log all headers
  console.log("Request Headers:", req.headers);

  let token = req.headers.token || req.query.token;
  if (!token && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1];
    }
  }

  // Debug: Log the extracted token
  console.log("Extracted token:", token);
  // Debug: Log JWT_SECRET presence
  console.log("JWT_SECRET present:", !!process.env.JWT_SECRET);

  if (!token) {
    return res.json({ success: false, message: "Not Authorized. Login Again" });
  }

  try {
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET is not defined in environment variables.");
      return res.json({ success: false, message: "Internal Server Error" });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      // Ensure req.body is defined
      req.body = req.body || {};
      req.body.userId = tokenDecode.id;
      next();
    } else {
      return res.json({
        success: false,
        message: "Not Authorized. Login First",
      });
    }
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.json({ success: false, message: "Not Authorized. Login First" });
  }
};

export default userAuth;
