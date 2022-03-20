import { expect } from 'chai'; // 断言库
import { formatHtml } from '@/code/pear';
// 分类 测试一个js文件 或者某一类 方法 等等....
describe('我要专们测试一个formatHtml', () => {
	// 一个测试用例
	it('我要测试formatHtml函数靠不靠谱?', () => {
		// 函数formatHtml('<img src=\'1354562\'>')运行的结果是否等于<img src=\'upload-file/1354562?token=\' style="max-width:100%;"/>
    	expect(formatHtml('<img src=\'1354562\'>')).to.be.equal('<img src=\'upload-file/1354562?token=\' style="max-width:100%;"/>');
	});
});

describe('测试方法', () => {
	// 常用的一些测试方法
	it('相等关系', () => {
		expect(1 + 1).to.be.equal(2);
		expect([1, 2, 3]).to.be.lengthOf(3);
		expect(true).to.be.true;
	});
	it('包含', () => {
		expect('zfb').to.be.contain('f');
		expect('zfbaaa').to.be.match(/zf/);
	});
	it('大于 小于', () => {
		expect(5).to.be.greaterThan(3);
		expect(3).to.be.lessThan(13);
	});
});
