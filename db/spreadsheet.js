import { google } from 'googleapis';

export const getSpreadSheetData = async (sheetId) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './credentials.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = '14LyXK_UgNmBzrGNYI5Nmr6501E8FKSmewlRsyjZTGRI';

    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: `${sheetId}`,
    });

    const rowData = getRows.data.values;

    return rowData;
  } catch (err) {
    console.error(err);
  }
};

export const addSpreadSheetData = async (stationIds) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: './credentials.json',
      scopes: 'https://www.googleapis.com/auth/spreadsheets',
    });

    const client = await auth.getClient();

    const googleSheets = google.sheets({ version: 'v4', auth: client });

    const spreadsheetId = '14LyXK_UgNmBzrGNYI5Nmr6501E8FKSmewlRsyjZTGRI';

    await googleSheets.spreadsheets.values.append({
      auth,
      spreadsheetId,
      range: 'TubeLines!C:C',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: stationIds,
      },
    });

    console.log('working');
  } catch (err) {
    console.error(err);
  }
};
