// import jwt from "jsonwebtoken";

// export const verifyToken = (req) => {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     return { error: "Unauthenticated", status: 401 };
//   }

//   try {
//     // Verify the token
//     const user = jwt.verify(token, process.env.JWT_KEY);

//     return { user }; // Return the verified user
//   } catch (err) {
//     console.error("JWT Verification Error:", process.env.NODE_ENV === 'development' ? err : 'An error occurred during token verification');
    
//     // Handle specific errors more granularly
//     if (err.name === "TokenExpiredError") {
//       return { error: "Token expired", status: 403 };
//     }
    
//     return { error: "Invalid or expired token", status: 403 };
//   }
// }
 
//  export const generateToken = (res,useId) => {
// d
// }



