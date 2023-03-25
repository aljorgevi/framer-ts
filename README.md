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

7. Variants: They allow us to extract our initial, animate and transition object into a single outside object that then we can reference.
