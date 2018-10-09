export const hasSkill = (skill) =>
  (e) => e.skills.includes(skill)

export const knowsJS = hasSkill('JavaScript')
export const knowsJava = hasSkill('Java')
export const knowsDotNet = hasSkill('.net')

// export const knowsJSLabel =
//   (e) => knowsJS(e) ? 'zna' : 'nie zna'

export const hasSkillLabel = (skill) => {
  const knowsTheThing = hasSkill(skill)
  return (e) => knowsTheThing(e) ?
    `zna ${skill}` : `nie zna ${skill}`
}

export const uniqueSkills = (employees) => {
  const set = employees.reduce((set, e) => {
    e.skills.forEach(s => set.add(s))
    return set
  }, new Set())
  return [...set]
}
