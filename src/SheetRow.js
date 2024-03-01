export class SheetRow {
  constructor(
    date,
    iD,
    cardId,
    cardStart,
    cardDue,
    cardShortUrl,
    cardName,
    cardDesc,
    boardName,
    calendarItemType
  ) {
    this.date = date;
    this.iD = iD;
    this.cardId = cardId;
    this.cardStart = cardStart
      ? new Date(cardStart)
      : undefined;
    this.cardDue = cardDue ? new Date(cardDue) : undefined;
    this.cardShortUrl = cardShortUrl;
    this.cardName = cardName;
    this.cardDesc = cardDesc;
    this.boardName = boardName;
    this.calendarItemType = calendarItemType;
  }
}
