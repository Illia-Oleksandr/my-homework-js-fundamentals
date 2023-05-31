const getGreeting = (username) => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;

  if (currentHour < 12) {
    greeting = "Доброго ранку";
  } else if (currentHour < 18) {
    greeting = "Доброго дня";
  } else {
    greeting = "Доброго вечора";
  }

  return greeting;
};

const getDateTime = () => {
  const currentTime = new Date();
  return `Date of request: ${currentTime.toString()}`;
};

module.exports = {
  getGreeting,
  getDateTime,
};
