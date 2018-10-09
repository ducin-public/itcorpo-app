export const groupBy = (groupReducerFn, getInitial) =>
   (collection, getKey) =>
      collection.reduce((groups, e) => {
        if (!groups[getKey(e)]) {
          groups[getKey(e)] = getInitial()
        }
        groups[getKey(e)] = groupReducerFn(groups[getKey(e)], e)
        return groups
      }, {})

export const countBy = groupBy((c, e) => c + 1, () => 0)
export const salarySumBy = groupBy((sum, e) => sum + e.salary, () => 0)
