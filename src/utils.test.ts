import { getFileExtension, createHtmlImgTag, imageNameToFigureCaption } from './utils';

describe('getFileExtension', () => {
  it('should return jpg for image/jpeg', () => {
    expect(getFileExtension('image/jpeg')).toBe('jpg');
  });

  it('should return png for image/png', () => {
    expect(getFileExtension('image/png')).toBe('png');
  });

  it('should return gif for image/gif', () => {
    expect(getFileExtension('image/gif')).toBe('gif');
  });

  it('should return svg for image/svg+xml', () => {
    expect(getFileExtension('image/svg+xml')).toBe('svg');
  });

  it('should return webp for image/webp', () => {
    expect(getFileExtension('image/webp')).toBe('webp');
  });

  it('should return bmp for image/bmp', () => {
    expect(getFileExtension('image/bmp')).toBe('bmp');
  });

  it('should return tiff for image/tiff', () => {
    expect(getFileExtension('image/tiff')).toBe('tiff');
  });

  it('should return png for unknown mime types', () => {
    expect(getFileExtension('image/unknown')).toBe('png');
  });
});

describe('imageNameToFigureCaption', () => {
  it('should replace underscores with spaces', () => {
    expect(imageNameToFigureCaption('image_1234567890.png')).toBe('image 1234567890.');
  });

  it('should handle filenames with multiple underscores', () => {
    expect(imageNameToFigureCaption('my_test_image_123.png')).toBe('my test image 123.');
  });

  it('should handle filenames without underscores', () => {
    expect(imageNameToFigureCaption('testimage.png')).toBe('testimage.');
  });

  it('should handle filenames with various extensions', () => {
    expect(imageNameToFigureCaption('image_test.jpg')).toBe('image test.');
    expect(imageNameToFigureCaption('image_test.gif')).toBe('image test.');
    expect(imageNameToFigureCaption('image_test.webp')).toBe('image test.');
  });

  it('should handle empty filename', () => {
    expect(imageNameToFigureCaption('')).toBe('.');
  });

  it('should handle filename with only extension', () => {
    expect(imageNameToFigureCaption('.png')).toBe('.');
  });
});

describe('createHtmlImgTag', () => {
  it('should generate centered HTML with figure caption for default path', () => {
    const result = createHtmlImgTag(
      'image_1234567890.png',
      'image_1234567890.png',
      '',
      false,
      './assets',
      '80%',
      false
    );

    expect(result).toContain('<center>');
    expect(result).toContain('</center>');
    expect(result).toContain('<img src="image_1234567890.png" width="80%">');
    expect(result).toContain('<br>');
    expect(result).toContain('<b>Figure</b>');
    expect(result).toContain('image 1234567890.');
  });

  it('should generate centered HTML with figure caption for custom path', () => {
    const result = createHtmlImgTag(
      'image_1234567890.png',
      'assets/image_1234567890.png',
      'assets',
      true,
      'assets',
      '80%',
      false
    );

    expect(result).toContain('<center>');
    expect(result).toContain('</center>');
    expect(result).toContain('<img src="assets/image_1234567890.png" width="80%">');
    expect(result).toContain('<b>Figure</b>');
    expect(result).toContain('image 1234567890.');
  });

  it('should generate centered HTML with figure caption for relative custom path', () => {
    const result = createHtmlImgTag(
      'image_1234567890.png',
      './assets/image_1234567890.png',
      './assets',
      true,
      './assets',
      '80%',
      false
    );

    expect(result).toContain('<img src="./assets/image_1234567890.png" width="80%">');
    expect(result).toContain('<b>Figure</b>');
    expect(result).toContain('image 1234567890.');
  });

  it('should handle image names with multiple underscores', () => {
    const result = createHtmlImgTag(
      'my_test_image_123.png',
      'my_test_image_123.png',
      '',
      false,
      './assets',
      '80%',
      false
    );

    expect(result).toContain('<b>Figure</b>');
    expect(result).toContain('my test image 123.');
  });

  it('should include alt attribute when includeAlt is true', () => {
    const result = createHtmlImgTag(
      'image_1234567890.png',
      'image_1234567890.png',
      '',
      false,
      './assets',
      '80%',
      true
    );

    expect(result).toContain('alt="image_1234567890.png"');
  });

  it('should not include alt attribute when includeAlt is false', () => {
    const result = createHtmlImgTag(
      'image_1234567890.png',
      'image_1234567890.png',
      '',
      false,
      './assets',
      '80%',
      false
    );

    expect(result).not.toContain('alt=');
  });

  it('should use the correct width value', () => {
    const result = createHtmlImgTag(
      'image_1234567890.png',
      'image_1234567890.png',
      '',
      false,
      './assets',
      '100%',
      false
    );

    expect(result).toContain('width="100%"');
  });

  it('should use auto width when specified', () => {
    const result = createHtmlImgTag(
      'image_1234567890.png',
      'image_1234567890.png',
      '',
      false,
      './assets',
      'auto',
      false
    );

    expect(result).toContain('width="auto"');
  });

  it('should generate proper multi-line format', () => {
    const result = createHtmlImgTag(
      'image_1234567890.png',
      'image_1234567890.png',
      '',
      false,
      './assets',
      '80%',
      false
    );

    const expectedFormat = `<center>
  <img src="image_1234567890.png" width="80%"><br>
  <b>Figure</b>.image 1234567890.
</center>`;

    expect(result).toBe(expectedFormat);
  });
});
