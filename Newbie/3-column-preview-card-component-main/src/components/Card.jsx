import LearnMoreButton from './LearnMoreButton'
import { CardContainer, CardTitle, CardContext } from '../styles/Card'

function Card({ type, description, icon, color }) {
  
  return (
    <CardContainer color={color}>
      <img src={icon}/>
      <CardTitle>{type}</CardTitle>
      <CardContext>{description}</CardContext>
      <LearnMoreButton color={color}/>
    </CardContainer>
  )
}

export default Card