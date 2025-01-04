import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (response, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_KEY, {
    expiresIn: "7d",
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token;
};
