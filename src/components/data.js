const data = {
  products: [
    {
      id: '1',
      name: 'engine repair',
      price: 3400,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfmkR3mscEKWCYFkQOAIkdFcY6VSdW25dPsQ&usqp=CAU',
    },
    {
      id: '2',
      name: 'Tyre repair',
      price: 1200,
      image: 'data:image/png;base64,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',
    },
    {
      id: '3',
      name: 'Servicing',
      price: 5000,
      image: 'data:image/png;base64,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',
    },
  ],
};
export default data;
