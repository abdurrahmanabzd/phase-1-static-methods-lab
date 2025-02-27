class Formatter {
  //add static methods here

  
    static capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  
    static sanitize(string) {
      return string.replace(/[^A-Za-z0-9 '-]/g, '');
    }
  
    static titleize(string) {
      const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
      const words = string.split(" ");
      const capitalizedWords = words.map((word, index) => {
        if (index === 0 || !exceptions.includes(word)) {
          return this.capitalize(word);
        } else {
          return word;
        }
      });
      return capitalizedWords.join(" ");
    }
  }
  

