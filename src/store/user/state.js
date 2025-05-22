const state = () => ({
  users: [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      birthDate: '1988-02-25',
      quote: 'Hello World!',
      profession_id: 1,
      country_id: 1,
    },
    {
      id: 2,
      firstName: 'Johan',
      lastName: 'Envik',
      birthDate: '1985-07-08',
      quote: 'Det här är exakt en calzone, utan skinka, minus bröd',
      profession_id: 1,
      country_id: 3,
      country_of_residence_id: 1,
    },
  ],
});

export default state;