import styled from 'styled-components'

export const ItemContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor || "#ddd"};
  display: flex;
  justify-content: space-between;
  padding: .8rem;
  border-radius: 10px;
`
export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.img`
  margin-right: 10px;
`

export const CategoryName = styled.span`
  color: ${({ color }) => `var(--${color})`};
  font-weight: 500;

`

export const Score = styled.span`
  color: var(--DarkGrayBlue);
  font-weight: 700;
`

export const Percent = styled.span`
  color: hsl(204, 7.00%, 72.20%);
  font-weight: 500;
`