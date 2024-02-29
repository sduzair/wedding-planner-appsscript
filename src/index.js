function log() {
  SpreadsheetApp.openById('1R6ksk0qj4X6olJ2-FTnNy8T3i32OIB7P_HF_VWdOVls')
    .getSheets()[0]
    .getRange(
      2,
      1,
      SpreadsheetApp.openById('1R6ksk0qj4X6olJ2-FTnNy8T3i32OIB7P_HF_VWdOVls').getSheets()[0].getLastRow(),
      SpreadsheetApp.openById('1R6ksk0qj4X6olJ2-FTnNy8T3i32OIB7P_HF_VWdOVls').getSheets()[0].getLastColumn()
    )
    .getValues()
    .filter((row) => !row.every((e) => e === ''))
    .forEach((row) => {
      console.log('🚀 ~ log ~ row:', row);
    });
}

global.log = log;
