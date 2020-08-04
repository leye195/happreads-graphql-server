export const paginateResults = (page = 1, pageSize = 15, results) => {
  if (page < 1) return [];
  if (page === 1) return results.slice(0, pageSize);
  return results.slice(0, pageSize * (page - 1) + pageSize);
};
