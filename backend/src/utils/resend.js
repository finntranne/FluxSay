import { Resend } from "resend";
import { ENV } from "../utils/env.js";

const resendClient = new Resend(ENV.RESEND_API_KEY);

const sender = {
  email: ENV.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME,
};

export { resendClient, sender };
