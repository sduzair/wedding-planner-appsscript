import { SheetRow } from './SheetRow';

const SHEET_ID = '1R6ksk0qj4X6olJ2-FTnNy8T3i32OIB7P_HF_VWdOVls';
const CALENDAR_ID =
  '1c5cd5fb07f2a7bb928b1de70f8284b2617e2492c087094d42885d31c9d58e98@group.calendar.google.com';

function log() {
  SpreadsheetApp.openById(SHEET_ID)
    .getSheets()[0]
    .getRange(
      2,
      1,
      SpreadsheetApp.openById(SHEET_ID).getSheets()[0].getLastRow(),
      SpreadsheetApp.openById(SHEET_ID).getSheets()[0].getLastColumn()
    )
    .getValues()
    .filter((row) => !row.every((e) => e === ''))
    .map((nonEmptyRow) => new SheetRow(...nonEmptyRow))
    .forEach((sheetRow, i) => {
      console.log('🚀 ~ .forEach ~ sheetRow:', sheetRow);
      // Calendar event
      if (sheetRow.cardStart && sheetRow.cardDue) {
        console.log('This is a Calendar Event');
        if (i === 0) {
          const createdEvent = CalendarApp.getOwnedCalendarById(
            CALENDAR_ID
          ).createEvent(
            sheetRow.cardName,
            sheetRow.cardStart,
            sheetRow.cardDue,
            {
              description: `Description: ${sheetRow.cardDesc}\nBoard: ${sheetRow.boardName}\nLink: ${sheetRow.cardShortUrl}`,
            }
          );
          console.log('🚀 ~ .forEach ~ createdEvent:', createdEvent);
        }
      }
      if (!sheetRow.cardStart && sheetRow.cardDue) {
        console.log('This is a Calendar Task');
      }
      if (sheetRow.cardStart && !sheetRow.cardDue) {
        console.log('This is a Calendar Task - All Day');
      }
    });
}

global.log = log;
