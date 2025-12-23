/**
 * Get file extension from MIME type
 */
export function getFileExtension(mimeType: string): string {
	const mimeToExt: Record<string, string> = {
		'image/jpeg': 'jpg',
		'image/png': 'png',
		'image/gif': 'gif',
		'image/svg+xml': 'svg',
		'image/webp': 'webp',
		'image/bmp': 'bmp',
		'image/tiff': 'tiff'
	};
	
	return mimeToExt[mimeType] || 'png';
}

/**
 * Convert image filename to figure caption
 * Removes file extension, replaces underscores with spaces, and adds a period at the end
 */
export function imageNameToFigureCaption(fileName: string): string {
	// Remove file extension
	const nameWithoutExt = fileName.replace(/\.[^.]+$/, '');
	// Replace underscores with spaces
	const caption = nameWithoutExt.replace(/_/g, ' ');
	// Add period at the end
	return `${caption}.`;
}

/**
 * Create HTML image tag with centered format and figure caption
 */
export function createHtmlImgTag(
	fileName: string, 
	imagePath: string, 
	imageDir: string, 
	useCustomPath: boolean,
	customPath: string,
	imageWidth: string,
	includeAlt: boolean
): string {
	let src = '';
	
	if (useCustomPath) {
		// Use custom path
		const path = customPath.trim();
		
		// If relative path (starts with ./ or ../)
		if (path.startsWith('./') || path.startsWith('../')) {
			src = `${path}/${fileName}`;
		} else {
			// Use custom path directly without ./ prefix
			src = `${path}/${fileName}`.replace(/\/\//g, '/');
		}
	} else {
		// Use default path (same directory as current file)
		src = fileName;
	}
	
	// Build figure caption from filename
	const figureCaption = imageNameToFigureCaption(fileName);
	
	// Build HTML image tag
	const imgTag = includeAlt 
		? `<img src="${src}" width="${imageWidth}" alt="${fileName}">`
		: `<img src="${src}" width="${imageWidth}">`;
	
	// Build centered HTML with figure caption
	return `<center>
  ${imgTag}<br>
  <b>Figure</b>.${figureCaption}
</center>`;
} 