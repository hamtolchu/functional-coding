userChanges.subscribe(function (user) {
  const userCopy = deepCopy(user);
  processUser(userCopy);
});