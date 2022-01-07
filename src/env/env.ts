const parseEnv = (env: { [key: string]: any }) => {
  return Object.keys(env).reduce((acc: { [key: string]: any }, key) => {
    if (!key.includes("REACT_APP_")) return acc;

    const value = env[key];

    if (value === "true") {
      acc[key] = true;
    } else if (value === "false") {
      acc[key] = false;
    } else if (value.includes("[") || value.includes("{")) {
      try {
        acc[key] = JSON.parse(value);
      } catch {
        console.error(`Error while parsing ${key}`);
      }
    } else if (value.replace(/[^\d.-]/gi, "") === value) {
      const num = parseFloat(value);
      if (!isNaN(num) && isFinite(num)) {
        acc[key] = num;
      }
    } else {
      acc[key] = value;
    }

    return acc;
  }, {}) as AppEnv;
};

export const env: AppEnv = (() => {
  const _window = window as any;

  if (_window.env) {
    return parseEnv(_window.env);
  }

  return parseEnv(process.env);
})();
