define(['ojs/ojcore', 'knockout', 'jquery', 'ais', 'ds', 'jet-composites/filter-table/loader'],
  function(oj, ko, $, ais, ds) {

    function Book(author, title, genre, about) {
      this.author = author;
      this.title = title;
      this.genre = genre;
      this.about = about;
    }

    function DashboardViewModel() {
      var self = this;
      // check ds is initialized
      self.books = ko.observable([]);
      // for web component pattern
      // data service delivers for filter-table component --- data prop requirements

      $.getJSON("http://peanut-library-api.herokuapp.com/api/v1/books", (allData) => {
        let allBooks = allData.books;
        var mappedTasks = $.map(allBooks, (book) => {
          console.log(book);
          return new Book(book.author, book.bookName, book.genre, book.about);
        });
        self.books(mappedTasks);
      });

      self.handleAttached = function(info) {
        // Implement if needed
      };


      self.handleBindingsApplied = function(info) {
        // Implement if needed

      };


      self.handleDetached = function(info) {
        // Implement if needed

      };
    }

    /*
     * Returns a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.  Return an instance of the ViewModel if
     * only one instance of the ViewModel is needed.
     */
    return new DashboardViewModel();
  });
