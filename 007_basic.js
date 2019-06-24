var customerData = {
  Joe: {
    visits: 1
  },
  Carol: {
    visits: 2
  },
  Howard: {
    visits: 3
  },
  Carrie: {
    visits: 4
  }
};

function greetCustomer(firstName) {
  const Gest_1 = `Welcome! Is this your first time?`;
  const Gest_2 = `Welcome back, ${firstName}! We're glad you liked us the first time!`;
  const Gest_3 = `Welcome back, ${firstName}! So glad to see you again!`;
  const name = customerData[firstName];

  return !name ? Gest_1 : name.visits === 1 ? Gest_2 : Gest_3;
}
