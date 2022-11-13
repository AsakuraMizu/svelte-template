import { describe, it, expect, afterEach } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/svelte';
import Counter from '@/lib/Counter.svelte';

describe('Counter.svelte', () => {
  afterEach(() => cleanup());

  it('mounts', () => {
    const { container } = render(Counter);
    expect(container).toBeTruthy();
    expect(container.innerHTML).toContain('Clicks: 0');
    // expect(container.innerHTML).toMatchSnapshot();
  });

  it('updates on button click', async () => {
    render(Counter);
    const btn = screen.getByRole('button');
    await fireEvent.click(btn);
    expect(btn.innerHTML).toContain('Clicks: 1');
    await fireEvent.click(btn);
    await fireEvent.click(btn);
    await fireEvent.click(btn);
    expect(btn.innerHTML).toContain('Clicks: 4');
  });
});
