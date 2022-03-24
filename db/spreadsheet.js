import { google } from 'googleapis';

export const getSpreadSheetData = async () => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './credentials.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = '14LyXK_UgNmBzrGNYI5Nmr6501E8FKSmewlRsyjZTGRI';

    const metaData = await googleSheets.spreadsheets.get({
      auth,
      spreadsheetId,
    });

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: 'Sheet1',
    });

    const rowData = getRows.data.values;

    return rowData;
  } catch (err) {
    console.error(err);
  }
};
