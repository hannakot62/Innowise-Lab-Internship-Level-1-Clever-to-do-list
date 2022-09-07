export function showMonth(day: Date) {
  const month = day.getMonth();
  switch (month) {
    case 0: {
      return "january";
      break;
    }
    case 1: {
      return "february";
      break;
    }
    case 2: {
      return "march";
      break;
    }
    case 3: {
      return "april";
      break;
    }
    case 4: {
      return "may";
      break;
    }
    case 5: {
      return "june";
      break;
    }
    case 6: {
      return "july";
      break;
    }
    case 7: {
      return "august";
      break;
    }
    case 8: {
      return "september";
      break;
    }
    case 9: {
      return "october";
      break;
    }
    case 10: {
      return "november";
      break;
    }
    case 11: {
      return "december";
      break;
    }
  }
}
