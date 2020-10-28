const scoresSelection = (minScore, maxScore, scores = []) => {
  if(minScore > maxScore) {
    console.log(`Minimum score must be less than maximum score`)
    return
  }

  if(scores.length <= 5) {
    console.log(`Minimum amount of score is 5`)
    return
  }

  const selectedScores = scores.filter((score) => {
    return score > minScore && score < maxScore
  })

  if(selectedScores.length < 1) {
    console.log(`Scores between ${minScore} and ${maxScore} doesn't exist`)
    return
  }

  return selectedScores
}

const results = scoresSelection(85, 89, [ 82, 79, 57, 78, 75, 90 ])

console.log(results)