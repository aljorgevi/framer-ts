# framer-ts

this is as part of framer motion tutorial from The Net Ninja

## BASICS:

4.  initial indicate where we should animate from originally, and animate is where we want to animate to
    `<m.div className='title' initial={{ y: -250 }} animate={{ y: -10 }}>`

5.  Transition attribute: Describe how the animation transition from start to end(from initial to animate)
    options: delay, duration, type(the default is spring), stiffness(only for spring type)

6.  Hover animations: Instead of using animate, we use whileHover.
    `whileHover={{
	scale: 1.3,
	color: '#f8e112',
	originX: 0
}}
transition={{
	type: 'spring',
	stiffness: 300
}}`

## ADVANCED:

7. Variants:

- They allow us to extract our initial, animate and transition object into a single outside object that then we can reference.
- Allow to propagate variant changes through the Dom resulting to cleaner code.
- Allow to create timing relationsgips between parent motions and children motions using transition orchestration properties.
  Example:
  `<m.div
			className='base container'
			initial={{ x: '100vw' }}
			animate={{ x: 0 }}
			transition={{ type: 'spring', delay: 0.5 }}
		>`
  to:
  `const containerVariants = {
	// This is basically going to be the same as the initial state.
	// Because really we want it hidden, it's right off the page okay, so we're going to set the x to 100vw.
	// You don't have to call it this hidden, you can call it whatever you want.
	hidden: {
		opacity: 0,
		x: '100vw'
	},
	// This also doesn't have to be called visible, you can call it whatever you want. But it will represent the state that we want to animate to.
	visible: {
		opacity: 1,
		x: 0
	}
}`

Result:
`	<m.div
			className='base container'
			variants={containerVariants}
			transition={{ type: 'spring', delay: 0.5 }}
		>`
But this of it's own won't do anything because it doesn't know that this will be our animates attr object.
So we still need to indicate those:
Finally:
`<m.div
			className='base container'
			initial='hidden'
			animate='visible'
			variants={containerVariants}
			transition={{ type: 'spring', delay: 0.5 }}
		>`

We can also add the transition to the variant object. We only apply it to the object where we wantt to actually apply that transition,
now we want to apply that transition to these properties.
If we were to animating this out as well then we'd apply to something else , at the minute we're just animating this in so we only apply it to this visible one. Now we can delete from the div:
`const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw'
	},
animate to.
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			delay: 0.5
		}
	}
}
`
and:
`	<m.div
			className='base container'
			initial='hidden'
			animate='visible'
			variants={containerVariants}
		>`

VARIENTS ALSO ALLOW: To propagate animation attributes down through the Dom so when we have a parent element that uses variants with an animate and initial property, those attributes and values are going to propagate to children motion elments, now, one of those children is the next div so we can remove the initial and the animate props and this will still work.
But this element will no inheriting the parents animation or initial properties as defined in containerVariants, it;s only inheriting these two lines of code `	initial='hidden'
			animate='visible'`
It's looking at the parent and saying, okay, on the variants what you use down here(nextVariants), i'm going to automatically look for an initial state which is called hidden, which you will find on our variants and also animate state called visible, hich he finds, if these were called something different from the parent this wouldnt work.
