import { features } from '../../constants';
import SectionHeading from '../shared/SectionHeading';
import SectionHeadingsWrapper from '../shared/SectionHeadingsWrapper';
import SectionSubHeading from '../shared/SectionSubHeading';
import SectionWrapper from '../shared/SectionWrapper';

export default function FeaturesSection() {
  return (
    <section className={'space-y-8'}>
      <SectionHeadingsWrapper>
        <SectionSubHeading>Features</SectionSubHeading>
        <SectionHeading>One Platform Many Course</SectionHeading>
      </SectionHeadingsWrapper>

      <SectionWrapper>
        <div className={'grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-4'}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={
                'group aspect-[4/2] sm:aspect-square border border-slate-200 hover:border-blue-600 rounded-lg hover:rounded-tr-[90px] transition-all delay-150 duration-300 ease-in-out grid content-center justify-items-center text-center gap-4 p-1 lg:p-2 relative'
              }>
              <div
                className={
                  'bg-blue-100 rounded-full p-4 group-hover:bg-blue-700 group-hover:stroke-blue-100 group-hover:stroke-0'
                }>
                <feature.icon className='size-12 text-blue-500 stroke-1' />
              </div>

              <h3 className={'text-2xl font-semibold'}>{feature.title}</h3>
              <p className={'text-lg font-normal'}>{feature.description}</p>
              <span
                className={
                  'absolute top-0 left-4 bg-blue-700 text-white px-3 text-sm py-1 rounded-b-md'
                }>
                {idx + 1}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}
