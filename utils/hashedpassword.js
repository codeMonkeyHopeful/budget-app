module.exports = rawPwd => {
  const hashedPwd =
    rawPwd
      .split("")
      .reverse()
      .join("") + "hash";
  return hashedPwd;
};
