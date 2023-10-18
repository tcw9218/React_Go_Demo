import { ProductCard } from "@/components/ProductCard"
import { ProductFilterSelect } from "@/components/ProductFilterSelect"
import { bikeProduct } from "@/constants"
import { FunnelIcon } from '@heroicons/react/20/solid'
import { Box, Modal, Typography } from '@mui/material'
import { useState } from "react"

/* eslint-disable react/no-unescaped-entities */
export const ProductList = () => {
	const [open, setOpen] = useState(false);
  	const handleOpen = () => setOpen(true);
  	const handleClose = () => setOpen(false);
	return (
		<div className="w-full max-lg:flex-col p-2 max-container lg:flex pt-28 gap-10">
			<div className="sticky flex xl:basis-1/5 max-lg:hidden">
				<ProductFilterSelect />
			</div>
			<div className="px-4 flex justify-between lg:hidden mb-8">
				<span> Results</span>
				<FunnelIcon
					className = "selection:flex-stretch mr-4 h-6 w-6 cursor-pointer"
					aria-hidden="true"
					onClick={handleOpen}
				/>
			</div>
			<div className="grid sm:grid-cols-2 max-xs:grid-cols-1 sm:gap-4 gap-14 px-4 ">
				{bikeProduct.map((product: typeof bikeProduct[number]) => (
					<ProductCard
						key = {product.name}
						imgURL= {product.imgURL}
						name = {product.name}
						price = {product.price}
					/>
				))}
			</div>
			<Modal
				open = { open }
				onClose = { handleClose }
			>
				<Box className = "absolute top-0 left-0 bg-white h-1/2 w-1/2">
					<Typography id="modal-modal-title" variant="h5" component="h2">
      					Text in a modal
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
      					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
					</Typography>
				</Box>
			</Modal>
		</div>
	)
}
