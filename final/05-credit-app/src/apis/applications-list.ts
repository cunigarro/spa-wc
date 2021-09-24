export default function getApplicationsList() {
  return new Promise((res, rej) => {
    const applications = [
      {
        id: 1,
        name: 'Cristiano Ronaldo',
        amount: 20000,
        state: 'Aprobado',
        payed: false,
        detail: {
          payCapacity: 3000,
          amountToPay: 25000,
          paymentMethods: [
            'Bancolombia',
            'Davivienda',
            'Nequi',
            'BBVA'
          ]
        }
      },
      {
        id: 2,
        name: 'Leonel Messi',
        amount: 100,
        state: 'Aprobado',
        payed: false,
        detail: {
          payCapacity: 3000,
          amountToPay: 25000,
          paymentMethods: [
            'Bancolombia',
            'Davivienda',
            'Nequi',
            'BBVA'
          ]
        }
      },
      {
        id: 3,
        name: 'Luis Díaz',
        amount: 2000,
        state: 'Aprobado',
        payed: false,
        detail: {
          payCapacity: 3000,
          amountToPay: 25000,
          paymentMethods: [
            'Bancolombia',
            'Davivienda',
            'Nequi',
            'BBVA'
          ]
        }
      },
      {
        id: 3,
        name: 'Usain Bolt',
        amount: 2000,
        state: 'Aprobado',
        payed: false,
        detail: {
          payCapacity: 3000,
          amountToPay: 25000,
          paymentMethods: [
            'Bancolombia',
            'Davivienda',
            'Nequi',
            'BBVA'
          ]
        }
      }
    ];

    setTimeout(() => {
      res(applications);
    }, 1000);
  });
}
