import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import enhancer from '@/images/types/1.png'
import conjurer from '@/images/types/2.png'
import intuitor from '@/images/types/3.png'
import specialist from '@/images/types/4.png'
import connector from '@/images/types/5.png'
import transmuter from '@/images/types/6.png'
import one from '@/images/cards/1.png'
import two from '@/images/cards/2.png'
import three from '@/images/cards/3.png'
import four from '@/images/cards/4.png'
import five from '@/images/cards/5.png'
import six from '@/images/cards/6.png'
import product from '@/images/product.png'
const types = [
  ['Enhancer', enhancer],
  ['Conjurer', conjurer],
  ['Intuitor', intuitor],
  ['Specialist', specialist],
  ['Connector', connector],
  ['Transmuter', transmuter],
]
const cards = [
  ['one', one],
  ['two', two],
  ['three', three],
  ['four', four],
  ['five', five],
  ['six', six],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-5xl font-semibold tracking-wider text-white sm:text-left">
            Six Archetypes
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {types.map(([client, logo]) => (
              <li key={client.toString()}>
                <FadeIn>
                  <Image
                    src={(logo as any).src || logo}
                    alt="type"
                    unoptimized
                    width={500}
                    height={300}
                    style={{ borderRadius: '1rem', border: '1px solid #fff' }}
                  />{' '}
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="120 Playing Cards"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Each of the six archetypes features a distinct set of 20 cards, each
          corresponding to a unique game. These 20 cards are divided into three
          levels: 8 cards in the first level, 7 in the second, and 5 in the
          third
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {cards.map(([client, logo]) => (
              <li key={client.toString()}>
                <FadeIn>
                  <Image
                    src={(logo as any).src || logo}
                    alt="type"
                    unoptimized
                    width={500}
                    height={300}
                    style={{ borderRadius: '1rem', border: '1px solid #fff' }}
                  />{' '}
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At Studio we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24  ">
        <FadeIn className="w-full">
          <div className="flex w-full flex-col items-center justify-between md:flex-row">
            <div className="mb-4 w-full md:mb-0 md:w-7/12">
              <Image src={product} alt="" unoptimized />
            </div>
            <div className="w-full md:w-5/12">
              <h1 className="inline-block bg-gradient-to-r from-red-300 via-green-500 to-indigo-400 bg-clip-text font-display text-5xl font-medium tracking-tight text-neutral-950 text-transparent [text-wrap:balance] sm:text-7xl">
                Emotional Intelligence Board Game
              </h1>
              <p className="mt-6 text-xl text-neutral-600">
                Remember each other in an unforgettable way.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      {/* <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services /> */}

      {/* <ContactSection /> */}
    </>
  )
}
