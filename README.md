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

VARIANTS PART 2: Check order component to see.
`const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw'
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: 'spring',
			// higher mass means it moves slower, lower mass means it moves faster.
			mass: 0.4,
			// damping is how much it bounces back. Is the strength of the opposing force. A higher damping mean less osciliation
			damping: 8,
			// delay: 0.5,
			// here we say we want to complete the animation before the children are animated.
			when: 'beforeChildren',
			// we can also stagger the children. This means that it stagger the children by 0.4 seconds. So all animate one after another for a nice little effect.
			staggerChildren: 0.4
		}
	}
}`

9.  keyFrames:
    For hover button we move from:
    ` <m.button
    whileHover={{
    		scale: 1.1,
    		textShadow: '0px 0px 8px rgb(255,255,255)',
    		boxShadow: '0px 0px 8px rgb(255,255,255)'
    	}}

    >

        Create Your Pizza

    </m.button>`to this:`
    const buttonVariants = {
    hover: {
    scale: 1.1,
    textShadow: '0px 0px 8px rgb(255,255,255)',
    boxShadow: '0px 0px 8px rgb(255,255,255)'
    }
    }

                <m.button variants={buttonVariants} whileHover='hover'>

            `

        And this is a example of keyframe:
        `const buttonVariants = {
        // visible: {
        // 	// x: [0, -20, 20, -20, 20, 0], // keyframes
        // 	transition: { delay: 2 }
        // },
        hover: {
        	scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
        	textShadow: '0px 0px 8px rgb(255,255,255)',
        	boxShadow: '0px 0px 8px rgb(255,255,255)'
        }

    }`

10. Repeating animation: In in the tutorial lwas using the yoyo prop, but didn't work, now we use repeat prop e.x:
    `const buttonVariants = {
	hover: {
		scale: 1.1,
		textShadow: '0px 0px 8px rgb(255,255,255)',
		boxShadow: '0px 0px 8px rgb(255,255,255)',
		transition: {
			repeat: Infinity,
			duration: 0.3,
			repeatType: 'reverse'
		}
	}
}`

11. Animate Presence: This is a component that we can use to animate components out of the screen.
    We need to add an exit attribute. When the html is remove from the dom, the animate presence knows to look for this exit attr and use the animation to tak it out of the dom.
    `<AnimatePresence>
	{showTitle && (
		<m.h2
			exit={{
				y: -1000,
				transition: {
					duration: 1
				}
			}}
		>
			Thank you for your order :)
		</m.h2>
	)}
</AnimatePresence>`

12. To use AnimatePresense with pages, we need to wrap the app with it and identify the location and pass it to the routes like so:
    `		<AnimatePresence mode='wait'>
<Routes location={location} key={location.key}>`
    We also added mode='wait' to to make sure that any component that exisit is complete before the next is rendered. (exitBeforeEnter deprecated)

13 and 14: This is about add a modal to order pages. Check code in modal and order component.
Also there's a prop to AnimatePresence: {/_ onExitComplete={() => setShowModal(false)} _/}
But I prefered to use the return function in the useEffect.

15. Animatin SVG's.
    check at the code Logo.tsx

16. Create Loader: This is an interesting one. We can animate without hidden, visible, exit, etc. Just the animation wherever the component is located. Look at the first version of the animation commented at the end of the file Lodear.tsx

17. add useCycle hook to change and toggle between two different animations.
