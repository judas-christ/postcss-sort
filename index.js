var postcss = require('postcss');

function defaultSort(propA, propB) {
  return propA === propB
    ? 0
    : propA < propB
      ? -1
      : 1;
};

module.exports = postcss.plugin('postcss-sort', function(sortFunction) {
  
  sortFunction = typeof sortFunction === 'function' ? sortFunction : defaultSort;

  return function(css) {
    css.nodes.forEach(function(node) {
      node.nodes.sort(function(a, b) {
        return sortFunction(a.prop, b.prop);
      });
    });
  };
  
});
