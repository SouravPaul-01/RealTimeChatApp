import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "User not logged in" });
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decode) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.id = decode.userId; // Make sure this is correctly set
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Authentication failed" });
  }
};
export default isAuthenticated;
