import Link from './Link'
import Image from './Image'
import { CreditItemProps } from './CreditItem'

const LTSGrantees = () => {
  const ltsGrantees: CreditItemProps[] = [
    {
      link: 'https://github.com/naumenkogs',
      image: '/img/grantees/lts/naumenkogs.jpg',
      nym: 'Gleb Naumenko',
    },
    {
      link: 'https://github.com/josibake',
      image: '/img/grantees/lts/josi.jpg',
      nym: 'Josi Baker',
      person: true,
    },
    {
      link: 'https://github.com/maflcko',
      image: '/img/grantees/lts/marco.png',
      nym: 'Marco Falke',
    },
    {
      link: 'https://github.com/furszy',
      image: '/img/grantees/lts/furszy.jpg',
      nym: 'Furszy',
    },
    {
      link: 'https://github.com/morehouse',
      image: '/img/grantees/lts/morehouse.png',
      nym: 'Matt Morehouse',
    },
    {
      link: 'https://github.com/vasild',
      image: '/img/grantees/lts/vd.jpg',
      nym: 'Vasil Dimov',
    },
    {
      link: 'https://github.com/willcl-ark',
      image: '/img/grantees/lts/will-clark.jpg',
      nym: 'Will Clark',
    },
    {
      link: 'https://github.com/Sjors',
      image: '/img/grantees/lts/sjors.jpg',
      nym: 'Sjors Provoost',
    },
  ]

  return (
    <div className="col-span-2 col-start-2 grid grid-cols-2 space-y-2 sm:gap-x-2 md:grid-cols-3 md:gap-x-8">
      {ltsGrantees.map((s, i) => (
        <div className="items-left flex flex-col space-x-2 pt-8" key={i}>
          <Link href={s.link}>
            <Image
              src={s.image}
              alt={s.nym}
              width={120}
              height={120}
              className="h-36 w-36 rounded-full"
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default LTSGrantees
