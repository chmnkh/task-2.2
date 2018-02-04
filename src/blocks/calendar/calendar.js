class Calendar {
  constructor(elem, id) {
    this._id = id;
    this._$calendar = $(elem);
    this._$datepicker = $(elem).children('.calendar__datepicker');
    this._$day = $(elem).children('.calendar__day');
    this._$todayBtn = $(elem).children('.calendar__today');
  }

  initElement() {
    let currentDate;

    this._$datepicker.datepicker({
      dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
      firstDay: 1,
      showOtherMonths: true,
      onSelect: () => {
        currentDate = this._$datepicker.datepicker('getDate');
        this._$day.text($.datepicker.formatDate('d', currentDate));
      },
    });

    currentDate = this._$datepicker.datepicker('getDate');
    this._$day.text($.datepicker.formatDate('d', currentDate));
    return this;
  }

  initEventHandlers() {
    const self = this;

    function setTodaysDate() {
      self._$datepicker.datepicker('setDate', new Date());
      self._$day.text($.datepicker.formatDate('d', new Date()));
    }

    this._$todayBtn.on(`click.calendar:${this._id}.today`, setTodaysDate);
    return this;
  }
}

const $calendar = $('.calendar');
let id = 0;
$calendar.each((index, elem) => {
  const calendar = new Calendar(elem, id);
  calendar.initElement().initEventHandlers();
  id += 1;
});
