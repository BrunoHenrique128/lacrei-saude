import { describe, it, expect } from '@jest/globals'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from '@/app/header'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
}))

describe('Header', () => {
  it('deve renderizar o logo da Lacrei Saúde', () => {
    render(<Header />)
    expect(screen.getByText('LS Lacrei Saúde')).toBeInTheDocument()
  })

  it('deve renderizar o link Quem somos', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Quem somos' })).toBeInTheDocument()
  })

  it('deve renderizar o botão Entrar', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: /entrar/i })).toBeInTheDocument()
  })
})