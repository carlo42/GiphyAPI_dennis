export const updateFilterAction = (updateFilter, filterType) => {
  updateFilter.updateCurrentFilter(filterType);
  updateFilter.updateOffset(0);
  updateFilter.fetchGifyResults(filterType, 0);
};

const numImages = 10;
export const incrementOffset = (updateFilter, currentFilter, offset) => {
  let newOffset = offset + numImages;
  updateFilter.updateOffset(newOffset);
  updateFilter.fetchGifyResults(currentFilter, newOffset);
};

export const decrementOffset = (updateFilter, currentFilter, offset) => {
  let newOffset = offset - numImages;
  if (newOffset >= 0) {
    updateFilter.updateOffset(newOffset);
    updateFilter.fetchGifyResults(currentFilter, newOffset);
  }
};
