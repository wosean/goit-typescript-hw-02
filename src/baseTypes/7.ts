/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day { SUN, MON, TUE, WED, THU, FRI, SAT
}

function isWeekend(day: Day): boolean {
  return day === Day.SUN || day === Day.SAT;
}

isWeekend(Day.MON);
export { };