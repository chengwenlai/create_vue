import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils'; // 测试工具包
import HelloWorld from '@/components/HelloWorld.vue';
describe('测试组件HelloWorld', () => {
	it('组件的h1标签文本是否含有new', () => {
		const msg = 'new message';
		const wrapper = shallowMount(HelloWorld, {
			propsData: { msg }
		});
		expect(wrapper.find('h1').text()).to.include('new');
	});
});
