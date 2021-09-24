export default function getApplicationsList() {
  return new Promise((res, rej) => {
    const applications = [
      {
        id: 1,
        name: 'Cristiano Ronaldo',
        amount: 20000,
        state: 'Aprobado'
      },
      {
        id: 2,
        name: 'Leonel Messi',
        amount: 100,
        state: 'Pendiente'
      },
      {
        id: 3,
        name: 'Luis Díaz',
        amount: 2000,
        state: 'Pendiente'
      },
      {
        id: 3,
        name: 'Usain Bolt',
        amount: 2000,
        state: 'Rechazado'
      }
    ];

    setTimeout(() => {
      res(applications);
    }, 1000);
  });
}
