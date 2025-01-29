import { Button } from '@/components/ui/button'
import { IProduct } from '@/lib/db/models/product.model'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function SelectVariant({
	product,
	size,
	color,
}: {
	product: IProduct
	color: string
	size: string
}) {
	const selectedColor = color || product.colors[0]
	const selectedSize = size || product.sizes[0]

	return (
		<>
			{product.colors.length > 0 && (
				<div className='space-x-2 space-y-2'>
					<div>Color:</div>
					{product.colors.map((x: string) => (
						<Button
							asChild
							variant='outline'
							className={cn(
								'border',
								selectedColor === x
									? 'border-primary ring-2 ring-primary/50 bg-primary/5'
									: 'border-input'
							)}
							key={x}
						>
							<Link
								replace
								scroll={false}
								href={`?${new URLSearchParams({
									color: x,
									size: selectedSize,
								})}`}
								key={x}
							>
								<div
									style={{ backgroundColor: x }}
									className='h-4 w-4 rounded-full border border-muted-foreground'
								></div>
								{x}
							</Link>
						</Button>
					))}
				</div>
			)}
			{product.sizes.length > 0 && (
				<div className='mt-2 space-x-2 space-y-2'>
					<div>Size:</div>
					{product.sizes.map((x: string) => (
						<Button
							asChild
							variant='outline'
							className={cn(
								'border',
								selectedSize === x
									? 'border-primary ring-2 ring-primary/50 bg-primary/5'
									: 'border-input'
							)}
							key={x}
						>
							<Link
								replace
								scroll={false}
								href={`?${new URLSearchParams({
									color: selectedColor,
									size: x,
								})}`}
							>
								{x}
							</Link>
						</Button>
					))}
				</div>
			)}
		</>
	)
}
