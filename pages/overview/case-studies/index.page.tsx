import React from 'react';
import { getLayout } from '~/components/Sidebar';
import Head from 'next/head';
import { Headline1 } from '~/components/Headlines';
import { SectionContext } from '~/context';
import data from 'data/case-studies.json';
import Card from '~/components/Card';

export default function ContentExample() {
  const newTitle = 'Case Studies';
  return (
    <SectionContext.Provider value='docs'>
      <Head>
        <title>{newTitle}</title>
      </Head>
      <Headline1>{newTitle}</Headline1>
      <p className='text-[18px]'>
        Learn how organizations are adopting and benefiting from JSON Schema.
      </p>
      <div className='w-full lg:w-full grid grid-cols-1 md:grid-cols-2 gap-6 my-[10px] mx-auto mt-8'>
        {data.map((element, index) => (
          <Card
            key={index}
            title={element.title}
            body={element.summary}
            image={element.logo}
            link={element.links.url}
          />
        ))}
      </div>
    </SectionContext.Provider>
  );
}
ContentExample.getLayout = getLayout;