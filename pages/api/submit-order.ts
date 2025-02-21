import type { NextApiRequest, NextApiResponse } from "next"
import { google } from "googleapis"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" })
  }

  try {
    const { name, products, address, contact, date } = req.body

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || ""),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const sheets = google.sheets({ version: "v4", auth })

    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    const today = new Date().toISOString().split("T")[0]

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${today}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, products, address, contact, date]],
      },
    })

    res.status(200).json({ message: "Order submitted successfully" })
  } catch (error) {
    console.error("Error submitting order:", error)
    res.status(500).json({ message: "Error submitting order" })
  }
}

