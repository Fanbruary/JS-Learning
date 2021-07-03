const Book = class {
  constructor(name, author, year, language, type) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.language = language;
    this.type = type;
  }
  change_name(new_name) {
    this.name = new_name;
  }
  change_author(new_author) {
    this.author = new_author;
  }
};

export default Book;
