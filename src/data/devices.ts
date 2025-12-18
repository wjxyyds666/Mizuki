// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	Redmi: [
		{
			name: "Redmi K60",
			image: "/images/device/oneplus13t.png",
			specs: " 墨羽/ 16G + 512",
			description:
				"红米K60是2000+元高性价比水桶机，搭载 骁龙8+处理器和2K高刷屏。核心亮点是 5500mAh长续航+67W有线+30W无线充 性能与体验均衡无短板。",
			link: "https://www.mi.com/shop/buy/detail?product_id=18075&cfrom=search",
		},
	],
	Router: [
		{
			name: "GL-MT3000",
			image: "/images/device/mt3000.png",
			specs: "1000Mbps / 2.5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
};
