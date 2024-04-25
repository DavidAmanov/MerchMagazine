import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { productContext } from './productCartContext';
import CartComponent from './cart.js';

test('cleanCart function', () => {
  // Создаем моковый контекст
  const mockContext = ['Product 1', 'Product 2'];

  // Рендерим компонент с моковым контекстом
  const { getByText } = render(
    <productContext.Provider value={mockContext}>
      <CartComponent />
    </productContext.Provider>
  );

  const button = getByText('clean cart');
  fireEvent.click(button);

  // Проверяем, что контекст был очищен
  expect(mockContext.length).toBe(0);
});
