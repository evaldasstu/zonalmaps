const generateEmbedCode = ({
  spreadsheetId,
  method,
  language,
  displayPropertyTable,
}) => {
  const iframePrefix = '<div class="zm"><iframe src="';

  // To do: disable lint here
  const iframeSuffix = '" frameborder="0"></iframe><style>.zm {position: relative; padding-bottom: 150%; height: 0; overflow: hidden; max-width: 100%} .zm iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%}</style></div>';

  // Serialize parameters for URL string
  let embedCode = `${window.location.origin}${process.env.PUBLIC_URL}/embed/${spreadsheetId}`;
  let extraOptions = '';
  if (!displayPropertyTable) {
    extraOptions = '?table=0';
  } else if (language !== 'en') {
    extraOptions = `?lang=${language}`;
  }
  if (!displayPropertyTable && language !== 'en') {
    extraOptions = `?table=0&lang=${language}`;
  }
  embedCode = `${embedCode}${extraOptions}`;
  embedCode = method === 'iframe' ? `${iframePrefix}${embedCode}${iframeSuffix}` : embedCode;

  return spreadsheetId ? embedCode : null;
};

export default generateEmbedCode;
