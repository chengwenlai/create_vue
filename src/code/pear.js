/**
 * html片段图片格式过滤
 * @param fn
 * @returns {Function}
 */
export const formatHtml = html => {
	return html.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (
		match,
		uid
	) {
		const url = `upload-file/${uid}?token=`;
		return `<img src='${url}' style="max-width:100%;"/>`;
	});
};
