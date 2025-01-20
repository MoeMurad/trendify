'use client'

import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { APP_NAME } from '@/lib/constants'

export default function Footer() {
	return (
		<footer className='bg-orange-600 text-white underline-link'>
			<div className='w-full'>
				<Button
					variant='ghost'
					className='bg-orange-900 w-full rounded-none'
					onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>
					<ChevronUp className='mr-2 h-4 w-4' />
					Back to Top
				</Button>
			</div>
			<div className='p-4'>
				<div className='flex justify-center gap-3 text-sm'>
					<Link href='/page/conditions-of-use'>Conditions of Use</Link>
					<Link href='/page/privacy-policy'>Privacy Policy</Link>
					<Link href='/page/help-center'>Help Center</Link>
				</div>
				<div className='flex justify-center text-sm'>
					<p>© 2000-2025, {APP_NAME}, Inc. or its Affiliates</p>
				</div>
				<div className='mt-8 flex justify-center text-sm text-white-500'>
					Malaysia, Selangor, Semenyih, Eco Forest, 43500 | +60 18 359 0065
				</div>
			</div>
		</footer>
	)
}
