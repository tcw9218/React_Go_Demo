import { facebook, instagram, shieldTick, support, truckFast, twitter } from '../assets/icons'
import { bigShoe1, bigShoe2, bigShoe3, bike1, bike2, bike3, customer1, customer2, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from '../assets/images'

export const navLinks = [
	{ href: '/', label: 'Home' },
	{ href: '/products', label: 'Products' },
	{ href: '/login', label: 'login' }
]

export const shoes = [
	{
		thumbnail: thumbnailShoe1,
		bigShoe: bigShoe1
	},
	{
		thumbnail: thumbnailShoe2,
		bigShoe: bigShoe2
	},
	{
		thumbnail: thumbnailShoe3,
		bigShoe: bigShoe3
	}
]
export const bikes = [
	{
		thumbnail: thumbnailShoe1,
		bigBike: bigShoe1
	},
	{
		thumbnail: thumbnailShoe2,
		bigBike: bike2
	},
	{
		thumbnail: thumbnailShoe3,
		bigBike: bike3
	}
]

export const statistics = [
	{ value: '1k+', label: 'Brands' },
	{ value: '500+', label: 'Shops' },
	{ value: '250k+', label: 'Customers' }
]


export const services = [
	{
		imgURL: truckFast,
		label: 'Free shipping',
		subtext: 'Enjoy seamless shopping with our complimentary shipping service.'
	},
	{
		imgURL: shieldTick,
		label: 'Secure Payment',
		subtext: 'Experience worry-free transactions with our secure payment options.'
	},
	{
		imgURL: support,
		label: 'Love to help you',
		subtext: 'Our dedicated team is here to assist you every step of the way.'
	}
]

export const reviews = [
	{
		imgURL: customer1,
		customerName: 'Morich Brown',
		rating: 4.5,
		feedback: 'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!'
	},
	{
		imgURL: customer2,
		customerName: 'Lota Mongeskar',
		rating: 4.5,
		feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
	}
]

export const footerLinks = [
	{
		title: 'Help',
		links: [
			{ name: 'About us', link: '/' },
			{ name: 'FAQs', link: '/' },
			{ name: 'How it works', link: '/' },
			{ name: 'Privacy policy', link: '/' },
			{ name: 'Payment policy', link: '/' }
		]
	},
	{
		title: 'Get in touch',
		links: [
			{ name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
			{ name: '+92554862354', link: 'tel:+92554862354' }
		]
	}
]

export const socialMedia = [
	{ src: facebook, alt: 'facebook logo' },
	{ src: twitter, alt: 'twitter logo' },
	{ src: instagram, alt: 'instagram logo' }
]

export const bikeProduct = [
	{ imgURL: "https://cdn.shopify.com/s/files/1/2318/5263/files/BMT31566_PH_1.jpg?width=1200&v=1697491905",
		name: "Mountain Ebike MEdium",
		price: "2299" },
	{ imgURL: "https://cdn.shopify.com/s/files/1/2318/5263/files/BGR14067_PH_1.jpg?width=1200&v=1692127580",
		name: "Moots Routt 45",
		price: "5999.89" },
	{ imgURL: "https://cdn.shopify.com/s/files/1/2318/5263/files/BMT31562_PH_1.jpg?width=1200&v=1697491897",
		name: "Sklar Gravel Custom",
		price: "3499.89" },
	{ imgURL: "https://cdn.shopify.com/s/files/1/2318/5263/files/BRD33507_PH_1.jpg?width=1200&v=1697491922",
		name: "Trek Checkpoint SL",
		price: "4249.99" },
	{ imgURL: "https://cdn.shopify.com/s/files/1/2318/5263/files/BRD32594_PH_1.jpg?width=1200&v=1692892976",
		name: "Colnago G3-X",
		price: "4999.99" },
	{ imgURL: "https://cdn.shopify.com/s/files/1/2318/5263/files/BRD32458_PH_1.jpg?width=1200&v=1687449947",
		name: "Bombtrack Hook EXT",
		price: "2049.99" },
	{ imgURL: "https://cdn.shopify.com/s/files/1/2318/5263/files/BMT31502_PH_1.jpg?width=1200&v=1696022228",
		name: "Niner RLT",
		price: "2699.99" },
]

