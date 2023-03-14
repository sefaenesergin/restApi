import { Request, Response } from "express";
import { request } from "http";
import { createSession } from "../service/session.service";
import { validatePassword } from "../service/user.service";

export async function createUserSessionHandler(req: Request, res: Response) {
  //validate the user's password
  const user = await validatePassword(req.body);

  if (!user) {
    return res.status(401).send("Invalid email or password");
  }
  //create a session

  const session = createSession(user._id, req.get("user-agent") || "");
  //create an access token

  //create a refresh token
  //return access & refresh tokens
}