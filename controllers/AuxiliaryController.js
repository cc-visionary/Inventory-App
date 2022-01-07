const auxiliaryController = {

  /**
   * convertDate
   * 
   * Converts a Date object to its String counterpart in the format 'yyyy-mm-dd'
   * @param {*} date 
   * @returns String 'yyyy-mm-dd'
   */
  convertDateDashed: function(date) {
      year = date.getFullYear() 
      month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
      day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()
      date = year+'-'+month+'-'+day;

      return date;
  },

  /**
   * convertDate2
   * 
   * Converts a Date object to its String counterpart in the format 'month dd, yyyy'
   * @param {*} date 
   * @returns String 'month dd, yyyy'
   */
  convertDateString: function(date) {
      const months = ["January", "February", "March", "April", "May", "June", 
                          "July", "August", "September", "October", "November", "December"];

      date =  months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
      return date;
  },
}

module.exports = auxiliaryController;