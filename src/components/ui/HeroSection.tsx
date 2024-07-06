import { SVGProps } from 'react';

export default function HeroSection() {
  return (
    <section className={'bg-[#002935]'}>
      <div
        className={
          'grid grid-cols-3 justify-items-center gap-x-16 aspect-[20/9] content-center'
        }>
        {/* Left side */}
        <div
          className={
            'grid gap-y-4 p-16 content-center lg:col-span-2 col-span-full relative'
          }>
          <p className={'text-white font-medium text-xl'}>
            Online E-Learing Courses
          </p>
          <h1 className={'font-bold text-6xl text-white'}>
            <span className={'text-blue-700'}>Creating</span> a Better Future
            through Education
          </h1>
          <p className={'text-white font-medium'}>
            It is long established fact that reader distracted by the readable
            content.
          </p>

          <div className={'flex flex-wrap gap-4 gap-x-4'}>
            <button className={'px-6 py-2 rounded-full bg-blue-600 text-white'}>
              All Courses
            </button>
            <button className={'px-6 py-2 rounded-full bg-white text-blue-500'}>
              Contact Us
            </button>

            <div className={'inline-flex items-center gap-x-2'}>
              <img
                src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/rev-img.png'
                alt='users'
                decoding='async'
                width={100}
                height={80}
              />
              <span className={'text-white'}>24k + Happy Students</span>
            </div>
          </div>

          <div className={'absolute w-full bottom-0 left-0'}>
            <WaveShape className='text-white' />
          </div>
        </div>

        {/* Right side */}
        <div className={'lg:col-span-1 col-span-full mr-0 lg:mr-8'}>
          <div className={'aspect-square'}>
            <img
              src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/banner.png'
              alt='hero-image'
              width={560}
              height={695}
              decoding='async'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WaveShape(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill='none' viewBox='0 0 1497 333' {...props}>
      <path
        stroke='url(#paint0_linear_3203_231)'
        strokeOpacity='.05'
        strokeWidth='20'
        d='M5 108.243l40.92-22.41C88.08 63.42 169.92 18.598 253 11.127c83.08-7.47 164.92 22.411 248 82.174 83.08 59.764 164.92 149.408 248 194.231 83.08 44.822 164.92 44.822 248 7.47 83.08-37.352 164.92-112.056 248-134.467 83.08-22.411 164.92 7.47 207.08 22.411l40.92 14.941'></path>
      <defs>
        <linearGradient
          id='paint0_linear_3203_231'
          x1='749'
          x2='749'
          y1='10'
          y2='422'
          gradientUnits='userSpaceOnUse'>
          <stop offset='.182' stopColor='#0D5FF9'></stop>
          <stop offset='.844' stopColor='#fff'></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}
