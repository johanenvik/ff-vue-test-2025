const state = () => ({
  selectedProfessionId: null,
  professions: [
    {
      value: 1,
      text: 'Front-end Developer',
    },
    {
      value: 2,
      text: 'Back-end Developer',
    },
    {
      value: 3,
      text: 'Product Owner',
    },
    {
      value: 4,
      text: 'CTO',
    },
  ],
});

export default state;