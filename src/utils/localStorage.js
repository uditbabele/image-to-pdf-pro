export const saveSettings = (
  settings
) => {
  localStorage.setItem(
    "pdfSettings",
    JSON.stringify(settings)
  );
};

export const loadSettings = () => {
  const data =
    localStorage.getItem(
      "pdfSettings"
    );

  return data
    ? JSON.parse(data)
    : null;
};