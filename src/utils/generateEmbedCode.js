const generateEmbedCode = ({ spreadsheetId, language = 'en', displayList = 'true' }) => {
  const iframePrefix = '<div class="zm"><iframe src="';
  const iframeSuffix =
    '" frameborder="0"></iframe><style>.zm {position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%} .zm iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%}</style></div>';

  // Serialize parameters for URL string
  let extraOptions = '';
  if (!displayList) {
    extraOptions = '?list=0';
  } else if (language !== 'en') {
    extraOptions = `?lang=${language}`;
  }
  if (!displayList && language !== 'en') {
    extraOptions = `?list=0&lang=${language}`;
  }

  const embedCode = `${iframePrefix}${window.location.origin}${process.env.PUBLIC_URL}/embed/${spreadsheetId}${extraOptions}${iframeSuffix}`;

  return spreadsheetId ? embedCode : null;
};

export default generateEmbedCode;
