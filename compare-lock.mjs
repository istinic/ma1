const pkgPromise = import('./package.json', { with: { type: 'json' } });
const lockPromise = import('./package-lock.json', { with: { type: 'json' } });

Promise.all([pkgPromise, lockPromise]).then(([pkg, lock]) => {
  const pkgDeps = {
    ...pkg.default.dependencies,
    ...pkg.default.devDependencies,
  };
  const lockDeps = lock.default.packages[''].dependencies || {};
  const lockDevDeps = lock.default.packages[''].devDependencies || {};

  console.log('Packages in package-lock.json but not in package.json:');
  Object.keys({ ...lockDeps, ...lockDevDeps }).forEach((dep) => {
    if (!pkgDeps[dep]) {
      console.log(
        `${dep}@${lockDeps[dep]?.version || lockDevDeps[dep]?.version}`
      );
    }
  });

  console.log('\nPackages in package.json but not in package-lock.json:');
  Object.keys(pkgDeps).forEach((dep) => {
    if (!lockDeps[dep] && !lockDevDeps[dep]) {
      console.log(`${dep}@${pkgDeps[dep]}`);
    }
  });
});
