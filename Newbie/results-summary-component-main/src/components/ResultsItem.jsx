import { ItemContainer, CategoryContainer, Icon, CategoryName, Score, Percent } from '../styles/ResultsItem'

function ResultsItem({ category, score, icon }) {
  const categoryColors = {
  Reaction: "hsla(0, 100%, 67%, 0.05)",
  Memory: "hsla(39, 100%, 56%, 0.05)",
  Verbal: "hsla(166, 100%, 37%, 0.05)",
  Visual: "hsla(234, 85%, 45%, 0.05)"
}
  return(
    <ItemContainer bgColor={categoryColors[category]}>
      <CategoryContainer>
        <Icon src={icon} alt={category}/>
        <CategoryName color={category}>{category}</CategoryName>
      </CategoryContainer>
      <Score>{score} <Percent>/ 100</Percent></Score>
    </ItemContainer>
  )
}

export default ResultsItem