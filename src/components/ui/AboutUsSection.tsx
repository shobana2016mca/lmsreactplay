import { BulbIcon, NotepadIcon } from '../../assets/icons';
import SectionHeading from '../shared/SectionHeading';
import SectionSubHeading from '../shared/SectionSubHeading';
import SectionWrapper from '../shared/SectionWrapper';

export default function AboutUsSection() {
  return (
    <section>
      <SectionWrapper>
        <div
          className={
            'aspect-[20/9] grid grid-cols-1 lg:grid-cols-2 content-center'
          }>
          {/* Left side */}
          <div className={'col-span-1 justify-self-center'}>
            <img
              src='https://getmasum.com/themes-wp/edumoon/wp-content/uploads/2024/04/about.png'
              alt='about-us-image'
              width={549}
              height={519}
              decoding='async'
              // fetchPriority='high'
            />
          </div>

          {/* Right side */}
          <div className={'col-span-1 grid gap-y-4 p-4 content-center'}>
            <div className={'text-left'}>
              <SectionSubHeading>About Us Education</SectionSubHeading>
              <SectionHeading>Go your Skill in Next Level</SectionHeading>
            </div>

            <p className={'text-lg font-normal'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              sed turpis in arcu gravida faucibus euismod eget magna. Donec non
              justo ac libero pharetra congue.
            </p>

            <div className={'grid gap-y-4'}>
              <div className={'flex items-start gap-x-4'}>
                <div>
                  <BulbIcon className='size-12' />
                </div>
                <div>
                  <h4 className={'text-xl font-semibold'}>
                    Our Success Mission
                  </h4>
                  <p className={'text-sm line-clamp-2'}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa nam quas laboriosam laborum mollitia placeat nesciunt
                    consequatur id modi reprehenderit facilis sapiente ducimus,
                    minus tempore enim similique natus, et a.
                  </p>
                </div>
              </div>

              <div className={'flex items-start gap-x-4'}>
                <div>
                  <NotepadIcon className='size-12' />
                </div>
                <div>
                  <h4 className={'text-xl font-semibold'}>
                    Our Success Mission
                  </h4>
                  <p className={'text-sm line-clamp-2'}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Culpa nam quas laboriosam laborum mollitia placeat nesciunt
                    consequatur id modi reprehenderit facilis sapiente ducimus,
                    minus tempore enim similique natus, et a.
                  </p>
                </div>
              </div>

              <button
                className={
                  'text-white bg-blue-700 rounded-full px-6 py-2 justify-self-start'
                }>
                Discover More
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
